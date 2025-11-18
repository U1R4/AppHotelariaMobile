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
        paddingHorizontal: width * 0.07,
        paddingTop: height * 0.05,
        paddingBottom: height * 0.05,
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
        backgroundColor: "#4e4e4eff",
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
})