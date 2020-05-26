import React from "react";
import { StyleSheet, Text, View, Dimensions, Button } from "react-native";

const winHeight = Dimensions.get("window").height;
const winWidth = Dimensions.get("window").width;

export const Status: React.FC = () => {
  return (
    <View style={styles.status}>
      <Text>Status</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  status: {
    height: winHeight * 0.2,
  },
});
