import { useAuth } from '@/context/AuthContext';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Dimensions,
  Modal,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import AuthContainer from '../ui/AuthContainer';
import TextField from '../ui/TextField';
import { Colors, styles } from './styles';

const { width } = Dimensions.get('window');
const responsiveFont = (size: number) => size * (width / 375);
const iconSize = responsiveFont(18);

const MyAccount = () => {
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const [userData, setUserData] = useState({
    name: 'alacazan',
    email: 'a@a.a',
    phone: '(12) 12345-1234',
    cpf: '123.123.123-12',
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleSaveChanges = () => {
    alert('Alterações salvas com sucesso!');
  };

    const { signOut } = useAuth();
    const router = useRouter();
    const handleLogout = async () => {
      signOut();
      router.replace("/(auth)");
    }
  

  const handlePasswordChange = () => {
    setShowPasswordModal(false);
    setPasswordData({
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    });
    alert('Senha alterada com sucesso!');
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

      {variant === 'secondary' && (
        <FontAwesome5
          name="crown"
          size={responsiveFont(14)}
          color={Colors.goldPrimary}
          style={{ marginLeft: responsiveFont(4), opacity: 0.7 }}
        />
      )}
    </TouchableOpacity>
  );

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

          <TextField
            value={userData.name}
            onChangeText={(text) => setUserData({ ...userData, name: text })}
            placeholder="Digite seu nome completo"
            style={[
              styles.textFieldInput,
              focusedField === 'name' && styles.textFieldInputFocused,
            ]}
            onFocus={() => setFocusedField('name')}
            onBlur={() => setFocusedField(null)} label={''}          />
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

          <TextField
            value={userData.email}
            onChangeText={(text) => setUserData({ ...userData, email: text })}
            keyboardType="email-address"
            autoCapitalize="none"
            style={[
              styles.textFieldInput,
              focusedField === 'email' && styles.textFieldInputFocused,
            ]}
            onFocus={() => setFocusedField('email')}
            onBlur={() => setFocusedField(null)} label={''}          />
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

          <TextInputMask
            type="cel-phone"
            options={{ withDDD: true, dddMask: '(99) ' }}
            value={userData.phone}
            onChangeText={(text) => setUserData({ ...userData, phone: text })}
            style={[
              styles.maskedInput,
              focusedField === 'phone' && styles.maskedInputFocused,
            ]}
            onFocus={() => setFocusedField('phone')}
            onBlur={() => setFocusedField(null)}
          />
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

          <TextInputMask
            type="cpf"
            value={userData.cpf}
            editable={false}
            style={[styles.maskedInput, styles.disabledInput]}
          />
        </View>

        {/* SENHA */}
        <View style={[styles.fieldContainer, styles.fieldContainerGold]}>
          <Text style={styles.fieldLabel}>
            <MaterialCommunityIcons
              name="lock-outline"
              size={iconSize}
              color={Colors.goldPrimary}
            />{' '}
            SENHA
          </Text>

          <View style={styles.passwordRow}>
            <Text style={styles.passwordDots}>•••••••••</Text>

            <TouchableOpacity onPress={() => setShowPasswordModal(true)}>
              <Text style={styles.changePasswordText}>
                <MaterialCommunityIcons
                  name="key-change"
                  size={responsiveFont(16)}
                  color={Colors.goldPrimary}
                />{' '}
                ALTERAR SENHA
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.actionsContainer}>
          <CustomButton title="Salvar Alterações" onPress={handleSaveChanges} />
        </View>
        <View style={styles.actionsContainer}>
          <CustomButton title="Logout" onPress={handleLogout} />
        </View>
      </ScrollView>

      {/* MODAL */}
      <Modal visible={showPasswordModal} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <MaterialCommunityIcons
                name="shield-lock-outline"
                size={responsiveFont(32)}
                color={Colors.goldPrimary}
              />
              <Text style={styles.modalTitle}>Alterar Senha</Text>
              <Text style={styles.modalSubtitle}>
                Atualize suas credenciais de segurança
              </Text>
            </View>

            <View style={styles.modalBody}>
              {['currentPassword', 'newPassword', 'confirmPassword'].map((field, index) => (
                <TextInput
                  key={field}
                  placeholder="Digite sua senha"
                  secureTextEntry
                  style={styles.modalInput}
                  value={(passwordData as any)[field]}
                  onChangeText={(text) =>
                    setPasswordData({ ...passwordData, [field]: text })
                  }
                />
              ))}
            </View>

            <View style={styles.modalFooter}>
              <CustomButton title="Confirmar Alteração" onPress={handlePasswordChange} />
              <CustomButton
                title="Cancelar"
                variant="secondary"
                onPress={() => setShowPasswordModal(false)}
              />
            </View>

          </View>
        </View>
      </Modal>
    </AuthContainer>
  );
};

export default MyAccount;
