import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext: {
        width:"100%",
        height:"100%",
        bottom:0,
        backgroundColor:"#C0C0C0",
        alignItems: "center",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        marginTop:30,
    },
    form:{
        width:"100%",
        height:"auto",
        marginTop:30,
        padding:10
    },
    input:{
        width:"90%",
        borderRadius:50,
        backgroundColor:"#DCDCDC",
        height:40,
        margin:12,
        paddingLeft:10
    },
    buttonClean:{
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
        width:"90%",
        backgroundColor:"#1E90FF",
        paddingTop:10,
        paddingBottom:10,
        marginLeft:12,
        marginTop:30
    },
    textButtonClean:{
        fontSize:22,
        color:"#FFFFFF"
    },
    textEsqueceuSenha: {
        textAlign: "right",
        paddingRight: 30,
        fontSize: 17,
        fontWeight: "bold"
    },
    textCadastro:{
        fontSize:20,
        fontWeight: "bold"
    },
    buttonCadastro:{
        alignItems: "center",
        justifyContent:"center",
        width: "90%",
        paddingTop:10,
        paddingBottom:10,
        marginLeft:12,
        marginTop:30
    }
});

export default styles;