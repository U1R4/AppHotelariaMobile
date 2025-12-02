import { Dimensions, StyleSheet } from "react-native";

const {width, height} = Dimensions.get("window");

export const global = StyleSheet.create({
    
    textWhite:{
        color: "#ffff",
    },

    safeArea: {
        flex: 1,
        backgroundColor:"rgba(87, 87, 87, 1)",
    },

    KeyboardAvoiding:{
        flex: 1,
    },
    
    container:{
        paddingHorizontal: width * 0.03,
        paddingTop: height * 0.03,
        paddingBottom: height * 0.03,
    },

    header:{
        alignItems: "center",
        marginBottom: height * 0.03,
    },

    content:{
        alignItems: "center",
        borderRadius: 10,
        backgroundColor:"rgba(145, 145, 145, 1)",
        padding: width * 0.02,
        elevation: 8,
        shadowColor: "#ffffffff",
        shadowRadius: 10,
        shadowOpacity: 0.05,
        paddingBottom: width * 0.1,
        marginBottom: height * 0.2,
    },

    title:{
        fontSize: 35,
        fontWeight: "300"
    },

    subTitle:{
        fontSize: 18,
        fontWeight: "400",
        marginTop: height * 0.04,
        marginBottom: height * 0.01,
    },

    inputBorder: {
        elevation: 8,
        shadowColor: "#000000ff",
        shadowOpacity: 1,
    },

    inputBox: {
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        borderRadius: 10,
        backgroundColor: "rgba(216, 216, 216, 1)",
        paddingLeft: 10,
        paddingRight: width * 0.2,
        maxWidth:  width * 0.7,
        minWidth: width * 0.7
    },

    icon: {
        marginRight: 10,
    },

    inpError:{
        elevation: 8,
        shadowColor: "#ff0000ff",
    },

    errotext:{
        color: "red",
        fontSize: 13,
        marginTop: height * 0.05

    },

    eyeIcon: {
        position: "absolute",
        right: 12,
        top: 72
    },

    modalView:{
        margin:20,
        backgroundColor: "#9c9c9cff",
        borderRadius:20,
        width:'90%',
        padding:35,
        alignItems:"center",
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:2,
        },
        shadowOpacity:0.25,
        shadowRadius:4,
        elevation:5
    },

    centerView:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        marginTop:22
    },

    button: {
        backgroundColor: '#686868ff',
        padding: 10,
        borderRadius: 5,
        height: height * 0.08
    },

    buttonText: {
        color: '#ffffffff',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },

    dateText: {
        color: '#cccccc',
        fontSize: 14,
    },

    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        justifyContent: 'center',
        alignItems: 'center',
    },

    modalContent: {
        backgroundColor: '#1a1a1a',
        borderRadius: 20,
        padding: 20,
        margin: 20,
        borderWidth: 1,
        borderColor: '#333333',
    },

    iosPicker: {
        backgroundColor: '#2d2d2d',
        borderRadius: 15,
    },

    closeButton: {
        backgroundColor: '#444444',
        padding: 12,
        borderRadius: 20,
        marginTop: 15,
        alignItems: 'center',
    },
    
    closeButtonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },

  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#000000',
  },
  iconContainer: {
    marginBottom: 12,
  },

  titleCard: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
    color: '#333333',
  },
  priceContainer: {
    marginLeft: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#146814ff',
  },

  touchableFixed: {
    borderRadius: 20,
    padding: width * 0.03,
    height: '100%',
  },
  imageFixed: {
    borderRadius: 10,
    height: height * 0.18,
    width: '100%',
  },
  cardContentFixed: {
    padding: width * 0.04,
    height: height * 0.15,
    justifyContent: 'space-between',
  },
  textFixed: {
    color: '#000000',
    fontSize: 14,
    maxHeight: 40,
  },
  descriptionContainerFixed: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    marginTop: 8,
  },
  
  cardContainer: {
    width: width * 0.9,
    height: height * 0.4,
    maxWidth: 350,
    margin: 10,
    borderRadius: 20,
    backgroundColor: '#b3b3b3ff',
  },
  touchable: {
    borderRadius: 20,
    padding: width * 0.03,
    height: '100%',
  },
  image: {
    borderRadius: 10,
    height: height * 0.18,
    width: '100%',
  },
  cardContent: {
    padding: width * 0.04,
    height: height * 0.15,
    justifyContent: 'space-between',
  },
  text: {
    color: '#000000',
    fontSize: 14,
    maxHeight: 40,
  },
  descriptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    marginTop: 8,
  },

});

