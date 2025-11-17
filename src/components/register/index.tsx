import AuthContainer from "@/components/ui/AuthContainer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { TouchableOpacity, View } from "react-native";
import PassField from "../ui/PassFiled";
import TextField from "../ui/TextField";
import { Button } from "./Button";
import { style } from "./style";


const RenderRegister = () => {
    return(
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
    
            <TextField
                label="E-mail"
                icon="email"
                placeholder="email@email.com"
            >
            </TextField>

            <TextField
                label="CPF"
                icon="email"
                placeholder="000.000.000-00"
            >
            </TextField>

            <TextField
                label="Telefone"
                icon="email"
                placeholder="(00) 00000-000"
            > 
            </TextField>

            <PassField
                label="Senha"
                icon="key"
                placeholder="***********"
            >
            </PassField>

            <PassField
                label="Senha"
                icon="key"
                placeholder="***********"
            >
            </PassField>

            <Button
                title="Registre-se"
                onPress={() => console.log('Login')}
            />
        </AuthContainer>

    )
}
export default RenderRegister;