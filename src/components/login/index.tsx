import AuthContainer from "@/components/ui/AuthContainer";
import { router } from "expo-router";
import { Text, TouchableOpacity } from "react-native";
import PassField from "../ui/PassFiled";
import TextField from "../ui/TextField";
import { Button } from "./Button";
import { style } from "./style";


const RenderLogin = () => {
    return(
        <AuthContainer
            title="Bem-Vindo"
            subtitle="Faça seu login"
            icon="hotel"
            >
                       
            <TextField
                label="E-mail"
                icon="email"
                placeholder="email@email.com"
            >
            </TextField>

            <PassField
                label="Senha"
                icon="key"
                placeholder="***********"
            >
            </PassField>

            <Button
                title="Login"
                onPress={() => console.log('Login')}
            />
            
            
            <TouchableOpacity onPress={()=> router.push("/(auth)/resetPass")}>
                <Text  style ={style.changePassTxt}>Redefina a sua senha!</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> router.push("/(auth)/register")}>
                <Text style ={style.changePassTxt}>Cadastre-se!</Text>
            </TouchableOpacity>
        </AuthContainer>

    )
}
export default RenderLogin;