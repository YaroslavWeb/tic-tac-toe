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

interface PlayersProps {
  player: IPlayer;
  togglePlayer: (id: number, type: number) => void
  getCharacter: (id: number, figure: number) => void
}

let dimensions = Dimensions.get("window");
export const CardPlayer: React.FC<PlayersProps> = ({
  player,
  togglePlayer,
  getCharacter
}) => {
  const [character, setCharacter] = React.useState(1);
  const [intervals, setIntervals] = React.useState(
    getSprite[`pl${player.id}`].length
  );
  React.useEffect(()=>{
    getCharacter(player.id, character)
  }, [character])

  const getType = (type: number) => {
    if (type === 1)
      return require("../../assets/control/Pl.png");
    return require("../../assets/control/Ai.png");
  }

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
      style={[styles.card, GS.border, { backgroundColor: COLORS[`PL${player.id}_second`] }]}
    >
      <View style={[styles.status]}>
        <View
          style={[
            GS.border,
            {
              backgroundColor: COLORS[`PL${player.id}`],
              paddingHorizontal: 2,
              flexDirection: 'row'
            },
          ]}
        >
          <Image
            style={{ width: 20, height: 20, resizeMode: 'stretch' }}
            source={getType(player.type)}
          />
        </View>
        <View style={styles.bullets}>{bullets}</View>
        <TouchableOpacity onPress={() => togglePlayer(player.id, 0)}>
          <Image
            style={{ width: 22, height: 22 }}
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
                data.nativeEvent.contentOffset.x / Math.round(dimensions.width * 0.5 - 33) + 1
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
    alignSelf: 'center',
    flexDirection: "row",
  },
  bullet: {
    paddingHorizontal: 5,
  },
});
