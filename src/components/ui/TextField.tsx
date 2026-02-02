import { FontAwesome5, FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";
import { global } from "./style";

type NameIcon =
  | { lib: "MaterialIcons"; name: keyof typeof MaterialIcons.glyphMap }
  | { lib: "FontAwesome6"; name: keyof typeof FontAwesome6.glyphMap }
  | { lib: "FontAwesome5"; name: keyof typeof FontAwesome5.glyphMap };
  
type Props = TextInputProps & {
    label: string;
    errortext?: string;
    icon?: NameIcon;
    value?: string;
    onChangeText?: (text: string) => void;
}

const TextField = ({label, errortext, icon, value, onChangeText, ...restInputProps} : Props) => {

    const renderIcon = () => {
        if (!icon) return null;
        
        switch (icon.lib) {
            case 'MaterialIcons':
                return <MaterialIcons name={icon.name} size={18} color="black" />;
            case 'FontAwesome6':
                return <FontAwesome6 name={icon.name} size={18} color="black" />;
            case 'FontAwesome5':
                return <FontAwesome5 name={icon.name} size={18} color="black" />;
            default:
                return null;
        }
    };

    return(
        <View>
            <Text style={[global.subTitle]}>{label}</Text>

            <View style={[global.inputBox, global.inputBorder, errortext ? global.inpError : null]}>
                {!!icon && (
                    <View style={{ marginRight: 8 }}>
                        {renderIcon()}
                    </View>
                )}

                <TextInput
                    onChangeText={onChangeText}
                    value={value}
                    style={{ flex: 1 }}
                    {...restInputProps}
                />
                
            </View>
            {!!errortext && <Text style={global.errotext}>{errortext}</Text>}
        </View>
    )
}
export default TextField;