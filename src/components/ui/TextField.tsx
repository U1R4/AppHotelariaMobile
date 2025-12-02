import { FontAwesome5, FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";
import { global } from "./style";

type NameIcon =
  | { lib: "MaterialIcons"; name: keyof typeof MaterialIcons.glyphMap }
  | { lib: "FontAwesome6"; name: keyof typeof FontAwesome6.glyphMap }
  | { lib: "FontAwesome5"; name: keyof typeof FontAwesome5.glyphMap };
  
type Props = TextInputProps &{
    label: string;
    errortext?: string;
    icon?: NameIcon;
}

const TextField = ({label, errortext, icon, ...restInputProps} : Props) => {

    const [intput, setInput] = React.useState('');

    return(
        <View>
            <Text style={[global.subTitle]}>{label}</Text>

            <View style={[global.inputBox, global.inputBorder, errortext ? global.inpError : null]}>
                {!! icon && (
                    <View>
                        <MaterialIcons style={global.icon} NameIcon={icon} size={18} color ="black"/>
                    </View>
                )}

                <TextInput
                    onChangeText={setInput}
                    value={intput}
                    {...restInputProps}
                />
                
            </View>
            {!! errortext &&<Text style={global.errotext}>{errortext}</Text>}
        </View>
    )
}
export default TextField;