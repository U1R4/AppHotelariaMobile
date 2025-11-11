import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";
import { global } from "./style";


type Props = TextInputProps &{
    label: string;
    errortext?: string;
    icon?: keyof typeof MaterialIcons.glyphMap;
}

export default function TextField({label, errortext, icon} : Props){

    return(
        <View>
            <Text style={[global.subTitle]}>{label}</Text>

            <View style={[global.inputBorder, global.inputBox]}>
                {!! icon && (
                    <View>
                        <MaterialIcons style={global.icon} name={icon} size={18} color ="black"/>
                    </View>
                )}

                <TextInput 
                    value="" 
                    placeholder={label}
                />
            </View>
        </View>
    )

}