import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";

import { IPlayer } from "../interfaces";
import { GS, COLORS } from "../styles/global";

let dimensions = Dimensions.get("window");
interface PlayersProps {
  player: IPlayer;
  togglePlayer: (id:number)=>void
}

export const CardAdd: React.FC<PlayersProps> = ({ player, togglePlayer }) => {
  return (
    <View style = {[styles.card, GS.border, {backgroundColor:COLORS[`PL${player.id}_second`]}]}>
      <View style={styles.status}>
        <View style={[GS.border, {backgroundColor:COLORS[`PL${player.id}`], paddingHorizontal:6}]}>
          <Text style={[GS.textRegular, GS.textSmall]}>{player.id}</Text>
        </View>
      </View>
      <View style={styles.content}>
        <TouchableOpacity style={[styles.btnAdd,GS.border, GS.bgDisabled]} onPress={() => togglePlayer(player.id) }>
          <Image style={styles.btnAddImg} source={require('../../assets/control/addPl.png')}/>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btnAdd,GS.border, GS.bgDisabled]} onPress={() => togglePlayer(player.id) }>
          <Image style={styles.btnAddImg} source={require('../../assets/control/addAI.png')}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  card:{
    height:'24%',
    width:'100%',
    padding:5
  },
  status:{
    flexDirection:'row',
    height:'24%',
  },
  content:{
    flexDirection:'row',
    padding:2,
    justifyContent:"space-around",
    flex:1
  },
  btnAdd:{
    padding:5,
    justifyContent:'center',
    alignItems:'center'
  },
  btnAddImg:{
    width: Math.round(dimensions.width * 0.2-20),
    height:'100%',
    resizeMode:'contain'
  }
});