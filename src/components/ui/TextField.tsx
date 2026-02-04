import { FontAwesome5, FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";
import { Colors, global } from "./style";

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
    style?: any;
    containerStyle?: any;
}

const TextField = ({label, errortext, icon, value, onChangeText, style, containerStyle, ...restInputProps}: Props) => {
    const renderIcon = () => {
        if (!icon) return null;
        
        switch (icon.lib) {
            case 'MaterialIcons':
                return <MaterialIcons name={icon.name} size={16} color={Colors.textDisabled} />;
            case 'FontAwesome6':
                return <FontAwesome6 name={icon.name} size={16} color={Colors.textDisabled} />;
            case 'FontAwesome5':
                return <FontAwesome5 name={icon.name} size={16} color={Colors.textDisabled} />;
            default:
                return null;
        }
    };

    return(
        <View style={containerStyle}>
            {label ? <Text style={global.label}>{label}</Text> : null}
            <View style={[global.inputBox, global.inputBorder, errortext ? global.inpError : null, style]}>
                {!!icon && (
                    <View style={global.icon}>
                        {renderIcon()}
                    </View>
                )}
                <TextInput
                    onChangeText={onChangeText}
                    value={value}
                    style={{ 
                        flex: 1, 
                        fontSize: 15, 
                        color: Colors.inputText,
                        padding: 0,
                        margin: 0
                    }}
                    placeholderTextColor={Colors.textDisabled}
                    {...restInputProps}
                />
            </View>
            {!!errortext && <Text style={global.errotext}>{errortext}</Text>}
        </View>
    )
}
export default TextField;