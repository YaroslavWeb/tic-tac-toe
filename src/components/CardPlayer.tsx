import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";

import { getSprite } from "../../assets/assets";
import { IPlayer } from "../interfaces";
import { GS, COLORS } from "../styles/global";

let dimensions = Dimensions.get("window");
interface PlayersProps {
  player: IPlayer;
  togglePlayer: (id: number) => void;
}

export const CardPlayer: React.FC<PlayersProps> = ({
  player,
  togglePlayer,
}) => {
  const [character, setCharacter] = React.useState(1);
  const [intervals, setIntervals] = React.useState(
    getSprite[`pl${player.id}`].length
  );
  let bullets: any = [];
  for (let i = 1; i <= intervals; i++) {
    bullets.push(
      <Text
        key={i}
        style={{
          ...styles.bullet,
          opacity: character === i ? 0.9 : 0.2,
        }}
      >
        &bull;
      </Text>
    );
  }
  return (
    <View
      style={[styles.card, GS.border, { backgroundColor: COLORS[`PL${player.id}_second`]}]}
    >
      <View style={[styles.status]}>
        <View
          style={[
            GS.border,
            {
              backgroundColor:COLORS[`PL${player.id}`],
              paddingHorizontal: 6,
            },
          ]}
        >
          <Text style={[GS.textRegular, GS.textSmall]}>{player.id}</Text>
        </View>
        <View style={styles.bullets}>{bullets}</View>
        <TouchableOpacity onPress={() => togglePlayer(player.id)}>
          <Image
            style={{ width: 22, height: 22}}
            source={require("../../assets/control/remove.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <ScrollView
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          onScroll={(data) =>
            setCharacter(
              Math.floor(
                data.nativeEvent.contentOffset.x /Math.round(dimensions.width * 0.5 - 33)+1
              )
            )
          }
        >
          {getSprite[`pl${player.id}`].map((item, index) => {
            return (
              <View
                key={`character_${index}`}
                style={[styles.box, GS.border, GS.bgDisabled]}
              >
                <Image style={[styles.sprite]} source={item} />
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    height: "24%",
    width: "100%",
    padding: 5,
  },
  status: {
    height: "24%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  content: {
    flex: 1,
    padding: 2,
  },
  box: {
  },
  sprite: {
    width: Math.round(dimensions.width * 0.5 - 33),
    height: "100%",
    resizeMode: "contain",
  },
  bullets: {
    justifyContent: "center",
    alignSelf:'center',
    flexDirection: "row",
  },
  bullet: {
    paddingHorizontal: 5,
  },
});
