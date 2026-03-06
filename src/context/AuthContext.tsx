// context/AuthContext.tsx
import { API_URL } from "@/constants/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

type AuthContextProps = {
  token: string | null;
  isLoading: boolean;
  signIn: (email: string, senha: string) => Promise<void>;
  signOut: () => Promise<void>;
  register: (userData: RegisterData) => Promise<any>;
};

type RegisterData = {
  nome: string;
  email: string;
  cpf: string;
  phone: string;
  password: string;
};

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    (async () => {
      try {
        const stored = await AsyncStorage.getItem("token");
        if (stored) {
          const cleanToken = stored.trim();
          setToken(cleanToken);
        }
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  async function signIn(email: string, senha: string) {
    try {
      const res = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), senha: senha.trim() }),
      });
      
      const responseText = await res.text();
      
      if (!res.ok) {
        let errorMessage = "Dados invalidos";
        try {
          const errorData = JSON.parse(responseText);
          errorMessage = errorData?.erro || errorMessage;
        } catch {}
        throw new Error(errorMessage);
      }

      let cleanToken = responseText.trim();
      
      if (cleanToken.startsWith('"') && cleanToken.endsWith('"')) {
        cleanToken = cleanToken.slice(1, -1);
      }
      
      try {
        const parsed = JSON.parse(cleanToken);
        if (typeof parsed === 'string') {
          cleanToken = parsed;
        }
      } catch {}
      
      await AsyncStorage.setItem("token", cleanToken);
      setToken(cleanToken);
      
    } catch (error) {
      throw error;
    }
  }

  async function register(userData: RegisterData) {
    try {
      const cpfLimpo = userData.cpf.replace(/\D/g, '');
      const telefoneLimpo = userData.phone.replace(/\D/g, '');
      
      const res = await fetch(`${API_URL}/login/logon`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          nome: userData.nome,
          email: userData.email,
          cpf: cpfLimpo,
          telefone: telefoneLimpo,
          senha: userData.password 
        }),
      });
      
      const responseText = await res.text();
      
      if (!res.ok) {
        let errorMessage = "Erro ao realizar cadastro";
        try {
          const errorData = JSON.parse(responseText);
          errorMessage = errorData?.erro || errorMessage;
        } catch {}
        throw new Error(errorMessage);
      }
      
      let cleanToken = responseText.trim();
      
      if (cleanToken.startsWith('"') && cleanToken.endsWith('"')) {
        cleanToken = cleanToken.slice(1, -1);
      }
      
      try {
        const parsed = JSON.parse(cleanToken);
        if (typeof parsed === 'string') {
          cleanToken = parsed;
        }
      } catch {}
      
      await AsyncStorage.setItem("token", cleanToken);
      setToken(cleanToken);
      return cleanToken;
      
    } catch (error) {
      throw error;
    }
  }

  async function signOut() {
    await AsyncStorage.removeItem("token");
    setToken(null);
  }

  const value = useMemo(
    () => ({ token, isLoading, signIn, signOut, register }),
    [token, isLoading],
  );
  
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth() deve ser usado dentro de AuthProvider");
  return ctx;
};

export default AuthProvider;