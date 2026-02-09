import { FontAwesome5, FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import BottomSheet from "./BottomSheet";
import { Colors, global } from "./style";

type NameIcon =
  | { lib: "MaterialIcons"; name: keyof typeof MaterialIcons.glyphMap }
  | { lib: "FontAwesome6"; name: keyof typeof FontAwesome6.glyphMap }
  | { lib: "FontAwesome5"; name: keyof typeof FontAwesome5.glyphMap };

type Infos = { title?: string; text: string; price: number };

type Props = {
  label?: string;
  description?: Infos;
  icon?: NameIcon;
  containerStyle?: any;
};

const RoomCard = ({ label, description, icon, containerStyle }: Props) => {
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);

  const handleReserve = () => {
    setBottomSheetVisible(true);
  };

  const handleCloseBottomSheet = () => {
    setBottomSheetVisible(false);
  };

  return (
    <View style={[global.cardContainer, containerStyle]}>
      {/* Conteúdo do Card */}
      <TouchableOpacity style={global.touchableFixed}>
        <Image
          source={require('../../../assets/images/casalCinzaLuxo.jpg')}
          style={global.imageFixed}
          resizeMode="cover"
        />
        <View style={global.cardContentFixed}>
          <View style={global.roomCardHeaderRow}>
            {!!label && (
              <Text style={[global.label, {flex: 1, marginRight: 8}]} numberOfLines={1}>
                {label}
              </Text>
            )}
            
            <View style={global.iconContainer}>
              {!!icon && (
                <>
                  {icon.lib === "MaterialIcons" && (
                    <MaterialIcons name={icon.name} size={18} color={Colors.goldPrimary} />
                  )}
                  {icon.lib === "FontAwesome5" && (
                    <FontAwesome5 name={icon.name} size={18} color={Colors.goldPrimary} />
                  )}
                  {icon.lib === "FontAwesome6" && (
                    <FontAwesome6 name={icon.name} size={18} color={Colors.goldPrimary} />
                  )}
                </>
              )}
            </View>
          </View>

          {!!description && (
            <View style={global.descriptionContainerFixed}>
              <View style={{ flex: 1 }}>
                {!!description.title && (
                  <Text style={global.titleCard} numberOfLines={1}>
                    {description.title}
                  </Text>
                )}
                <Text 
                  style={[global.textFixed, global.roomCardDescriptionText]} 
                  numberOfLines={2}
                >
                  {description.text}
                </Text>
              </View>
              <View style={global.priceContainer}>
                <Text style={global.price}>R$ {description.price.toFixed(2)}</Text>
              </View>
            </View>
          )}
        </View>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={global.roomCardReserveButton}
        onPress={handleReserve}
        activeOpacity={0.8}
      >
        <Text style={global.roomCardReserveButtonText}>Reservar</Text>
            <BottomSheet
        visible={bottomSheetVisible}
        onClose={handleCloseBottomSheet}
      >
        <View style={global.bottomSheetReserveContent}>
          <Text style={global.bottomSheetReserveTitle}>Reservar Quarto</Text>
          
          <View style={global.bottomSheetReserveCard}>
            <View style={global.bottomSheetReserveCardHeader}>
              {label && (
                <Text style={global.bottomSheetReserveRoomLabel}>Quarto: {label}</Text>
              )}
            </View>
            
            {description && (
              <View style={global.bottomSheetReserveCardBody}>
                {description.title && (
                  <Text style={global.bottomSheetReserveRoomTitle}>{description.title}</Text>
                )}
                <Text style={global.bottomSheetReserveRoomDescription}>{description.text}</Text>
                <View style={global.bottomSheetReservePriceContainer}>
                  <Text style={global.bottomSheetReservePriceLabel}>Valor por noite</Text>
                  <Text style={global.bottomSheetReservePrice}>R$ {description.price.toFixed(2)}</Text>
                </View>
              </View>
            )}
          </View>

          <View style={global.bottomSheetReserveDivider} />
          
          <View style={{ marginVertical: 20 }}>
            <Text style={{ 
              fontSize: 16, 
              fontWeight: '600', 
              color: Colors.darkPrimary,
              marginBottom: 10 
            }}>
              Detalhes da Reserva
            </Text>
            
            <Text style={{ 
              fontSize: 14, 
              color: Colors.grayDark, 
              marginBottom: 20 
            }}>
              Preencha as informações para concluir sua reserva.
            </Text>
          </View>
          
          <View style={global.bottomSheetReserveActions}>
            <TouchableOpacity 
              style={global.bottomSheetReserveCancelButton}
              onPress={handleCloseBottomSheet}
              activeOpacity={0.8}
            >
              <Text style={global.bottomSheetReserveCancelButtonText}>Cancelar</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={global.bottomSheetReserveConfirmButton}
              onPress={() => {
                console.log(`Reserva confirmada para o quarto: ${label}`);
                handleCloseBottomSheet();
              }}
              activeOpacity={0.8}
            >
              <Text style={global.bottomSheetReserveConfirmButtonText}>Confirmar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </BottomSheet>
      </TouchableOpacity>
    </View>
  );
};

export default RoomCard;