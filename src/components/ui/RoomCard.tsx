import { FontAwesome5, FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { global } from "./style";

type NameIcon =
  | { lib: "MaterialIcons"; name: keyof typeof MaterialIcons.glyphMap }
  | { lib: "FontAwesome6"; name: keyof typeof FontAwesome6.glyphMap }
  | { lib: "FontAwesome5"; name: keyof typeof FontAwesome5.glyphMap };

type Infos = { title?: string; text: string; price: number };

type Props = {
  label?: string;
  description?: Infos;
  icon?: NameIcon;
};

const RoomCard = ({ label, description, icon }: Props) => {
  return (
    <View style={global.cardContainer}>
      <TouchableOpacity style={global.touchableFixed}>
        <Image
          source={require('../../../assets/images/casalCinzaLuxo.jpg')}
          style={global.imageFixed}
          resizeMode="cover"
        />
        <View style={global.cardContentFixed}>
          {!!label && (
            <Text style={global.label} numberOfLines={1}>{label}</Text>
          )}
          
          <View style={global.iconContainer}>
            {!!icon && (
              <>
                {icon.lib === "MaterialIcons" && (
                  <MaterialIcons name={icon.name} size={20} color="#000000ff" />
                )}
                {icon.lib === "FontAwesome5" && (
                  <FontAwesome5 name={icon.name} size={20} color="#000000ff" />
                )}
                {icon.lib === "FontAwesome6" && (
                  <FontAwesome6 name={icon.name} size={20} color="#000000ff" />
                )}
              </>
            )}
          </View>

          {!!description && (
            <View style={global.descriptionContainerFixed}>
              <View style={{ flex: 1 }}>
                {!!description.title && (
                  <Text style={global.titleCard} numberOfLines={1}>{description.title}</Text>
                )}
                <Text style={global.textFixed} numberOfLines={2}>{description.text}</Text>
              </View>
              <View style={global.priceContainer}>
                <Text style={global.price}>R$ {description.price.toFixed(2)}</Text>
              </View>
            </View>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default RoomCard;