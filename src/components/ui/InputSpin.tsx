import { Dimensions } from "react-native";
import InputSpinner from "react-native-input-spinner";

type Props={
    guests: number;
    onSelectSpin: (guests: number) => void;
    minGuests: number;
    colorMax: string;
    colorMin: string;
    max: number;
    step: number;
};

const InputSpin = ({guests,onSelectSpin,minGuests,colorMax,colorMin,step,max}: Props) =>{
    const {width, height} = Dimensions.get("window")
    return(   
        <InputSpinner
        value={guests}
        onChange={onSelectSpin}
        max={max}
        min={minGuests}
        step={step}
        colorMax={colorMax}
        colorMin={colorMin}
        />
    );
}

export default InputSpin;