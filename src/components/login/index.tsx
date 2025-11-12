import AuthContainer from "@/components/ui/AuthContainer";
import { Text, TouchableOpacity, View } from "react-native";
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
            >
            </TextField>

            <TextField
                label="Senha"
                icon="key"
            >
            </TextField>

            <Button
                title="Login"
                onPress={() => console.log('Login')}
            />
            
            
            <TouchableOpacity >
                <Text style ={style.changePassTxt}>Redefina a sua senha!</Text>
            </TouchableOpacity>
        </AuthContainer>

    )
}
export default RenderLogin;