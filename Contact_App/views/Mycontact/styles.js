import {
    StyleSheet
} from 'react-native';
export default StyleSheet.create({
    heading:{
        color:'black',
        textAlign:'center',
        fontSize:25,
        marginTop:10,
    },

    contactListContainer:{
        marginTop:10,
        paddingLeft:30
    },

    eachContact:{
        backgroundColor:'lightgrey',
        marginBottom:5,
        border:2,
        width:'90%',
        borderColor:'black',
        borderRadius:5,
        paddingLeft:10
    },

    addButton:{
        borderRadius:50,
        backgroundColor:'skyblue',
        padding:12,
        width:40,
        position:'fixed',
        bottom:15,
        right:10
    },

    contactname:{
         fontWeight:'bold',
         marginBottom:3
    }
})