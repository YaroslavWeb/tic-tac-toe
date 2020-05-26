import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { GS } from "../../styles/global";

interface CounterProps {
    count: number
    incCount: ()=>void
    decCount: ()=>void
}

export const Counter: React.FC<CounterProps> = ({ count, incCount, decCount }) => {
  return (
    <View style={[styles.optItem, GS.border, GS.bgOptions]}>
      <Text style={[GS.textRegular, GS.textBig]}>Победная линия</Text>
      <View style={styles.counter}>
        <TouchableOpacity
          disabled={count <= 3}
          onPress={decCount}
          style={[styles.btnCounter, GS.border]}
        >
          <Text style={[GS.textBig]}>-</Text>
        </TouchableOpacity>
        <Text style={[GS.textRegular, GS.textLarge]}>{count}</Text>

        <TouchableOpacity
          disabled={count >= 5}
          onPress={incCount}
          style={[styles.btnCounter, GS.border]}
        >
          <Text style={[GS.textBig]}>+</Text>
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
  counter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  btnCounter: {
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    width: "30%",
  },
});
