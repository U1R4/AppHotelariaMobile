import { useState } from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import DatePicker, { getToday } from 'react-native-modern-datepicker';
import { global } from "./style";

type Props = {
    onSelectDate: (date: string) => void;
    onClose?: () => void;
}

const DateSelector = ({ onSelectDate, onClose }: Props) => {
    const { width, height } = Dimensions.get("window");
    const startDate = getToday();
    const [selectedDate, setSelectedDate] = useState<string>("");

    const handleDateSelect = (date: string) => {
        console.log("Data selecionada:", date);
        setSelectedDate(date);
    };

    const handleConfirm = () => {
        if (selectedDate) {
            const formattedDate = formatDateToBR(selectedDate);
            onSelectDate(formattedDate);
        }
        if (onClose) onClose();
    };

    const formatDateToBR = (dateString: string): string => {
        try {
            const parts = dateString.split('/');
            if (parts.length === 3) {
                const [year, month, day] = parts;
                return `${day}/${month}/${year}`;
            }
            return dateString;
        } catch (error) {
            console.error("Erro ao formatar data:", error);
            return dateString;
        }
    };

    return (
        <View style={global.centerView}>
            <View style={[global.modalView, { width: width * 0.9 }]}>
                
                <DatePicker
                    mode="calendar"
                    options={{
                        mainColor: "#4b0505",
                        textHeaderColor: "#4b0505",
                        textDefaultColor: "#4b0505",
                        textSecondaryColor: "#4b0505",
                        textFontSize: 14,
                        textHeaderFontSize: 16,
                    }}
                    style={{ 
                        borderRadius: 15, 
                        width: width * 0.8, 
                        height: height * 0.35 
                    }}
                    isGregorian={true}
                    minimumDate={startDate}
                    selected={selectedDate || startDate}
                    onSelectedChange={handleDateSelect}
                />

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 15 }}>
                    <TouchableOpacity 
                        style={[global.closeButton, { flex: 1, marginRight: 10, backgroundColor: '#666' }]}
                        onPress={onClose}
                    >
                        <Text style={global.closeButtonText}>Cancelar</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity 
                        style={[global.closeButton, { flex: 1, marginLeft: 10, backgroundColor: '#4b0505' }]}
                        onPress={handleConfirm}
                    >
                        <Text style={global.closeButtonText}>Confirmar</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
};

export default DateSelector;