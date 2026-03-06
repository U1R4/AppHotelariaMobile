import { API_URL } from '@/constants/api';
import { useAuth } from '@/context/AuthContext';
import { useReserve } from '@/context/ReserveContext';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Alert, ScrollView, Text, TouchableOpacity, View } from "react-native";
import AuthContainer from "../ui/AuthContainer";
import DateSelector from "../ui/DateSelector";
import InputSpin from "../ui/InputSpin";
import RoomCard from "../ui/RoomCard";
import TextField from "../ui/TextField";
import { Colors, global } from "../ui/style";

type ApiRoom = {
  id: number;
  nome: string;
  capacidadeTotal: number | null;
  preco: number;
  img: string[];
  descricao?: string;
};

type RoomCardData = {
  id: number;
  title: string;
  tipo: string;
  descricao: string;
  preco: number;
  capacidade: number;
  imagens?: string[];
};

const RenderExplorer = () => {
  const { token } = useAuth();
  const { addReserve, pendingReserves } = useReserve();
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [showDatePicker, setShowDatePicker] = useState<"checkin" | "checkout" | null>(null);
  const [qtdGuests, setQtdGuests] = useState<number>(1);
  const [rooms, setRooms] = useState<RoomCardData[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [selectedRooms, setSelectedRooms] = useState<number[]>([]);

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

  const formatDateForAPI = (dateString: string): string => {
    if (!dateString) return "";
    try {
      const parts = dateString.split('/');
      if (parts.length === 3) {
        const [day, month, year] = parts;
        return `${year}-${month}-${day}`;
      }
      return dateString;
    } catch (error) {
      return dateString;
    }
  };

  const handleDateSelect = (date: string) => {
    if (showDatePicker === "checkin") {
      setCheckIn(date);
      if (checkOut) {
        const checkInDate = new Date(date.split('/').reverse().join('-'));
        const checkOutDate = new Date(checkOut.split('/').reverse().join('-'));
        if (checkInDate >= checkOutDate) {
          setCheckOut("");
        }
      }
    } else if (showDatePicker === "checkout") {
      if (checkIn) {
        const checkInDate = new Date(checkIn.split('/').reverse().join('-'));
        const checkOutDate = new Date(date.split('/').reverse().join('-'));
        if (checkOutDate <= checkInDate) {
          Alert.alert("Data inválida", "A data de check-out deve ser posterior à data de check-in");
          return;
        }
      }
      setCheckOut(date);
    }
  };

  const adaptApiRoomsToCardData = (apiRooms: ApiRoom[]): RoomCardData[] => {
    return apiRooms.map(room => ({
      id: room.id,
      title: room.nome,
      tipo: room.nome,
      descricao: room.descricao || `Quarto ${room.nome} - Conforto e comodidade para sua estadia`,
      preco: room.preco,
      capacidade: room.capacidadeTotal || 2,
      imagens: room.img
    }));
  };

  const handleAddToCart = async (roomId: number, price: number) => {
  if (!token) {
    Alert.alert(
      "Login necessário", 
      "Você precisa estar logado para fazer uma reserva",
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Fazer login", onPress: () => router.push("/(auth)") }
      ]
    );
    return;
  }

  try {
      const checkInAPI = formatDateForAPI(checkIn);
      const checkOutAPI = formatDateForAPI(checkOut);
      const nights = calculateNights();
      const totalPrice = price * nights;

      const selectedRoom = rooms.find(r => r.id === roomId);
      
      if (!selectedRoom) {
        Alert.alert("Erro", "Quarto não encontrado");
        return;
      }

      const reserveItem = {
        roomId: selectedRoom.id,
        roomName: selectedRoom.title,
        checkIn: checkInAPI,
        checkOut: checkOutAPI,
        guests: qtdGuests,
        nights: nights,
        pricePerNight: selectedRoom.preco,
        totalPrice: totalPrice,
      };

      await addReserve(reserveItem);
      
      Alert.alert(
        "Quarto adicionado!",
        `${selectedRoom.title} foi adicionado à sua lista de reservas.`,
        [
          { text: "Continuar explorando", style: "cancel" },
          { text: "Ver reservas", onPress: () => router.push('/(tabs)/reserve') }
        ]
      );

    } catch (error) {
      Alert.alert(
        "Erro", 
        error instanceof Error ? error.message : "Erro ao adicionar quarto"
      );
    }
  };

  const calculateNights = (): number => {
    if (!checkIn || !checkOut) return 1;
    try {
      const checkInDate = new Date(checkIn.split('/').reverse().join('-'));
      const checkOutDate = new Date(checkOut.split('/').reverse().join('-'));
      const diffTime = Math.abs(checkOutDate.getTime() - checkInDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays > 0 ? diffDays : 1;
    } catch {
      return 1;
    }
  };

  const searchAvailableRooms = async () => {
    if (!checkIn || !checkOut) {
      Alert.alert("Atenção", "Selecione as datas de check-in e check-out");
      return;
    }

    setLoading(true);
    setSearchPerformed(true);

    try {
      const checkInAPI = formatDateForAPI(checkIn);
      const checkOutAPI = formatDateForAPI(checkOut);

      if (!token) {
        Alert.alert(
          "Login necessário", 
          "Você precisa estar logado para buscar quartos",
          [
            { text: "Cancelar", style: "cancel" },
            { text: "Fazer login", onPress: () => router.push("/(auth)") }
          ]
        );
        setLoading(false);
        return;
      }

      const url = `${API_URL}/room`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          inicio: checkInAPI,
          fim: checkOutAPI,
          qtdPessoas: qtdGuests
        })
      });

      const responseText = await response.text();
      let data;
      try {
        data = JSON.parse(responseText);
      } catch {
        throw new Error('Resposta inválida do servidor');
      }

      if (!response.ok) {
        throw new Error(data?.erro || data?.message || 'Erro ao buscar quartos');
      }

      const apiRooms = data.quartos || data || [];
      const adaptedRooms = adaptApiRoomsToCardData(apiRooms);
      setRooms(adaptedRooms);

    } catch (error) {
      Alert.alert(
        "Erro", 
        error instanceof Error ? error.message : "Erro ao buscar quartos disponíveis"
      );
      setRooms([]);
    } finally {
      setLoading(false);
    }
  };

  // Verifica se um quarto já está na lista de reservas
  const isRoomInCart = (roomId: number) => {
    return pendingReserves.some(r => r.roomId === roomId);
  };

  useEffect(() => {
    if (checkIn && checkOut) {
      const timer = setTimeout(() => {
        searchAvailableRooms();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [checkIn, checkOut, qtdGuests]);

  return (
    <View style={{ flex: 1 }}>
      <AuthContainer title="Explorar Quartos" icon="bed">
        <ScrollView style={global.container} contentContainerStyle={{ paddingBottom: 30 }}>
          {/* Header com contador de reservas */}
          <View style={{ 
            flexDirection: 'row', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            paddingHorizontal: 16,
            paddingVertical: 10,
            backgroundColor: Colors.darkSecondary,
            borderBottomWidth: 1,
            borderBottomColor: Colors.goldPrimary,
          }}>
            <Text style={{ color: Colors.textPrimary }}>
              <MaterialCommunityIcons name="cart" size={20} color={Colors.goldPrimary} />
              {' '}Reservas: {pendingReserves.length}
            </Text>
            {pendingReserves.length > 0 && (
              <TouchableOpacity 
                onPress={() => router.push('/(tabs)/reserve')}
                style={{
                  backgroundColor: Colors.goldPrimary,
                  paddingHorizontal: 12,
                  paddingVertical: 6,
                  borderRadius: 16,
                }}
              >
                <Text style={{ color: Colors.darkPrimary, fontWeight: 'bold' }}>
                  Ver reservas
                </Text>
              </TouchableOpacity>
            )}
          </View>

          <View style={global.sectionContainer}>
            <Text style={global.sectionTitle}>
              <MaterialCommunityIcons name="calendar-range" size={18} color={Colors.goldPrimary} /> DATAS
            </Text>
            
            <View style={global.dateInputContainer}>
              <TouchableOpacity onPress={() => setShowDatePicker("checkin")} style={{ width: '100%' }}>
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
              <TouchableOpacity onPress={() => setShowDatePicker("checkout")} style={{ width: '100%' }}>
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

          <View style={global.goldDivider} />

          <View style={global.sectionContainer}>
            <Text style={global.sectionTitle}>
              <MaterialCommunityIcons name="account-group" size={18} color={Colors.goldPrimary} /> HÓSPEDES
            </Text>
            
            <View style={global.guestsContainer}>
              <Text style={global.fieldLabel}>QUANTIDADE DE HÓSPEDES</Text>
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

          <View style={global.goldDivider} />

          <View style={global.sectionContainer}>
            <Text style={global.sectionTitle}>
              <MaterialCommunityIcons name="bed-king" size={18} color={Colors.goldPrimary} /> QUARTOS DISPONÍVEIS
            </Text>
            
            {loading && (
              <View style={{ padding: 20, alignItems: 'center' }}>
                <ActivityIndicator size="large" color={Colors.goldPrimary} />
                <Text style={{ color: Colors.textSecondary, marginTop: 10 }}>Buscando quartos...</Text>
              </View>
            )}

            {!loading && searchPerformed && rooms.length === 0 && (
              <View style={{ padding: 20, alignItems: 'center' }}>
                <MaterialCommunityIcons name="bed" size={50} color={Colors.textSecondary} />
                <Text style={{ color: Colors.textSecondary, textAlign: 'center', marginTop: 10 }}>
                  Nenhum quarto disponível para o período selecionado
                </Text>
              </View>
            )}

            {!loading && rooms.length > 0 && (
              <ScrollView 
                horizontal 
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={global.scrollViewContainer}
              >
                {rooms.map((room) => {
                  const inCart = isRoomInCart(room.id);
                  return (
                    <View key={room.id} style={global.roomCardContainer}>
                      <RoomCard 
                        room={{
                          nome: room.title,
                          preco: room.preco,
                          capacidadeTotal: room.capacidade,
                          img: room.imagens || []
                        }}
                        onReserve={() => handleAddToCart(room.id, room.preco)}
                        containerStyle={{
                          backgroundColor: Colors.darkSecondary, 
                          borderColor: inCart ? Colors.goldPrimary : Colors.textSecondary,
                          opacity: inCart ? 0.8 : 1,
                        }}
                        nights={calculateNights()}
                      />
                      {inCart && (
                        <View style={{
                          position: 'absolute',
                          top: 10,
                          right: 10,
                          backgroundColor: Colors.goldPrimary,
                          borderRadius: 12,
                          paddingHorizontal: 8,
                          paddingVertical: 4,
                        }}>
                          <Text style={{ color: Colors.darkPrimary, fontSize: 12, fontWeight: 'bold' }}>
                            ✓ Adicionado
                          </Text>
                        </View>
                      )}
                    </View>
                  );
                })}
              </ScrollView>
            )}

            {!searchPerformed && !loading && (
              <View style={{ padding: 20, alignItems: 'center' }}>
                <MaterialCommunityIcons name="calendar-search" size={50} color={Colors.textSecondary} />
                <Text style={{ color: Colors.textSecondary, textAlign: 'center', marginTop: 10 }}>
                  Selecione as datas para ver os quartos disponíveis
                </Text>
              </View>
            )}
          </View>
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
            minDate={showDatePicker === 'checkout' && checkIn ? checkIn : undefined}
          />
        </View>
      )}
    </View>
  );
};

export default RenderExplorer;