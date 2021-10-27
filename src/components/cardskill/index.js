import React from "react";
import { View, Text } from "react-native";
import style from "./style";
const Cardskill = () =>{
    return(
        <>
        <View style={style.cardskill}>
        <Text style={style.exp}>Skills</Text>
          <View style={style.card_content}>
            <Text style={style.content}>
              PHP /
              HTML /
              JAVASCRIPT /
              CSS /
              Python /
              REACTJS /
              Bootstrap /
              C /
              PL-SQL

              </Text>
          </View>
        </View >
        </>
    )
}
export default Cardskill