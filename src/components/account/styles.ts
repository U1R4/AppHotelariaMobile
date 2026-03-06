import { Dimensions, StyleSheet } from 'react-native';
import { responsiveFont } from '../ui/style';

const { width, height } = Dimensions.get('window');
const rf = (size: number) => size * (width / 375);

export const Colors = {
  darkPrimary: '#121212',
  darkSecondary: '#1a1a1a',
  darkTertiary: '#2d2d2d',
  goldPrimary: '#D4AF37',
  inputBackground: '#ffffff',
  inputText: '#121212',
  inputBorder: '#e0e0e0',
  grayLight: '#f5f5f5',
  textPrimary: '#ffffff',
  textSecondary: '#cccccc',
  overlay: 'rgba(0,0,0,0.7)',
};

export const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: Colors.darkPrimary,
  },
  scrollContent: {
    padding: 20,
  },
  fieldContainer: {
    backgroundColor: Colors.darkSecondary,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: Colors.inputBorder,
  },
  fieldContainerGold: {
    borderColor: Colors.goldPrimary,
  },
  fieldLabel: {
    fontSize: rf(12),
    color: Colors.goldPrimary,
    marginBottom: 8,
    letterSpacing: 1,
  },
  textFieldInput: {
    backgroundColor: Colors.inputBackground,
    borderRadius: 8,
    padding: 12,
    fontSize: rf(15),
    color: Colors.inputText,
  },
  textFieldInputFocused: {
    borderColor: Colors.goldPrimary,
    borderWidth: 2,
  },
  maskedInput: {
    backgroundColor: Colors.inputBackground,
    borderRadius: 8,
    padding: 12,
    fontSize: rf(15),
  },
  maskedInputFocused: {
    borderColor: Colors.goldPrimary,
    borderWidth: 2,
  },
  disabledInput: {
    backgroundColor: Colors.grayLight,
  },
  passwordRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  passwordDots: {
    fontSize: rf(18),
    color: Colors.textPrimary,
  },
  changePasswordText: {
    color: Colors.goldPrimary,
    fontSize: rf(14),
  },
  actionsContainer: {
    marginTop: 24,
  },
  customButton: {
    backgroundColor: Colors.darkTertiary,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: Colors.goldPrimary,
  },
  buttonText: {
    color: Colors.textPrimary,
    fontWeight: '600',
    letterSpacing: 1,
  },

  /* MODAL */
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.overlay,
  },
  modalContainer: {
    width: '85%',
    maxHeight: '85%',
    backgroundColor: Colors.darkSecondary,
    borderRadius: 16,
    overflow: 'hidden',
  },
  modalHeader: {
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 2,
    borderBottomColor: Colors.goldPrimary,
  },

userDataText: {
  color: Colors.textPrimary,
  fontSize: responsiveFont(16),
  paddingVertical: 12,
  paddingHorizontal: 8,
  borderBottomWidth: 1,
  borderBottomColor: Colors.goldPrimary + '40',
  marginTop: 4,
},
  modalTitle: {
    color: Colors.goldPrimary,
    fontSize: rf(18),
    marginTop: 8,
  },
  modalSubtitle: {
    color: Colors.textSecondary,
    textAlign: 'center',
    marginTop: 6,
  },
  modalBody: {
    padding: 20,
  },
  modalInput: {
    backgroundColor: Colors.inputBackground,
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  modalFooter: {
    padding: 16,
  },
});
