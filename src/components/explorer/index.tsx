import DateSelector from '@/components/ui/DateSelector';
import { global } from '@/components/ui/style';
import { Text, View } from 'react-native';

const RenderExplorer = () => {
  return (
    <View style={global.container}>
      <DateSelector/>
      <Text>Search</Text>
    </View>
  )
}  
export default RenderExplorer;