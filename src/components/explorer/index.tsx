import { useState } from "react";
import { Dimensions, ScrollView, TouchableOpacity, View } from "react-native";
import AuthContainer from "../ui/AuthContainer";
import DateSelector from "../ui/DateSelector";
import RoomCard from "../ui/RoomCard";
import TextField from "../ui/TextField";
import { global } from "../ui/style";

const RenderExplorer = () => {
  const { width } = Dimensions.get("window");
  
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [showDatePicker, setShowDatePicker] = useState<"checkin" | "checkout" | null>(null);

  const formatDateForDisplay = (dateString: string): string => {
    if (!dateString) return "";
    
    try {
      const parts = dateString.split('/');
      if (parts.length === 3) {
        const [day, month, year] = parts;
        return `${day}/${month}/${year}`;
      }
      return dateString;
    } catch (error) {
      return dateString;
    }
  };

  return (
    <AuthContainer>
      <View style={global.content}>
        
        <View style={{ marginBottom: 20, width: width * 0.9 }}>
          <TouchableOpacity onPress={() => setShowDatePicker("checkin")}>
            <TextField 
              label="Check-in" 
              icon={{ lib: "FontAwesome5", name: "calendar-alt" }}
              placeholder="Selecione a data" 
              value={formatDateForDisplay(checkIn)} 
            />
          </TouchableOpacity>
          
          {showDatePicker === "checkin" && (
            <DateSelector 
              onSelectDate={(date) => { 
                setCheckIn(date);
              }}
              onClose={() => setShowDatePicker(null)}
            />
          )}
        </View>

        <View style={{ marginBottom: 20, width: width * 0.9 }}>
          <TouchableOpacity onPress={() => setShowDatePicker("checkout")}>
            <TextField 
              label="Check-out" 
              icon={{ lib: "FontAwesome5", name: "calendar-alt" }}
              placeholder="Selecione a data" 
              value={formatDateForDisplay(checkOut)} 
            />
          </TouchableOpacity>
          
          {showDatePicker === "checkout" && (
            <DateSelector 
              onSelectDate={(date) => { 
                setCheckOut(date);
              }}
              onClose={() => setShowDatePicker(null)}
            />
          )}
        </View>

        <ScrollView horizontal style={{ marginBottom: 20 }} showsHorizontalScrollIndicator={false}>
          <RoomCard 
            label="Apartamento Luxo"
            icon={{ lib: "FontAwesome5", name: "bed" }}
            description={{
              title: "Quarto Casal",
              text: "1 cama de casal king size\nAr condicionado\nTV 50\"",
              price: 280.90
            }}
          />
          <RoomCard 
            label="Suíte Familiar"
             icon={{ lib: "FontAwesome5", name: "user" }}            
             description={{
              title: "Quarto Familiar",
              text: "2 camas de casal\n2 camas de solteiro\nVaranda",
              price: 420.50
            }}
          />
        </ScrollView>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <RoomCard 
            label="Suíte Premium"
             icon={{ lib: "FontAwesome5", name: "star" }}
            description={{
              title: "Quarto Premium",
              text: "Vista para o mar\nHidromassagem\nServiço de quarto 24h",
              price: 650.00
            }}
          />
          <RoomCard 
            label="Apartamento Simples"
             icon={{ lib: "FontAwesome5", name: "home" }}
            description={{
              title: "Quarto Simples",
              text: "1 cama de casal\nBanheiro privativo\nWiFi gratuito",
              price: 180.90
            }}
          />
        </ScrollView>

      </View>
    </AuthContainer>
  );
};

export default RenderExplorer;