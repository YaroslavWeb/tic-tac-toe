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
}

export const CardPlayer: React.FC<PlayersProps> = ({ player }) => {
  return (
    <View style = {styles.player}>
      
      <Text style = {styles.text}>{player.name}</Text>
    </View>
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