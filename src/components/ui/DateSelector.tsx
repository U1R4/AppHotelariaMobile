import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import DatePicker from 'react-native-modern-datepicker';
import { global } from "./style";

type Props = {
    onSelectDate: (date: string) => void;
    onClose?: () => void;
}

const DateSelector = ({ onSelectDate, onClose }: Props) => {
    const { width, height } = Dimensions.get("window");
    
    const today = new Date();
    const startDate = `${today.getFullYear()}/${(today.getMonth() + 1).toString().padStart(2, '0')}/${today.getDate().toString().padStart(2, '0')}`;

    const handleDateSelect = (date: string) => { 
        const formattedDate = formatDateToBR(date); 
        onSelectDate(formattedDate);
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
                        defaultFont: "System",
                        headerFont: "System"
                    }}
                    style={{ 
                        borderRadius: 15, 
                        width: width * 0.8, 
                        height: height * 0.35 
                    }}
                    isGregorian={true}
                    minimumDate={startDate}
                    selected={startDate}
                    onSelectedChange={handleDateSelect}
                    onDateChange={() => {}}
                />

                <TouchableOpacity 
                    style={global.closeButton}
                    onPress={onClose}
                >
                    <Text style={global.closeButtonText}>Fechar</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
};

export default DateSelector;