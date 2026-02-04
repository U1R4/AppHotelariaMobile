import AuthContainer from "@/components/ui/AuthContainer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { TouchableOpacity, View } from "react-native";
import TextField from "../ui/TextField";
import { Button } from "./Button";
import { style } from "./style";
import React from "react";

const RenderResetpass = () => {
    return(
        <AuthContainer
        title="Esquecido!"
        subtitle="Redefina a Senha"
        icon="hotel"
        >
            <View style={style.leftArrow}> 
                <TouchableOpacity onPress={() => router.push("/(auth)")}> 
                    <MaterialCommunityIcons name="arrow-left" size={25} color="white" />
                </TouchableOpacity>
            </View> 
            

            <TextField
                label="Email"
                icon={{ lib: "MaterialIcons", name: "email" }}
                placeholder="email@email.com"
            />

            <Button
                title="Confirmar"
                onPress={() => console.log('Confirmado')}
            />
        </AuthContainer>

    )
}
export default RenderResetpass;