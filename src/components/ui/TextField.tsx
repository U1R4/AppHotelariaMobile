import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";
import { global } from "./style";


type Props = TextInputProps &{
    label: string;
    errortext?: string;
    icon?: keyof typeof MaterialIcons.glyphMap;
}

const TextField = ({label, errortext, icon} : Props) => {

    const [intput, setInput] = React.useState('');

    return(
        <View>
            <Text style={[global.subTitle]}>{label}</Text>

            <View style={[global.inputBox, global.inputBorder, errortext ? global.inpError : null]}>
                {!! icon && (
                    <View>
                        <MaterialIcons style={global.icon} name={icon} size={18} color ="black"/>
                    </View>
                )}

                <TextInput
                    onChangeText={setInput}
                    value={intput}
                    placeholder={label}
                />
            </View>
            {!! errortext &&<Text style={global.errotext}>{errortext}</Text>}
        </View>
    )
}
export default TextField;