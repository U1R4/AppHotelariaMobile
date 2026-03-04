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
  telefone: string;
  senha: string;
};
const AuthContext = createContext<AuthContextProps | undefined>(undefined);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    (async () => {
      try {
        const stored = await AsyncStorage.getItem("token");
        if (stored) setToken(stored);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  // LOGIN
  async function signIn(email: string, senha: string) {

    try {
      const res = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, senha }),
      });
      
      if (!res.ok) {
        const err = await res.json().catch(() => null);
        throw new Error(err?.erro || "Credenciais inválidas");
      }

      const tokenAPI: string = await res.json();
      await AsyncStorage.setItem("token", tokenAPI);
      setToken(tokenAPI);

      
    } catch (error) {
      console.error("Erro na requisição:", error);
      throw error;
    }
  }

  // REGISTER
  async function register(userData: RegisterData) {
    try {
      const cpfLimpo = userData.cpf.replace(/\D/g, '');
      const telefoneLimpo = userData.telefone.replace(/\D/g, '');
      
      const dadosParaEnviar = { 
        nome: userData.nome,
        email: userData.email,
        cpf: cpfLimpo,
        telefone: telefoneLimpo,
        senha: userData.senha
      };
      
      const url = `${API_URL}/login/logon`;
      
      console.log('Enviando para registro:', {
        url,
        dados: {
          nome: dadosParaEnviar.nome,
          email: dadosParaEnviar.email,
          cpf: dadosParaEnviar.cpf,
          telefone: dadosParaEnviar.telefone
        }
      });
      
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dadosParaEnviar),
      });
      
      console.log('Status da resposta:', res.status);
      
      if (!res.ok) {
        let errorMessage = "Erro ao realizar cadastro";
        
        try {
          const errorData = await res.json();
          console.log('Erro detalhado:', errorData);
          errorMessage = errorData?.erro || errorData?.message || errorMessage;
        } catch {
          try {
            const errorText = await res.text();
            console.log('Erro texto:', errorText);
            errorMessage = errorText || errorMessage;
          } catch (e) {
            console.log('Não foi possível ler o erro');
          }
        }
        
        throw new Error(errorMessage);
      }

      const tokenAPI: string = await res.json();
      console.log('Token recebido:', tokenAPI ? 'Sim' : 'Não');
      
      await AsyncStorage.setItem("token", tokenAPI);
      setToken(tokenAPI);
      
      return tokenAPI;
      
    } catch (error) {
      console.error('Erro completo na requisição:', error);
      throw error;
    }
  }

  // LOGOUT
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