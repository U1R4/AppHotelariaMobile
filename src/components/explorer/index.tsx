import { useState } from 'react';
import { Dimensions, ScrollView, TouchableOpacity, View } from 'react-native';
import AuthContainer from '../ui/AuthContainer';
import DateSelector from '../ui/DateSelector';
import RoomCard from '../ui/RoomCard';
import TextField from '../ui/TextField';
import { global } from '../ui/style';

const RenderExplorer = () => {

  const { width, height } = Dimensions.get("window");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const [calendar, setCalendar] = useState <"checkin" | "checkout">();

  return (

    <AuthContainer>
      <View style={global.content}>
        <TouchableOpacity onPress={() => setCalendar("checkin")}>
          <TextField
            label='Chek-In'
            icon='book'
            placeholder='Selecione a data de Check-In'
          />
        </TouchableOpacity>

        {
        calendar == "checkin" && (
          <DateSelector onSelectDate={(date) => {setCheckIn(date)}}/>
        )}

        <TouchableOpacity onPress={() => setCalendar("checkout")}>
          <TextField
            label='Chek-Out'
            icon = "book"
            placeholder='Selecione a data de Check-Out'
          />
        </TouchableOpacity>
        
        {
        calendar == "checkout" && (
          <DateSelector onSelectDate={(date) => {setCheckOut(date)}}/>
        )}

        <ScrollView horizontal>
          <RoomCard/>
          <RoomCard/>
          <RoomCard/>
          <RoomCard/>
        </ScrollView>

        <ScrollView horizontal>
          <RoomCard/>
          <RoomCard/>
          <RoomCard/>
          <RoomCard/>
        </ScrollView>
          
      </View>
    </AuthContainer> 

  )

}  
export default RenderExplorer;