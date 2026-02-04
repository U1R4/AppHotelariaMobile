import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import AuthContainer from "../ui/AuthContainer";
import DateSelector from "../ui/DateSelector";
import InputSpin from "../ui/InputSpin";
import RoomCard from "../ui/RoomCard";
import TextField from "../ui/TextField";
import { Colors, global } from "../ui/style";

const RenderExplorer = () => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [showDatePicker, setShowDatePicker] = useState<"checkin" | "checkout" | null>(null);
  const [qtdGuests, setQtdGuests] = useState<number>(1);

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

const handleDateSelect = (date: string) => {
    if (showDatePicker === "checkin") {
        setCheckIn(date);
    } else if (showDatePicker === "checkout") {
        setCheckOut(date);
    }
};

  return (
    <View style={{ flex: 1 }}>
      <AuthContainer
        title="Explorar Quartos"
        icon="bed"
      >
        <ScrollView style={global.container} contentContainerStyle={{ paddingBottom: 30 }}>
          {/* Seção de datas */}
          <View style={global.sectionContainer}>
            <Text style={global.sectionTitle}>
              <MaterialCommunityIcons name="calendar-range" size={18} color={Colors.goldPrimary} /> DATAS
            </Text>
            
            <View style={global.dateInputContainer}>
              <TouchableOpacity 
                onPress={() => setShowDatePicker("checkin")} 
                style={{ width: '100%' }}
                activeOpacity={0.7}
              >
                <View style={[global.fieldContainer, global.fieldContainerGold]}>
                  <Text style={global.fieldLabel}>
                    <MaterialCommunityIcons name="calendar-arrow-right" size={14} color={Colors.goldPrimary} /> CHECK-IN
                  </Text>
                  <TextField 
                    label=""
                    icon={{ lib: "FontAwesome5", name: "calendar-alt" }}
                    placeholder="Selecione a data de entrada" 
                    value={formatDateForDisplay(checkIn)} 
                    style={{ backgroundColor: Colors.inputBackground }}
                    editable={false}
                    pointerEvents="none"
                  />
                  <Text style={global.fieldSubtitle}>Data de entrada no hotel</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={global.dateInputContainer}>
              <TouchableOpacity 
                onPress={() => setShowDatePicker("checkout")} 
                style={{ width: '100%' }}
                activeOpacity={0.7}
              >
                <View style={[global.fieldContainer, global.fieldContainerGold]}>
                  <Text style={global.fieldLabel}>
                    <MaterialCommunityIcons name="calendar-arrow-left" size={14} color={Colors.goldPrimary} /> CHECK-OUT
                  </Text>
                  <TextField 
                    label=""
                    icon={{ lib: "FontAwesome5", name: "calendar-alt" }}
                    placeholder="Selecione a data de saída" 
                    value={formatDateForDisplay(checkOut)} 
                    style={{ backgroundColor: Colors.inputBackground }}
                    editable={false}
                    pointerEvents="none"
                  />
                  <Text style={global.fieldSubtitle}>Data de saída do hotel</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          {/* Divisor dourado */}
          <View style={global.goldDivider} />

          {/* Seção de hóspedes */}
          <View style={global.sectionContainer}>
            <Text style={global.sectionTitle}>
              <MaterialCommunityIcons name="account-group" size={18} color={Colors.goldPrimary} /> HÓSPEDES
            </Text>
            
            <View style={global.guestsContainer}>
              <Text style={global.fieldLabel}>
                QUANTIDADE DE HÓSPEDES
              </Text>
              <View style={global.inputSpinContainer}>
                <InputSpin
                  onSelectSpin={(guests) => setQtdGuests(guests)}
                  guests={qtdGuests}
                  minGuests={1} 
                  colorMax={Colors.goldPrimary} 
                  colorMin={Colors.textSecondary} 
                  max={6} 
                  step={1}
                />
              </View>
              <Text style={global.fieldSubtitle}>Máximo de 6 hóspedes por quarto</Text>
            </View>
          </View>

          {/* Divisor dourado */}
          <View style={global.goldDivider} />

          {/* Seção de quartos disponíveis */}
          <View style={global.sectionContainer}>
            <Text style={global.sectionTitle}>
              <MaterialCommunityIcons name="bed-king" size={18} color={Colors.goldPrimary} /> QUARTOS DISPONÍVEIS
            </Text>
            
            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={global.scrollViewContainer}
            >
              <View style={global.roomCardContainer}>
                <RoomCard 
                  label="Apartamento Luxo"
                  icon={{ lib: "FontAwesome5", name: "bed" }}
                  description={{
                    title: "Quarto Casal",
                    text: "1 cama de casal king size\nAr condicionado\nTV 50\"",
                    price: 280.90
                  }}
                  containerStyle={{backgroundColor: Colors.darkSecondary, borderColor: Colors.goldPrimary}}
                />
              </View>
              
              <View style={global.roomCardContainer}>
                <RoomCard 
                  label="Suíte Familiar"
                  icon={{ lib: "FontAwesome5", name: "user-friends" }}            
                  description={{
                    title: "Quarto Familiar",
                    text: "2 camas de casal\n2 camas de solteiro\nVaranda",
                    price: 420.50
                  }}
                  containerStyle={{backgroundColor: Colors.darkSecondary, borderColor: Colors.goldPrimary}}
                />
              </View>
            </ScrollView>
          </View>

          {/* Seção de mais opções */}
          <View style={global.sectionContainer}>
            <Text style={global.sectionTitle}>
              <MaterialCommunityIcons name="star-circle" size={18} color={Colors.goldPrimary} /> MAIS OPÇÕES
            </Text>
            
            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={global.scrollViewContainer}
            >
              <View style={global.roomCardContainer}>
                <RoomCard 
                  label="Suíte Premium"
                  icon={{ lib: "FontAwesome5", name: "crown" }}
                  description={{
                    title: "Quarto Premium",
                    text: "Vista para o mar\nHidromassagem\nServiço de quarto 24h",
                    price: 650.00
                  }}
                  containerStyle={{backgroundColor: Colors.darkSecondary, borderColor: Colors.goldPrimary}}
                />
              </View>
              
              <View style={global.roomCardContainer}>
                <RoomCard 
                  label="Apartamento Simples"
                  icon={{ lib: "FontAwesome5", name: "home" }}
                  description={{
                    title: "Quarto Simples",
                    text: "1 cama de casal\nBanheiro privativo\nWiFi gratuito",
                    price: 180.90
                  }}
                  containerStyle={{backgroundColor: Colors.darkSecondary, borderColor: Colors.goldPrimary}}
                />
              </View>
            </ScrollView>
          </View>

          <View style={{ height: 30 }} />
        </ScrollView>
      </AuthContainer>
      {showDatePicker && (
        <View style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: Colors.overlay,
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000,
        }}>
          <DateSelector 
            onSelectDate={handleDateSelect}
            onClose={() => setShowDatePicker(null)}
          />
        </View>
      )}
    </View>
  );
};

export default RenderExplorer;