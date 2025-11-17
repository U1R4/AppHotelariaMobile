import AuthContainer from "@/components/ui/AuthContainer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import TextField from "../ui/TextField";
import { Button } from "./Button";
import { style } from "./style";


const RenderResetpass = () => {
    return(
        <AuthContainer
        title="Esquecido!"
        subtitle="Redefina a Senha"
        icon="hotel"
        >
            <View style={style.leftArrow}> 
                <TouchableOpacity onPress={() => router.push("/(auth)")}> 
                    <MaterialCommunityIcons name="arrow-left" size={25} color="#000000ff" />
                </TouchableOpacity>
            </View> 
            

            <TextField
                label="Email"
                icon="email"
                placeholder="email@email.com"
            >
            </TextField>

            <Button
                title="Confirmar"
                onPress={() => console.log('Confirmado')}
            />
        </AuthContainer>

    )
}
export default RenderResetpass;