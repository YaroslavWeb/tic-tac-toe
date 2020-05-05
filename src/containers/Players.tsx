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
import { CardPlayer } from "../components/CardPlayer"
import { CardAdd } from "../components/CardAdd"

interface PlayersProps {
  players   : IPlayer[];
  changeShow: (id:number)=>void
}

export const Players: React.FC<PlayersProps> = ({ players, changeShow }) => {
  return (
   <>
      {players.map((player, index) => {
          if(player.show) return <CardPlayer key={"pl_" + index} player={player}/>
          else return <CardAdd key={"pl_" + index} player={player} changeShow = {changeShow}/>
        // return (
            
        //   <View key={"pl_" + index} style={[styles.player]}>
        //     <Text style={styles.text}>{player.name}</Text>
        //     {player.show ? (
        //       <Text>{player.name}</Text>
        //     ) : (
        //       <TouchableOpacity>
        //         <Text>Добавить игрока</Text>
        //       </TouchableOpacity>
        //     )}
        //   </View>
        // );
      })}
    </>
  );
};

const styles = StyleSheet.create({
  player: {
    borderWidth: 2,
    marginRight: 2,
    marginLeft: 2,
    marginBottom: 5,
    borderColor: "#0884DD",
    borderRadius: 8,
    height: "45%",
    width: "48%",
    marginTop: 5,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    textAlign: "center",
    justifyContent: "center",
  },
});
