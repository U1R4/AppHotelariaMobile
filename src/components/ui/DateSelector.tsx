import { useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import DatePicker, { getFormatedDate } from 'react-native-modern-datepicker';
import { global } from "./style";

const DateSelector = () => {

    const [open, setOpen] = useState(false);
    const [date, setDate] = useState('12/12/2023');

    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const startDate = getFormatedDate(tomorrow, 'YYYY/MM/DD');

    function handleOnPress() {
        setOpen(!open);
    }

    function handleChange(propDate: string) {
        setDate(propDate);
    }

    return(
        <View style={global.container}>
            <TouchableOpacity onPress={handleOnPress}>
                <Text>Open</Text>
            </TouchableOpacity>

            <Modal
            animationType="slide"
            transparent={true}
            visible={open}
            >
                <View style={global.centerView}>
                    <View style={global.modalView}>

                        <DatePicker
                        mode='calendar'
                        selected={date}
                        minimumDate={startDate}
                        onSelectedChange={handleChange}
                        />

                        <TouchableOpacity onPress={handleOnPress}>
                            <Text>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </Modal>
        </View>
    )
}

export default DateSelector;