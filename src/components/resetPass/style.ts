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

});