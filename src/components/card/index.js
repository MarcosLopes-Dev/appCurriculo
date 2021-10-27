import React from "react";
import { View, Text } from "react-native";
import style from "./style";

const Card = ({titulo, children}) =>{
    return(
        <>
        <Text style={style.exp}>{titulo}</Text>
        <View style={style.card}>
          <View style={style.card_content}>
              {children}
          </View>
        </View >
        </>
    )
}
export default Card