import { useAuth } from '@/context/AuthContext';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { jwtDecode } from 'jwt-decode';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import AuthContainer from '../ui/AuthContainer';
import { Colors, styles } from './styles';

const { width } = Dimensions.get('window');
const responsiveFont = (size: number) => size * (width / 375);
const iconSize = responsiveFont(18);

interface DecodedToken {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  cpf: string;
  iat: number;
  exp: number;
}

const MyAccount = () => {
  const { token, signOut } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState({
    nome: '',
    email: '',
    telefone: '',
    cpf: '',
  });

  useEffect(() => {
    if (token) {
      try {
        const decoded = jwtDecode<DecodedToken>(token);
        setUserData({
          nome: decoded.nome || '',
          email: decoded.email || '',
          telefone: decoded.telefone || '',
          cpf: decoded.cpf || '',
        });
      } catch (error) {
        Alert.alert('Erro', 'Falha ao decodificar token');
      } finally {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  }, [token]);

  const handleLogout = async () => {
    signOut();
    router.replace("/(auth)");
  };

  const formatPhone = (phone: string) => {
    if (!phone) return '';
    const cleaned = phone.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return phone;
  };

  const formatCPF = (cpf: string) => {
    if (!cpf) return '';
    const cleaned = cpf.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{3})(\d{2})$/);
    if (match) {
      return `${match[1]}.${match[2]}.${match[3]}-${match[4]}`;
    }
    return cpf;
  };

  const CustomButton = ({ title, onPress, variant = 'primary' }: any) => (
    <TouchableOpacity
      style={[
        styles.customButton,
        variant === 'secondary' && styles.secondaryButton,
      ]}
      onPress={onPress}
      activeOpacity={0.85}
    >
      <Text
        style={[
          styles.buttonText,
          variant === 'secondary' && { color: Colors.goldPrimary },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <AuthContainer title="Minha Conta" icon="user">
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color={Colors.goldPrimary} />
          <Text style={{ color: Colors.textSecondary, marginTop: 10 }}>
            Carregando seus dados...
          </Text>
        </View>
      </AuthContainer>
    );
  }

  return (
    <AuthContainer title="Minha Conta" icon="user">
      <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.scrollContent}>
        {/* NOME */}
        <View style={[styles.fieldContainer, styles.fieldContainerGold]}>
          <Text style={styles.fieldLabel}>
            <MaterialCommunityIcons
              name="account-outline"
              size={iconSize}
              color={Colors.goldPrimary}
            />{' '}
            NOME
          </Text>

          <Text style={styles.userDataText}>{userData.nome || 'Não informado'}</Text>
        </View>

        {/* EMAIL */}
        <View style={styles.fieldContainer}>
          <Text style={styles.fieldLabel}>
            <MaterialCommunityIcons
              name="email-outline"
              size={iconSize}
              color={Colors.goldPrimary}
            />{' '}
            E-MAIL
          </Text>

          <Text style={styles.userDataText}>{userData.email || 'Não informado'}</Text>
        </View>

        {/* TELEFONE */}
        <View style={styles.fieldContainer}>
          <Text style={styles.fieldLabel}>
            <MaterialCommunityIcons
              name="phone-outline"
              size={iconSize}
              color={Colors.goldPrimary}
            />{' '}
            TELEFONE
          </Text>

          <Text style={styles.userDataText}>{formatPhone(userData.telefone) || 'Não informado'}</Text>
        </View>

        {/* CPF */}
        <View style={styles.fieldContainer}>
          <Text style={styles.fieldLabel}>
            <MaterialCommunityIcons
              name="card-account-details-outline"
              size={iconSize}
              color={Colors.goldPrimary}
            />{' '}
            CPF
          </Text>

          <Text style={styles.userDataText}>{formatCPF(userData.cpf) || 'Não informado'}</Text>
        </View>

        <View style={styles.actionsContainer}>
          <CustomButton title="Logout" onPress={handleLogout} />
        </View>
      </ScrollView>
    </AuthContainer>
  );
};

export default MyAccount;