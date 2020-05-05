import React from "react";
import { StyleSheet, Text, View, Dimensions, Button } from "react-native";
import { IMode } from "../interfaces"

const winHeight = Dimensions.get("window").height;
const winWidth = Dimensions.get("window").width;

interface StatusProps{
    setMode : Function
    mode    : IMode
}

export const Status: React.FC<StatusProps> = ({setMode, mode}) => {
  return (
    <View style={styles.status}>

      <Text>Status</Text>

      <Button
          title="Press me"
          onPress={() => setMode(() => {
              mode.size3X3 = !mode.size3X3
              return mode
          })}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  status: {
    backgroundColor:'#fff',
    height: winHeight * 0.2,
  },
});
