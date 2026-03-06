import { API_URL } from '@/constants/api';
import { useAuth } from '@/context/AuthContext';
import { useReserve } from '@/context/ReserveContext';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AuthContainer from '../ui/AuthContainer';
import ReserveCard from '../ui/ReserveCard';
import { Colors, global } from '../ui/style';

const RenderReserve = () => {
  const router = useRouter();
  const { 
    pendingReserves, 
    selectedReserves,
    toggleSelectReserve,
    selectAllReserves,
    clearSelectedReserves,
    removeReserve,
    confirmSelectedReserves,
    loading,
    totalSelectedPrice,
    totalSelectedNights,
    totalSelectedGuests
  } = useReserve();
  const { token } = useAuth();
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const handleConfirmSelected = async () => {
    if (selectedReserves.length === 0) {
      Alert.alert('Nenhuma reserva selecionada', 'Selecione pelo menos uma reserva para confirmar');
      return;
    }

    if (!token) {
      Alert.alert("Login necessário", "Sua sessão expirou. Faça login novamente.");
      return;
    }

    setConfirmLoading(true);

    try {
      let cleanToken = token;
      if (cleanToken.startsWith('"') && cleanToken.endsWith('"')) {
        cleanToken = cleanToken.slice(1, -1);
      }

      const formatDateForBackend = (dateString: string): string => {
        if (dateString.includes('-')) return dateString;
        const [day, month, year] = dateString.split('/');
        return `${year}-${month}-${day}`;
      };

      const quartos = selectedReserves.map(reserve => {
        const quartoData = {
          quarto_id: reserve.roomId,
          dataInicio: formatDateForBackend(reserve.checkIn),
          dataFim: formatDateForBackend(reserve.checkOut),
          hospedes: reserve.guests,
          precoTotal: reserve.totalPrice
        };
        
        return quartoData;
      });

      const quartosInvalidos = quartos.filter(q => !q.quarto_id || q.quarto_id <= 0);
      if (quartosInvalidos.length > 0) {
        Alert.alert('Erro', 'Um ou mais quartos selecionados são inválidos');
        setConfirmLoading(false);
        return;
      }

      Alert.alert(
        'Forma de Pagamento',
        'Selecione a forma de pagamento:',
        [
          { 
            text: 'PIX', 
            onPress: async () => {
              try {
                const requestBody = {
                  pagamento: 'PIX',
                  quartos: quartos
                };

                const response = await fetch(`${API_URL}/reserve`, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${cleanToken}`,
                  },
                  body: JSON.stringify(requestBody),
                });

                const responseText = await response.text();

                if (!response.ok) {
                  let errorMessage = 'Erro ao confirmar reservas';
                  try {
                    const errorData = JSON.parse(responseText);
                    errorMessage = errorData?.erro || errorData?.message || errorMessage;
                  } catch {}
                  throw new Error(errorMessage);
                }

                await confirmSelectedReserves();
                setConfirmed(true);
              } catch (error) {
                console.error('🔴 Erro na confirmação:', error);
                Alert.alert('Erro', error instanceof Error ? error.message : 'Falha ao confirmar reservas');
              } finally {
                setConfirmLoading(false);
              }
            }
          },
          { 
            text: 'Dinheiro', 
            onPress: async () => {
              try {
                const requestBody = {
                  pagamento: 'Dinheiro',
                  quartos: quartos
                };

                const response = await fetch(`${API_URL}/reserve`, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${cleanToken}`,
                  },
                  body: JSON.stringify(requestBody),
                });

                const responseText = await response.text();

                if (!response.ok) {
                  let errorMessage = 'Erro ao confirmar reservas';
                  try {
                    const errorData = JSON.parse(responseText);
                    errorMessage = errorData?.erro || errorData?.message || errorMessage;
                  } catch {}
                  throw new Error(errorMessage);
                }

                await confirmSelectedReserves();
                setConfirmed(true);
              } catch (error) {
                Alert.alert('Erro', error instanceof Error ? error.message : 'Falha ao confirmar reservas');
              } finally {
                setConfirmLoading(false);
              }
            }
          },
          { 
            text: 'Débito', 
            onPress: async () => {
              try {
                const requestBody = {
                  pagamento: 'Debito',
                  quartos: quartos
                };

                const response = await fetch(`${API_URL}/reserve`, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${cleanToken}`,
                  },
                  body: JSON.stringify(requestBody),
                });

                const responseText = await response.text();

                if (!response.ok) {
                  let errorMessage = 'Erro ao confirmar reservas';
                  try {
                    const errorData = JSON.parse(responseText);
                    errorMessage = errorData?.erro || errorData?.message || errorMessage;
                  } catch {}
                  throw new Error(errorMessage);
                }

                await confirmSelectedReserves();
                setConfirmed(true);
              } catch (error) {
                Alert.alert('Erro', error instanceof Error ? error.message : 'Falha ao confirmar reservas');
              } finally {
                setConfirmLoading(false);
              }
            }
          },
          { 
            text: 'Crédito', 
            onPress: async () => {
              try {
                const requestBody = {
                  pagamento: 'Credito',
                  quartos: quartos
                };

                const response = await fetch(`${API_URL}/reserve`, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${cleanToken}`,
                  },
                  body: JSON.stringify(requestBody),
                });

                const responseText = await response.text();

                if (!response.ok) {
                  let errorMessage = 'Erro ao confirmar reservas';
                  try {
                    const errorData = JSON.parse(responseText);
                    errorMessage = errorData?.erro || errorData?.message || errorMessage;
                  } catch {}
                  throw new Error(errorMessage);
                }

                await confirmSelectedReserves();
                setConfirmed(true);
              } catch (error) {
                Alert.alert('Erro', error instanceof Error ? error.message : 'Falha ao confirmar reservas');
              } finally {
                setConfirmLoading(false);
              }
            }
          },
          { text: 'Cancelar', style: 'cancel', onPress: () => setConfirmLoading(false) }
        ]
      );

    } catch (error) {
      Alert.alert('Erro', error instanceof Error ? error.message : 'Falha ao confirmar reservas');
      setConfirmLoading(false);
    }
  };

  const handleRemoveReserve = (roomId: number, roomName: string) => {
    Alert.alert(
      'Remover reserva',
      `Deseja remover ${roomName} da lista?`,
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Remover',
          onPress: () => removeReserve(roomId),
          style: 'destructive'
        },
      ]
    );
  };

  const formatDateForDisplay = (dateString: string): string => {
    if (!dateString) return '';
    try {
      if (dateString.includes('/')) {
        return dateString;
      }
      const parts = dateString.split('-');
      if (parts.length === 3) {
        const [year, month, day] = parts;
        return `${day}/${month}/${year}`;
      }
      return dateString;
    } catch {
      return dateString;
    }
  };

  if (loading) {
    return (
      <AuthContainer title="Minhas Reservas" icon="calendar-check">
        <StatusBar barStyle="light-content" backgroundColor={Colors.darkPrimary} />
        <View style={[global.container, { justifyContent: 'center', alignItems: 'center' }]}>
          <ActivityIndicator size="large" color={Colors.goldPrimary} />
          <Text style={{ color: Colors.textSecondary, marginTop: 10 }}>Carregando...</Text>
        </View>
      </AuthContainer>
    );
  }

  if (confirmed) {
    return (
      <AuthContainer title="Reservas Confirmadas" icon="check-circle">
        <StatusBar barStyle="light-content" backgroundColor={Colors.darkPrimary} />
        <View style={[global.container, { justifyContent: 'center', alignItems: 'center', padding: 20 }]}>
          <MaterialCommunityIcons name="check-circle" size={80} color={Colors.goldPrimary} />
          <Text style={[global.reservePageIntroTitle, { textAlign: 'center', marginTop: 20 }]}>
            Reservas confirmadas!
          </Text>
          <Text style={[global.reservePageIntroSubtitle, { textAlign: 'center', marginBottom: 30 }]}>
            {selectedReserves.length} {selectedReserves.length === 1 ? 'reserva foi' : 'reservas foram'} realizadas com sucesso
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.goldPrimary,
              paddingHorizontal: 30,
              paddingVertical: 12,
              borderRadius: 8,
            }}
            onPress={() => router.push('/(tabs)/explorer')}
          >
            <Text style={{ color: Colors.darkPrimary, fontWeight: 'bold' }}>
              Nova reserva
            </Text>
          </TouchableOpacity>
        </View>
      </AuthContainer>
    );
  }

  if (pendingReserves.length === 0) {
    return (
      <AuthContainer title="Minhas Reservas" icon="calendar-check">
        <StatusBar barStyle="light-content" backgroundColor={Colors.darkPrimary} />
        <View style={[global.container, { justifyContent: 'center', alignItems: 'center', padding: 20 }]}>
          <MaterialCommunityIcons name="cart-outline" size={60} color={Colors.textSecondary} />
          <Text style={[global.reservePageIntroTitle, { textAlign: 'center', marginTop: 20 }]}>
            Nenhuma reserva na lista
          </Text>
          <Text style={[global.reservePageIntroSubtitle, { textAlign: 'center', marginBottom: 30 }]}>
            Adicione quartos no explorador para iniciar suas reservas
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.goldPrimary,
              paddingHorizontal: 30,
              paddingVertical: 12,
              borderRadius: 8,
            }}
            onPress={() => router.push('/(tabs)/explorer')}
          >
            <Text style={{ color: Colors.darkPrimary, fontWeight: 'bold' }}>
              Explorar quartos
            </Text>
          </TouchableOpacity>
        </View>
      </AuthContainer>
    );
  }

  return (
    <AuthContainer title="Minhas Reservas" icon="cart">
      <StatusBar barStyle="light-content" backgroundColor={Colors.darkPrimary} />
      
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: Colors.darkSecondary,
        borderBottomWidth: 1,
        borderBottomColor: Colors.goldPrimary,
      }}>
        <View style={{ flexDirection: 'row', gap: 16 }}>
          <TouchableOpacity onPress={selectAllReserves}>
            <Text style={{ color: Colors.goldPrimary }}>Selecionar todos</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={clearSelectedReserves}>
            <Text style={{ color: Colors.textSecondary }}>Limpar seleção</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ color: Colors.textPrimary }}>
          {selectedReserves.length} de {pendingReserves.length} selecionados
        </Text>
      </View>

      <ScrollView
        style={global.container}
        contentContainerStyle={global.reservePageScrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={global.reservePageIntroSection}>
          <Text style={global.reservePageIntroTitle}>Suas reservas</Text>
          <Text style={global.reservePageIntroSubtitle}>
            Selecione os quartos que deseja reservar
          </Text>
        </View>

        {pendingReserves.map((reserve) => (
          <TouchableOpacity
            key={reserve.roomId}
            onPress={() => toggleSelectReserve(reserve.roomId)}
            activeOpacity={0.7}
          >
            <View style={{
              position: 'relative',
              borderWidth: 2,
              borderColor: reserve.selected ? Colors.goldPrimary : 'transparent',
              borderRadius: 12,
              marginBottom: 8,
            }}>
              <ReserveCard
                roomName={reserve.roomName}
                checkIn={formatDateForDisplay(reserve.checkIn)}
                checkOut={formatDateForDisplay(reserve.checkOut)}
                guests={{
                  adults: reserve.guests,
                  children: 0
                }}
                nights={reserve.nights}
                totalPrice={reserve.totalPrice}
              />
              
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  top: 10,
                  right: 10,
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  borderRadius: 16,
                  padding: 4,
                }}
                onPress={() => handleRemoveReserve(reserve.roomId, reserve.roomName)}
              >
                <MaterialCommunityIcons name="close" size={20} color={Colors.textPrimary} />
              </TouchableOpacity>

              {reserve.selected && (
                <View style={{
                  position: 'absolute',
                  top: 10,
                  left: 10,
                  backgroundColor: Colors.goldPrimary,
                  borderRadius: 12,
                  paddingHorizontal: 8,
                  paddingVertical: 4,
                }}>
                  <Text style={{ color: Colors.darkPrimary, fontSize: 12, fontWeight: 'bold' }}>
                    Selecionado
                  </Text>
                </View>
              )}
            </View>
          </TouchableOpacity>
        ))}

        {selectedReserves.length > 0 && (
          <View style={{
            backgroundColor: Colors.darkSecondary,
            borderRadius: 8,
            padding: 16,
            marginTop: 20,
            borderWidth: 1,
            borderColor: Colors.goldPrimary,
          }}>
            <Text style={{ color: Colors.goldPrimary, fontSize: 18, fontWeight: 'bold', marginBottom: 12 }}>
              Resumo da seleção
            </Text>
            
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 }}>
              <Text style={{ color: Colors.textSecondary }}>Quartos:</Text>
              <Text style={{ color: Colors.textPrimary }}>{selectedReserves.length}</Text>
            </View>
            
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 }}>
              <Text style={{ color: Colors.textSecondary }}>Total de hóspedes:</Text>
              <Text style={{ color: Colors.textPrimary }}>{totalSelectedGuests}</Text>
            </View>
            
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 }}>
              <Text style={{ color: Colors.textSecondary }}>Total de noites:</Text>
              <Text style={{ color: Colors.textPrimary }}>{totalSelectedNights}</Text>
            </View>
            
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 }}>
              <Text style={{ color: Colors.textSecondary, fontSize: 16 }}>Valor total:</Text>
              <Text style={{ color: Colors.goldPrimary, fontSize: 24, fontWeight: 'bold' }}>
                R$ {totalSelectedPrice.toFixed(2).replace('.', ',')}
              </Text>
            </View>
          </View>
        )}

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30 }}>
          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              borderWidth: 1,
              borderColor: Colors.goldPrimary,
              paddingVertical: 12,
              borderRadius: 8,
              marginRight: 8,
              alignItems: 'center',
            }}
            onPress={() => router.back()}
            disabled={confirmLoading}
          >
            <Text style={{ color: Colors.goldPrimary, fontWeight: 'bold' }}>Voltar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: Colors.goldPrimary,
              paddingVertical: 12,
              borderRadius: 8,
              marginLeft: 8,
              alignItems: 'center',
              opacity: selectedReserves.length === 0 ? 0.5 : 1,
            }}
            onPress={handleConfirmSelected}
            disabled={confirmLoading || selectedReserves.length === 0}
          >
            {confirmLoading ? (
              <ActivityIndicator size="small" color={Colors.darkPrimary} />
            ) : (
              <Text style={{ color: Colors.darkPrimary, fontWeight: 'bold' }}>
                Confirmar {selectedReserves.length > 0 ? `(${selectedReserves.length})` : ''}
              </Text>
            )}
          </TouchableOpacity>
        </View>

        <View style={global.reservePageEmptyState}>
          <Text style={global.reservePageEmptyText}>
            Ao confirmar, você concorda com os termos de reserva
          </Text>
        </View>
      </ScrollView>
    </AuthContainer>
  );
};

export default RenderReserve;