import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

const ReserveCard = () => {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.9}>
      <View style={styles.imageContainer}>
        <View style={styles.imagePlaceholder}>
          <Text style={styles.imageText}>🛏️</Text>
        </View>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.headerRow}>
          <Text style={styles.roomName}>Suíte Premium</Text>
          <View style={styles.statusBadge}>
            <Text style={styles.status}>Confirmado</Text>
          </View>
        </View>

        <Text style={styles.roomSubtitle}>Quarto Casal • Vista para o mar</Text>

        <View style={styles.detailsRow}>
          <View style={styles.detailItem}>
            <Text style={styles.detailIcon}>📅</Text>
            <Text style={styles.detailText}>15/12 - 20/12</Text>
          </View>
          
          <View style={styles.detailItem}>
            <Text style={styles.detailIcon}>👨‍👩‍👧</Text>
            <Text style={styles.detailText}>2A • 1C</Text>
          </View>
        </View>

        <View style={styles.footerRow}>
          <View style={styles.roomFeatures}>
            <Text style={styles.feature}>🛁</Text>
            <Text style={styles.feature}>📺</Text>
            <Text style={styles.feature}>❄️</Text>
          </View>
          
          <View style={styles.priceContainer}>
            <Text style={styles.priceLabel}>Total</Text>
            <Text style={styles.price}>R$ 650,00</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ReserveCard;