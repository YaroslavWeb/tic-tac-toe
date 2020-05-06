import * as React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Switch,
  Dimensions,
} from "react-native";

import { IPlayer } from "../interfaces";

interface PlayersProps {
  player: IPlayer;
  changeShow: (id:number)=>void
}

export const CardAdd: React.FC<PlayersProps> = ({ player, changeShow }) => {
  return (
    <View style = {styles.player}>
        <TouchableOpacity style = {styles.button} onPress={() => changeShow(player.id) }>
             <Text style = {styles.text}>Добавить игрока</Text>
        </TouchableOpacity>
     
    </View>
  );
};
const styles = StyleSheet.create({
  player: {
    borderColor: "#0884DD",
    borderRadius: 8,
    height: "23%",
    width: "100%",
    marginBottom: 4,
    backgroundColor:'#A3B1BB',
    justifyContent: "center",
    alignItems: "center",
    //opacity: 0.4,
  },

  text: {
    textAlign: "center",
    justifyContent: "center",
    color: "white",
    fontSize: 12,
  },
  button: {
    marginBottom: 2,
    borderRadius: 16,
    borderColor: "#0884DD",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 7,
    backgroundColor: "#0884DD",
  }
});