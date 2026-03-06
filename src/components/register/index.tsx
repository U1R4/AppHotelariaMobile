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
        phone: '',
        password: '',
        confirmPassword: ''
    });
    
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleChange = (field: string, value: string) => {
        setFormData({...formData, [field]: value});
    };

    const validateForm = () => {
        if (!formData.nome || !formData.email || !formData.cpf || !formData.phone || !formData.password || !formData.confirmPassword) {
            Alert.alert("Erro", "Todos os campos são obrigatórios");
            return false;
        }
        
        if (formData.password !== formData.confirmPassword) {
            Alert.alert("Erro", "As senhas não coincidem");
            return false;
        }
        
        return true;
    };

    const handleRegister = async () => {
        if (!validateForm()) return;
        
        setLoading(true);
        
        try {
            await register({
                nome: formData.nome,
                email: formData.email,
                cpf: formData.cpf,
                phone: formData.phone,
                password: formData.password
            });
            
            Alert.alert(
                "Sucesso", 
                "Cadastro realizado com sucesso!",
                [{ text: "OK", onPress: () => router.push("/(auth)") }]
            );
            
        } catch (error) {
            Alert.alert("Erro", error instanceof Error ? error.message : "Erro ao cadastrar");
        } finally {
            setLoading(false);
        }
    };

    return(
        <AuthContainer title="Bem-Vindo" subtitle="Faça seu cadastro" icon="hotel">
            <View style={style.leftArrow}> 
                <TouchableOpacity onPress={() => router.push("/(auth)")}> 
                    <MaterialCommunityIcons name="arrow-left" size={25} color="#000000ff" />
                </TouchableOpacity>
            </View> 
    
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

            <View style={style.inputContainer}>
                <Text style={style.inputLabel}>Telefone</Text>
                <View style={style.inputWrapper}>
                    <MaterialCommunityIcons name="phone" size={20} style={style.inputIcon} />
                    <TextInputMask
                        type={'cel-phone'}
                        options={{ maskType: 'BRL', withDDD: true, dddMask: '(99) ' }}
                        value={formData.phone}
                        onChangeText={(text) => handleChange('phone', text)}
                        placeholder="(00) 00000-0000"
                        keyboardType="phone-pad"
                        style={style.inputField}
                        placeholderTextColor={style.placeholderColor.color}
                        editable={!loading && !authLoading}
                    />
                </View>
            </View>

            <View style={style.inputContainer}>
                <Text style={style.inputLabel}>Senha</Text>
                <View style={style.inputWrapper}>
                    <MaterialCommunityIcons name="key" size={20} style={style.inputIcon} />
                    <TextInput
                        value={formData.password}
                        onChangeText={(text) => handleChange('password', text)}
                        placeholder="***********"
                        secureTextEntry={!showPassword}
                        style={style.inputField}
                        placeholderTextColor={style.placeholderColor.color}
                        editable={!loading && !authLoading}
                    />
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        <MaterialCommunityIcons name={showPassword ? "eye-off" : "eye"} size={20} style={style.eyeIcon} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={style.inputContainer}>
                <Text style={style.inputLabel}>Confirmar Senha</Text>
                <View style={style.inputWrapper}>
                    <MaterialCommunityIcons name="key" size={20} style={style.inputIcon} />
                    <TextInput
                        value={formData.confirmPassword}
                        onChangeText={(text) => handleChange('confirmPassword', text)}
                        placeholder="***********"
                        secureTextEntry={!showConfirmPassword}
                        style={style.inputField}
                        placeholderTextColor={style.placeholderColor.color}
                        editable={!loading && !authLoading}
                    />
                    <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                        <MaterialCommunityIcons name={showConfirmPassword ? "eye-off" : "eye"} size={20} style={style.eyeIcon} />
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