import React, { useState } from 'react';
import { Modal, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import AuthContainer from '../ui/AuthContainer';
import PassField from '../ui/PassFiled';
import TextField from '../ui/TextField';
import Button from './Button';
import { styles } from './styles';

const MyAccount = () => {
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [userData, setUserData] = useState({
    name: 'alacazan',
    email: 'a@a.a',
    phone: '12 12345-1234',
    cpf: '123.123.123-12'
  });
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleSaveChanges = () => {
    console.log('Dados salvos:', userData);
  };

  const handlePasswordChange = () => {
    setShowPasswordModal(false);
    setPasswordData({
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
  };

  return (
    <AuthContainer
      title="Minha Conta"
      icon="user"
    >
      <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.scrollContent}>
        <View style={styles.contentWrapper}>
          {/* Campo Nome */}
          <View style={styles.fieldContainer}>
            <TextField
              label="Nome"
              value={userData.name}
              onChangeText={(text) => setUserData({...userData, name: text})}
              icon={{ lib: "FontAwesome6", name: "user" }}
              placeholder="Digite seu nome"
            />
          </View>

          {/* Campo E-mail */}
          <View style={styles.fieldContainer}>
            <TextField
              label="E-mail"
              value={userData.email}
              onChangeText={(text) => setUserData({...userData, email: text})}
              icon={{ lib: "FontAwesome6", name: "envelope" }}
              placeholder="Digite seu e-mail"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          {/* Campo Telefone */}
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>Telefone:</Text>
            <TextInputMask
              type={'cel-phone'}
              options={{
                maskType: 'BRL',
                withDDD: true,
                dddMask: '(99) '
              }}
              value={userData.phone}
              onChangeText={(text) => setUserData({...userData, phone: text})}
              style={styles.maskedInput}
              placeholder="Digite seu telefone"
              placeholderTextColor="#9e9e9e"
              keyboardType="phone-pad"
            />
          </View>

          {/* Campo CPF (somente visual) */}
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>CPF:</Text>
            <TextInputMask
              type={'cpf'}
              value={userData.cpf}
              onChangeText={(text) => setUserData({...userData, cpf: text})}
              style={[styles.maskedInput, styles.disabledInput]}
              placeholder="Digite seu CPF"
              placeholderTextColor="#9e9e9e"
              keyboardType="numeric"
              editable={false}
            />
          </View>

          {/* Campo Senha */}
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>Senha:</Text>
            <View style={styles.passwordRow}>
              <Text style={styles.fieldValue}>**********</Text>
              <TouchableOpacity
                style={styles.changePasswordButton}
                onPress={() => setShowPasswordModal(true)}
              >
                <Text style={styles.changePasswordText}>Alterar Senha</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Botão de Salvar */}
          <View style={styles.actionsContainer}>
            <Button
              title="Salvar Alterações"
              onPress={handleSaveChanges}
              variant="success"
              size="large"
            />
          </View>
        </View>
      </ScrollView>

      {/* Modal para alterar senha */}
      <Modal
        visible={showPasswordModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowPasswordModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Alterar Senha</Text>
            </View>
            
            <View style={styles.modalBody}>
              <PassField
                placeholder="Senha atual"
                value={passwordData.currentPassword}
                onChangeText={(text) => setPasswordData({ ...passwordData, currentPassword: text })}
                style={styles.modalInput} label={''}              />
              <PassField
                placeholder="Nova senha"
                value={passwordData.newPassword}
                onChangeText={(text) => setPasswordData({ ...passwordData, newPassword: text })}
                style={styles.modalInput} label={''}              />
              <PassField
                placeholder="Confirmar nova senha"
                value={passwordData.confirmPassword}
                onChangeText={(text) => setPasswordData({ ...passwordData, confirmPassword: text })}
                style={styles.modalInput} label={''}              />
            </View>
            
            <View style={styles.modalFooter}>
              <Button
                title="Confirmar"
                onPress={handlePasswordChange}
                variant="primary"
                size="large"
                style={styles.modalButton}
              />
              <Button
                title="Cancelar"
                onPress={() => setShowPasswordModal(false)}
                variant="secondary"
                size="large"
                style={styles.modalButton}
              />
            </View>
          </View>
        </View>
      </Modal>
    </AuthContainer>
  );
};

export default MyAccount;