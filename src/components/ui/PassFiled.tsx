import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import TextField from "./TextField";
import { global } from "./style";

type Props = React.ComponentProps<typeof TextField>;

const PassField = (restInputProps: Props) => {
    const [show, setShow] = useState(false);
    return (
        <View>
            <TextField
            {...restInputProps}
            secureTextEntry={!show}
            autoCorrect={false}            
            />

            <TouchableOpacity style={global.eyeIcon} onPress={() => setShow((showTrue) => !showTrue)}>
                <Ionicons name={show ? "eye-outline" : "eye-off-outline"} size={23} 
                color="#000"/>
            </TouchableOpacity> 
        
        </View>
    );
};
export default PassField;