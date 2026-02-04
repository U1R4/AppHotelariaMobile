import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import DatePicker from 'react-native-modern-datepicker';
import { Colors, global } from "./style";

type Props = {
    onSelectDate: (date: string) => void;
    onClose?: () => void;
    title?: string;
}

const DateSelector = ({ onSelectDate, onClose, title = "Selecione a data" }: Props) => {
    const [selectedDate, setSelectedDate] = useState<string>("");
    const today = new Date();
    const startDate = `${today.getFullYear()}/${(today.getMonth() + 1).toString().padStart(2, '0')}/${today.getDate().toString().padStart(2, '0')}`;

    const handleDateSelect = (date: string) => { 
        const formattedDate = formatDateToBR(date); 
        setSelectedDate(formattedDate);
    };

    const handleConfirm = () => {
        if (selectedDate) {
            onSelectDate(selectedDate);
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
            return dateString;
        }
    };

    return (
        <View style={global.centerView}>
            <View style={global.dateSelectorContainer}>
                <View style={global.dateSelectorHeader}>
                    <Text style={global.dateSelectorTitle}>{title}</Text>
                </View>
                
                <View style={global.dateSelectorCalendarContainer}>
                    <DatePicker
                        mode="calendar"
                        options={{
                            mainColor: Colors.goldPrimary,
                            textHeaderColor: Colors.goldPrimary,
                            textDefaultColor: Colors.textPrimary,
                            textSecondaryColor: Colors.textSecondary,
                            textFontSize: responsiveFont(14),
                            textHeaderFontSize: responsiveFont(16),
                            defaultFont: "System",
                            headerFont: "System",
                            backgroundColor: Colors.darkSecondary,
                            headerAnimationDistance: 50,
                            daysAnimationDistance: 200,
                            borderColor: Colors.goldOverlay,
                        }}
                        isGregorian={true}
                        minimumDate={startDate}
                        selected={startDate}
                        onSelectedChange={handleDateSelect}
                        onDateChange={() => {}}
                        style={{
                            borderRadius:3,
                        }}
                    />
                </View>
                
                <View style={global.dateSelectorButtonsContainer}>
                    <TouchableOpacity 
                        style={global.dateSelectorCancelButton}
                        onPress={onClose}
                    >
                        <Text style={global.dateSelectorCancelText}>Cancelar</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity 
                        style={[global.dateSelectorConfirmButton, !selectedDate && { opacity: 0.5 }]}
                        onPress={handleConfirm}
                        disabled={!selectedDate}
                    >
                        <Text style={global.dateSelectorConfirmText}>
                            {selectedDate ? `Confirmar ${selectedDate}` : 'Confirmar'}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

// Adicione essa linha se o responsiveFont não estiver sendo importado corretamente
import { responsiveFont } from './style';

export default DateSelector;