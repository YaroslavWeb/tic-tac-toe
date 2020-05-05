import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const winHeight = Dimensions.get("window").height;

export const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>Крестики нолики</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: winHeight * 0.1,
    width: "100%",
    backgroundColor: "#FF8D27",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent:'center',
    elevation: 2,
  },
  text: {
    color: "#BF6674",
    fontSize: 20,
    padding:10
  },
});
