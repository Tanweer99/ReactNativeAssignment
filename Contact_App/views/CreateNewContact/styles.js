import { StyleSheet } from "react-native";

export default StyleSheet.create({
    heading:{
        color:'black',
        textAlign:'center',
        fontSize:25,
        marginTop:20, 
        marginBottom:30 
    },
    fieldname:{
       color:'black',
       marginRight:5,
       fontWeight:'bold',
       marginBottom:2,
       width:100
    },
    input:{
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 2,
        marginBottom: 10,
        padding:3
    },
    container:{
        border:1,
        flex:1,
        alignItems:'flex-start',
        marginTop:20
    },
    fieldcontainer:{
        flex:1,
        flexDirection:'row',
    },
    outercontainer:{
        flex:'1',
        paddingLeft: 12,
        alignItems:'center'
    },
    savebtn:{
        width:'100%'
    },
    deletebtn:{
        marginTop:10,
        width:'100%'
    }
})