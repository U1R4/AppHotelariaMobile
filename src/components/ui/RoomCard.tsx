import { Image, Text, TouchableOpacity, View } from 'react-native';

const RoomCard = () => {
  return (
    <View style={{ maxWidth: 320, margin: 10, borderRadius: 20, backgroundColor: '#b3b3b3ff' }}>
      <TouchableOpacity style={{borderRadius:20, padding:10}}>
        <Image
          source={require('../../../assets/images/casalCinzaLuxo.jpg')}
          style={{borderRadius:10, height: 150, width: '100%' }}
          resizeMode="cover"
        />
        <View style={{ padding: 16 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 8 }}>
            Room 1
          </Text>
          <Text style={{ color: '#000000ff', fontSize: 14 }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default RoomCard;