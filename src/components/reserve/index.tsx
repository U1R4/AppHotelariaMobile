import React from 'react';
import {
  ScrollView,
  StatusBar,
  Text,
  View
} from 'react-native';
import AuthContainer from '../ui/AuthContainer';
import ReserveCard from '../ui/ReserveCard';
import { Colors, global } from '../ui/style';

const RenderReserve = () => {
  return (

    <AuthContainer>
      <StatusBar barStyle="light-content" backgroundColor={Colors.darkPrimary} />
      <ScrollView 
        style={global.container}
        contentContainerStyle={global.reservePageScrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={global.reservePageIntroSection}>
          <Text style={global.reservePageIntroTitle}>Suas reservas</Text>
          <Text style={global.reservePageIntroSubtitle}>Histórico de estadias confirmadas</Text>
        </View>

        <ReserveCard />
        <ReserveCard />
        <ReserveCard />
        
        <View style={global.reservePageEmptyState}>
          <Text style={global.reservePageEmptyText}>Nenhuma outra reserva encontrada</Text>
        </View>
      </ScrollView>
    </AuthContainer>
  );
};

export default RenderReserve;