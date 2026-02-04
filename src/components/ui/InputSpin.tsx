import React from "react";
import InputSpinner from "react-native-input-spinner";
import { Colors } from "./style";

type Props={
    guests: number;
    onSelectSpin: (guests: number) => void;
    minGuests: number;
    colorMax: string;
    colorMin: string;
    max: number;
    step: number;
    containerStyle?: any;
};

const InputSpin = ({guests, onSelectSpin, minGuests, colorMax, colorMin, step, max, containerStyle}: Props) => {
    return(   
        <InputSpinner
            value={guests}
            onChange={onSelectSpin}
            max={max}
            min={minGuests}
            step={step}
            colorMax={colorMax || Colors.goldPrimary}
            colorMin={colorMin || Colors.textSecondary}
            color={Colors.darkTertiary}
            colorPress={Colors.goldPrimary}
            background={Colors.darkSecondary}
            textColor={Colors.textPrimary}
            style={containerStyle}
        />
    );
}

export default InputSpin;