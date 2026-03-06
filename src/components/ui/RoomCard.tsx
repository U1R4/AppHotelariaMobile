import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Colors } from './style';

type Room = {
  nome: string;
  capacidadeTotal: number | null;
  preco: number;
  img: string[];
};

type Props = {
  room: Room;
  onReserve: (preco: number) => void;
  containerStyle?: object;
  nights?: number;
};

const RoomCard = ({
  room,
  onReserve,
  containerStyle,
  nights = 1,
}: Props) => {
  
  const totalPrice = room.preco * nights;

  const formatPrice = (price: number) => {
    return price.toFixed(2).replace('.', ',');
  };

  return (
    <TouchableOpacity 
      style={[{
        backgroundColor: Colors.darkSecondary,
        borderWidth: 1,
        borderColor: Colors.goldPrimary,
        borderRadius: 12,
        padding: 16,
        marginBottom: 16,
      }, containerStyle]}
      onPress={() => onReserve( room.preco)}
      activeOpacity={0.7}
    >
      <View style={{ 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: 12 
      }}>
        <Text style={{ 
          color: Colors.goldPrimary, 
          fontSize: 20, 
          fontWeight: 'bold' 
        }}>
          {room.nome}
        </Text>
        <FontAwesome5 name="bed" size={24} color={Colors.goldPrimary} />
      </View>

      <View style={{ 
        flexDirection: 'row', 
        alignItems: 'center',
        marginBottom: 8 
      }}>
        <FontAwesome5 name="users" size={16} color={Colors.goldPrimary} />
        <Text style={{ 
          color: Colors.textPrimary, 
          marginLeft: 8,
          fontSize: 14 
        }}>
          {room.capacidadeTotal ? `${room.capacidadeTotal} hóspedes` : 'Capacidade não informada'}
        </Text>
      </View>

      <View style={{ 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginTop: 8,
        marginBottom: 16 
      }}>
        <Text style={{ 
          color: Colors.textSecondary, 
          fontSize: 14 
        }}>
          R$ {formatPrice(room.preco)}/noite
        </Text>
        
        <View style={{ alignItems: 'flex-end' }}>
          <Text style={{ 
            color: Colors.goldPrimary, 
            fontSize: 18, 
            fontWeight: 'bold' 
          }}>
            R$ {formatPrice(totalPrice)}
          </Text>
          <Text style={{ 
            color: Colors.textSecondary, 
            fontSize: 12 
          }}>
            Total para {nights} {nights === 1 ? 'noite' : 'noites'}
          </Text>
        </View>
      </View>

      <TouchableOpacity 
        style={{
          backgroundColor: Colors.goldPrimary,
          paddingVertical: 12,
          borderRadius: 8,
          alignItems: 'center',
        }}
        onPress={() => onReserve(room.preco)}
      >
        <Text style={{ 
          color: Colors.darkSecondary, 
          fontSize: 16, 
          fontWeight: 'bold' 
        }}>
          Reservar Agora
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default RoomCard;