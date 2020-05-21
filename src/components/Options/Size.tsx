import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import { GS } from "../../styles/global";

interface SizeProps {
  getOptBg: (val: boolean) => any;
  toggleSize: () => void;
  size: boolean;
}

export const Size: React.FC<SizeProps> = ({ getOptBg, toggleSize, size }) => {
  return (
    <View style={[styles.optItem, GS.border, GS.bgOptions]}>
      <Text style={[GS.textRegular, GS.textBig]}>Размер поля</Text>
      <View style={styles.switchSize}>
        <TouchableOpacity
          disabled={!size}
          onPress={toggleSize}
          style={[styles.btnSize, GS.border, getOptBg(!size)]}
        >
          <Text style={[GS.textLight, GS.textMedium, GS.textWhite]}>3x3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={size}
          onPress={toggleSize}
          style={[styles.btnSize, GS.border, getOptBg(size)]}
        >
          <Text style={[GS.textLight, GS.textMedium, GS.textWhite]}>9x9</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  optItem: {
    elevation: 3,
    padding: 4,
    paddingTop: 0,
    marginBottom: 5,
  },
  switchSize: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  btnSize: {
    elevation: 3,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    width: "45%",
  },
});
