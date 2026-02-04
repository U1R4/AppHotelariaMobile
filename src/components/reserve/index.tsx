import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import ReserveCard from '../ui/ReserveCard';
import { Colors, global } from '../ui/style';

const RenderReserve = () => {
  return (
    <SafeAreaView style={global.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.darkPrimary} />
      
      {/* Header Navigation */}
      <View style={global.reservePageHeader}>
        <TouchableOpacity style={global.reservePageBackButton}>
          <Ionicons name="arrow-back" size={24} color={Colors.goldPrimary} />
        </TouchableOpacity>
        
        <Text style={global.reservePageHeaderTitle}>Escolha seu quarto</Text>
        
        <View style={global.reservePagePlaceholder} />
      </View>

      {/* Content Area */}
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
    </SafeAreaView>
  );
};

export default RenderReserve;