import AuthContainer from "@/components/ui/AuthContainer";
import { useAuth } from "@/context/AuthContext";
import { router } from "expo-router";
import React, { useMemo, useState } from 'react';
import { Alert, Text, TouchableOpacity } from "react-native";
import PassField from "../ui/PassFiled";
import TextField from "../ui/TextField";
import { Button } from "./Button";
import { style } from "./style";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const RenderLogin = () => {
    const{ signIn } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [touched, setTouched] = useState<{email?: boolean; password?: boolean}>({});

    const errors = useMemo(() => {
        const error: Record<string, string> = {};
        if (touched.email && !email) error.email = "E-mail obrigatório";
        if (touched.password && !password) error.password = "Senha obrigatória";
        if (touched.email && email && !isValidEmail(email)) error.email = "Digite um e-mail válido";
        return error;
    }, [email, password, touched]);

    const canSubmit = email && password && Object.keys(errors).length === 0 && !loading;
    
     const handleSubmit = async () => {
    try {
        setLoading(true);
        await signIn(email.trim(), password);
        Alert.alert("Login bem-sucedido!");
        router.replace("/(tabs)/explorer");
    } catch (erro: any) {
        Alert.alert("Erro", erro?.message || "Falha ao tentar logar!");
    } finally {
        setLoading(false);
        }
    };

    return(
        <AuthContainer
            title="Bem-Vindo"
            subtitle="Faça seu login"
            icon="hotel"
        >
            <TextField
                label="E-mail"
                icon={{ lib: "MaterialIcons", name: "email" }}
                placeholder="email@email.com"
                value={email}
                onChangeText={setEmail}
                onBlur={() => setTouched(prev => ({ ...prev, email: true }))}
                errortext={errors.email}
                keyboardType="email-address"
            />

            <PassField
                label="Senha"
                icon={{ lib: "MaterialIcons", name: "key" }}
                placeholder="***********"
                value={password}
                onChangeText={setPassword}
                onBlur={() => setTouched(prev => ({ ...prev, password: true }))}
                errortext={errors.password}
            />

            <Button
                title={loading ? "Carregando..." : "Login"}
                onPress={handleSubmit}
                disabled={!canSubmit}
            />
            
            <TouchableOpacity onPress={() => router.push("/(auth)/resetPass")}>
                <Text style={style.changePassTxt}>Redefina a sua senha!</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => router.push("/(auth)/register")}>
                <Text style={style.changePassTxt}>Cadastre-se!</Text>
            </TouchableOpacity>
        </AuthContainer>
    );
};

export default RenderLogin;