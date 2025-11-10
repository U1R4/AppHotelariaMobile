import { MaterialIcons } from "@expo/vector-icons";
import { Text, TextInput, TextInputProps, View } from "react-native";


type Props = TextInputProps &{
    label: string;
    errortext?: string;
    icon?: keyof typeof MaterialIcons.glyphMap;
}

export default function TextField({label, errortext, icon} : Props){

    return(
        <View>
            <Text>{label}</Text>

            <View>
                {!! icon && (
                    <View>
                        <MaterialIcons name={icon} size={18} color ="black"/>
                    </View>
                )}
                <TextInput value="Teste"/>
            </View>
        </View>
    )

}