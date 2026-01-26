import { Dimensions } from "react-native";
import InputSpinner from "react-native-input-spinner";

type Props={
    onSelectSpin: (guests: string) => void;
};

const InputSpin = ({onSelectSpin}: Props) =>{



    const {width, height} = Dimensions.get("window")
    return(   
        <InputSpinner
        max={6}
        min={1}
        step={1}
        colorMax={"#ff000000"}
        colorMin={"#ebebeb00"}
        />
    );
}

export default InputSpin;