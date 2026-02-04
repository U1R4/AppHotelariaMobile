import { Dimensions, StyleSheet } from 'react-native';
const {width, height} = Dimensions.get("window");

export const style = StyleSheet.create({
  button: {
    marginTop: 45,
    paddingVertical: 12,
    paddingHorizontal: 54,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 44,
    elevation: 10,
    shadowColor: '#ffffffff',
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },

  fullWidth: {
    width: '100%',
  },

  text: {
    fontSize: 16,
    fontWeight: '600',
  },

  disabled: {
    opacity: 0.6,
  },

  changePassTxt:{
    textDecorationLine: "underline",
    marginTop:30,
  },

  leftArrow: {
    position: 'absolute',
    top: height * -0.23,
    left: width * 0.02,
    zIndex: 10,
  },

  inputContainer: {
    marginTop: 16,
  },

  inputLabel: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
    color: '#424242',
  },

  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#bdbdbd',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#ffffff',
    width:width * 0.76
  },

  inputField: {
    flex: 1,
    fontSize: 16,
    color: '#212121',
    padding: 0,
    margin: 0,
  },

  inputIcon: {
    marginRight: 12,
    color: '#616161',
  },

  eyeIcon: {
    color: '#616161',
    marginLeft: 12,
  },

  placeholderColor: {
    color: '#9e9e9e',
  },
});