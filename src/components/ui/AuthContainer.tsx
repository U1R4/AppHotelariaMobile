import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {
    title: string;
    subtitle?:string;
    icon?: keyof typeof FontAwesome5.glyphMap;
    // children: React.ReactNode;
}

export default function AuthContainer({title, subtitle, icon, /*children*/}:Props){

    return (
        <SafeAreaView>
            <FontAwesome5 name={icon} size={25} color="black"/>
            <Text>{title}</Text>
            <Text>{subtitle}</Text>
            <TextInput 
            placeholder="Digite seu Email"/>
        </SafeAreaView>
    );
}