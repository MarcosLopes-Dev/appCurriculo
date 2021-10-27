import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    card:{
        marginTop: 10,
        padding: 10,
        width: '60%',
        borderRadius: 5,
        borderWidth: 2,
        borderColor:'blue',
        justifyContent:'center',
        alignItems:'center'
      },
      cardskill:{
        marginTop: 10,
        padding: 10,
        width: '60%',
        borderRadius: 5,
        borderWidth: 2,
        borderColor:'red',
        justifyContent:'center',
        alignItems:'center'
      },
      card_content:{
        marginTop: 10,
      },
      exp:{
        marginTop:10,
        fontSize: 15,
        fontWeight:'bold',
        color:'blue'
      },
      content:{
        color:'white'
      },
      data:{
        color:'white',
        alignSelf:'flex-end'
      },
})
export default style