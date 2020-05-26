import * as React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";

import { getSprite } from "../../assets/assets";
import { GS } from "../styles/global";

interface RowProps {
  boxes: [];
  index: number;
  onBoxPress: (row: any, col: any) => void;
  getSizeBox: () => any;
  getSizeIcon: () => any
}

export const Row: React.FC<RowProps> = ({
  boxes,
  index,
  onBoxPress,
  getSizeBox,
  getSizeIcon,
}) => {
  return (
    <View style={styles.row}>
      {boxes.map((col: Number, jndex: Number) => {
        return (
          <TouchableOpacity
            key={`${col}_${index}_${jndex}`}
            disabled={col != 0 ? true : false}
            onPress={() => {
              onBoxPress(index, jndex);
            }}
          >
            <View style={[styles.box, GS.border, GS.bgDisabled, getSizeBox()]}>
              {col !== 0 ? (
                <Image
                  style={[{ resizeMode: "contain" }, getSizeIcon()]}
                  source={getSprite[`pl${col}`][0]}
                />
              ) : (
                false
              )}
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
  box: {
    justifyContent: "center",
    alignItems: "center",
    margin: 1,
    padding: 17,
    elevation: 2,
  },
});
