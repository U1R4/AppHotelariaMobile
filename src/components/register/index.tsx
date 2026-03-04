// src/components/RenderRegister.tsx

import AuthContainer from "@/components/ui/AuthContainer";
import { useAuth } from "@/context/AuthContext";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { TextInputMask } from 'react-native-masked-text';
import { Button } from "./Button";
import { style } from "./style";

const RenderRegister = () => {
    const { register, isLoading: authLoading } = useAuth();
    const [loading, setLoading] = useState(false);
    
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        cpf: '',
        telefone: '',
        senha: '',
        confirmSenha: ''
    });
    
    const [showSenha, setShowSenha] = useState(false);
    const [showConfirmSenha, setShowConfirmSenha] = useState(false);

    const handleChange = (field: string, value: string) => {
        setFormData({...formData, [field]: value});
    };

    // Função para validar os campos
    const validateForm = () => {
        if (!formData.nome || !formData.email || !formData.cpf || !formData.telefone || !formData.senha || !formData.confirmSenha) {
            Alert.alert("Erro", "Todos os campos são obrigatórios");
            return false;
        }
        
        if (formData.senha !== formData.confirmSenha) {
            Alert.alert("Erro", "As senhas não coincidem");
            return false;
        }
        
        if (formData.senha.length < 6) {
            Alert.alert("Erro", "A senha deve ter pelo menos 6 caracteres");
            return false;
        }
        
        // Validação básica de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            Alert.alert("Erro", "E-mail inválido");
            return false;
        }
        
        return true;
    };

    const handleRegister = async () => {
        if (!validateForm()) return;
        
        setLoading(true);
        
        try {
            console.log('Iniciando registro com dados:', {
                nome: formData.nome,
                email: formData.email,
                cpf: formData.cpf,
                telefone: formData.telefone,
            });
            
            const token = await register({
                nome: formData.nome,
                email: formData.email,
                cpf: formData.cpf,
                telefone: formData.telefone,
                senha: formData.senha
            });
            
            console.log('Registro realizado com sucesso!');
            
            Alert.alert(
                "Sucesso", 
                "Cadastro realizado com sucesso!",
                [
                    { 
                        text: "OK", 
                        onPress: () => router.push("/(auth)")
                    }
                ]
            );
            
        } catch (error) {
            console.error('Erro no registro:', error);
            
            Alert.alert(
                "Erro no Cadastro", 
                error instanceof Error ? error.message : "Erro ao conectar com o servidor"
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthContainer
            title="Bem-Vindo"
            subtitle="Faça seu cadastro"
            icon="hotel"
        >
            <View style={style.leftArrow}> 
                <TouchableOpacity onPress={() => router.push("/(auth)")}> 
                    <MaterialCommunityIcons name="arrow-left" size={25} color="#000000ff" />
                </TouchableOpacity>
            </View> 
    
            {/* Campo Nome Completo */}
            <View style={style.inputContainer}>
                <Text style={style.inputLabel}>Nome Completo</Text>
                <View style={style.inputWrapper}>
                    <MaterialCommunityIcons name="account" size={20} style={style.inputIcon} />
                    <TextInput
                        value={formData.nome}
                        onChangeText={(text) => handleChange('nome', text)}
                        placeholder="Seu nome completo"
                        style={style.inputField}
                        placeholderTextColor={style.placeholderColor.color}
                        editable={!loading && !authLoading}
                    />
                </View>
            </View>

            {/* Campo E-mail */}
            <View style={style.inputContainer}>
                <Text style={style.inputLabel}>E-mail</Text>
                <View style={style.inputWrapper}>
                    <MaterialCommunityIcons name="email" size={20} style={style.inputIcon} />
                    <TextInput
                        value={formData.email}
                        onChangeText={(text) => handleChange('email', text)}
                        placeholder="email@email.com"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        style={style.inputField}
                        placeholderTextColor={style.placeholderColor.color}
                        editable={!loading && !authLoading}
                    />
                </View>
            </View>

            {/* Campo CPF com máscara */}
            <View style={style.inputContainer}>
                <Text style={style.inputLabel}>CPF</Text>
                <View style={style.inputWrapper}>
                    <MaterialCommunityIcons name="card-account-details" size={20} style={style.inputIcon} />
                    <TextInputMask
                        type={'cpf'}
                        value={formData.cpf}
                        onChangeText={(text) => handleChange('cpf', text)}
                        placeholder="000.000.000-00"
                        keyboardType="numeric"
                        style={style.inputField}
                        placeholderTextColor={style.placeholderColor.color}
                        editable={!loading && !authLoading}
                    />
                </View>
            </View>

            {/* Campo Telefone com máscara */}
            <View style={style.inputContainer}>
                <Text style={style.inputLabel}>Telefone</Text>
                <View style={style.inputWrapper}>
                    <MaterialCommunityIcons name="phone" size={20} style={style.inputIcon} />
                    <TextInputMask
                        type={'cel-phone'}
                        options={{
                            maskType: 'BRL',
                            withDDD: true,
                            dddMask: '(99) '
                        }}
                        value={formData.telefone}
                        onChangeText={(text) => handleChange('telefone', text)}
                        placeholder="(00) 00000-0000"
                        keyboardType="phone-pad"
                        style={style.inputField}
                        placeholderTextColor={style.placeholderColor.color}
                        editable={!loading && !authLoading}
                    />
                </View>
            </View>

            {/* Campo Senha */}
            <View style={style.inputContainer}>
                <Text style={style.inputLabel}>Senha</Text>
                <View style={style.inputWrapper}>
                    <MaterialCommunityIcons name="key" size={20} style={style.inputIcon} />
                    <TextInput
                        value={formData.senha}
                        onChangeText={(text) => handleChange('senha', text)}
                        placeholder="***********"
                        secureTextEntry={!showSenha}
                        style={style.inputField}
                        placeholderTextColor={style.placeholderColor.color}
                        editable={!loading && !authLoading}
                    />
                    
                    <TouchableOpacity onPress={() => setShowSenha(!showSenha)}>
                        <MaterialCommunityIcons 
                            name={showSenha ? "eye-off" : "eye"} 
                            size={20} 
                            style={style.eyeIcon} 
                        />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Campo Confirmar Senha */}
            <View style={style.inputContainer}>
                <Text style={style.inputLabel}>Confirmar Senha</Text>
                <View style={style.inputWrapper}>
                    <MaterialCommunityIcons name="key" size={20} style={style.inputIcon} />
                    <TextInput
                        value={formData.confirmSenha}
                        onChangeText={(text) => handleChange('confirmSenha', text)}
                        placeholder="***********"
                        secureTextEntry={!showConfirmSenha}
                        style={style.inputField}
                        placeholderTextColor={style.placeholderColor.color}
                        editable={!loading && !authLoading}
                    />
                    <TouchableOpacity onPress={() => setShowConfirmSenha(!showConfirmSenha)}>
                        <MaterialCommunityIcons 
                            name={showConfirmSenha ? "eye-off" : "eye"} 
                            size={20} 
                            style={style.eyeIcon} 
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <Button
                title={loading ? "Cadastrando..." : "Registre-se"}
                onPress={handleRegister}
                disabled={loading || authLoading}
            />
        </AuthContainer>
    )
}

export default RenderRegister;