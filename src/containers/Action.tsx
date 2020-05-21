import React from "react";
import { TouchableOpacity, View, Image, StyleSheet, Dimensions } from "react-native";

import { GS } from "../styles/global";
import { IMode } from "../interfaces";

let dimensions = Dimensions.get("window");

interface ActionProps {
  navigation: any;
  mode: IMode;
}

export const Action: React.FC<ActionProps> = ({ navigation, mode }) => {
  return (
    <>
      <TouchableOpacity onPress={() => navigation.navigate("Game", mode)}>
        <View style={[styles.play, GS.border, GS.bgOptions]}>
          <Image style={{width:'100%',height:'100%', resizeMode:'contain'}} source={require('../../assets/control/play.png')}/>
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  play: {
    height:dimensions.height*0.15-25,
    width:dimensions.width*0.6,
    padding:10,
    justifyContent: "center",
    alignItems:'center',
  },
});
