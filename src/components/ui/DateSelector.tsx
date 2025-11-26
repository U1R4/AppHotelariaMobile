import DatePicker from '@react-native-community/datetimepicker';
import { useState } from "react";
import { Modal, Platform, Text, TouchableOpacity, View } from "react-native";
import { global } from "./style";

type Props = {
    label: string;
}

const DateSelector = ({label}:Props) => {
    const [open, setOpen] = useState(false);
    const [date, setDate] = useState(new Date());

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    

    const handleChange = (event: any, selectedDate?: Date) => {
        setOpen(false);
        if (selectedDate) setDate(selectedDate);
    };

    return(
        <View style={global.container}>
            <TouchableOpacity style={global.button} onPress={() => setOpen(true)}>
                <Text style={global.buttonText}>{label}</Text>
                <Text style={global.dateText}>{date.toLocaleDateString('pt-BR')}</Text>
            </TouchableOpacity>

            {Platform.OS === 'android' && open && (
                <DatePicker
                    value={date}
                    mode="date"
                    onChange={handleChange}
                    minimumDate={tomorrow}
                    themeVariant='dark'
                />
            )}

            {Platform.OS === 'ios' && (
                <Modal animationType="slide" transparent visible={open}>
                    <View style={global.modalOverlay}>
                        <View style={global.modalContent}>
                            <DatePicker
                                value={date}
                                mode="date"
                                display="spinner"
                                onChange={handleChange}
                                minimumDate={tomorrow}
                                textColor="#ffffffff"
                                style={global.iosPicker}
                            />
                            <TouchableOpacity style={global.closeButton} onPress={() => setOpen(false)}>
                                <Text style={global.closeButtonText}>Fechar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            )}
        </View>
    )
}

export default DateSelector;