import { global } from '@/components/ui/style';
import { View } from 'react-native';
import AuthContainer from '../ui/AuthContainer';
import ReserveCard from '../ui/ReserveCard';
import RoomCard from '../ui/RoomCard';

const RenderReserve = () => {
  return (
    <AuthContainer>
      <View style={global.container}> 
        <View style={{borderBottomWidth:2}}>
          <RoomCard/>
          <ReserveCard/>
        </View>
        <View style={{borderBottomWidth:2}}>
          <RoomCard/>
          <ReserveCard/>
        </View>
      </View>
    </AuthContainer>
  )
}  
export default RenderReserve;