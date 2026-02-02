import { Dimensions, StyleSheet } from 'react-native';
const {width, height} = Dimensions.get("window");

export const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#707070',
    borderRadius: 9,
    justifyContent: 'center',
  },
  scrollContent: {
    paddingHorizontal: width * 0.1,
    paddingVertical: height * 0.02,
    minHeight: height * 0.8,
    flexGrow: 1,
    justifyContent: 'center',
    alignItems:'center',
    alignContent:'center'
  },
  contentWrapper: {
    width: '100%',
    alignItems: 'center',
  },
  fieldContainer: {
    backgroundColor: '#bdbdbd',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#686868',
    width: '100%',
  },
  fieldLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#424242',
    marginBottom: 4,
  },
  fieldValue: {
    fontSize: 16,
    color: '#212121',
  },
  maskedInputContainer: {
    width: '100%',
  },
  maskedInput: {
    backgroundColor: '#ffffff',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#bdbdbd',
    paddingHorizontal: 12,
    paddingVertical: 10,
    color: '#212121',
    width: '100%',
    fontSize: 16,
  },
  disabledInput: {
    backgroundColor: '#e0e0e0',
    color: '#757575',
    borderColor: '#b0b0b0',
  },
  passwordRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  changePasswordButton: {
    backgroundColor: '#616161',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },
  changePasswordText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '500',
  },
  actionsContainer: {
    marginTop: 24,
    gap: 12,
    marginBottom: 30,
    width: '100%',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: width * 0.9,
    maxWidth: 400,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    overflow: 'hidden',
  },
  modalHeader: {
    backgroundColor: '#757575',
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  modalBody: {
    padding: 20,
    backgroundColor: '#fafafa',
  },
  modalInput: {
    backgroundColor: '#ffffff',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#bdbdbd',
    marginBottom: 16,
    paddingHorizontal: 12,
    paddingVertical: 10,
    color: '#212121',
    width: '100%',
  },
  modalFooter: {
    padding: 20,
    backgroundColor: '#f5f5f5',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    gap: 12,
  },
  modalButton: {
    width: '100%',
  },
  btnBaseButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    width: '100%',
  },
  btnBaseText: {
    fontWeight: '600',
    textAlign: 'center',
    color: '#ffffff',
  },
  btnPrimary: {
    backgroundColor: '#2196F3',
  },
  btnSecondary: {
    backgroundColor: '#696969',
  },
  btnDanger: {
    backgroundColor: '#f44336',
  },
  btnSuccess: {
    backgroundColor: '#4CAF50',
  },
  btnSmall: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  btnMedium: {
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  btnLarge: {
    paddingVertical: 16,
    paddingHorizontal: 32,
  },
  btnTextSmall: {
    fontSize: 12,
  },
  btnTextMedium: {
    fontSize: 16,
  },
  btnTextLarge: {
    fontSize: 18,
  },
  btnDisabled: {
    backgroundColor: '#bdbdbd',
    opacity: 0.6,
  },
  btnTextDisabled: {
    color: '#9e9e9e',
  },
  btnIconContainer: {
    marginRight: 8,
  },
  btnLoader: {
    marginRight: 8,
  },
});