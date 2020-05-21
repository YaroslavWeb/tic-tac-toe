import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { IMode } from "../interfaces";
import { Players } from "../containers/Players";
import { Action } from "../containers/Action";
import { Options } from "../containers/Options";

export const Home = () => {
  const navigation = useNavigation();
  const [mode, setMode] = React.useState<IMode>({
    size: true,
    rule: false,
    count: 3,
    players:[
      {id:1, show:true},
      {id:2, show:true},
      {id:3, show:false},
      {id:4, show:false},
    ]
  });

  const toggleSize = () => {
    setMode((prev) => ({ ...prev, size: !prev.size }))
  }
  const toggleRule = () => {
    setMode((prev) => ({...prev, rule: !prev.rule}))
  }
  const incCount = () => {
    setMode((prev) => ({...prev, count:prev.count+1}))
  }
  const decCount = () => {
    setMode((prev) => ({...prev, count:prev.count-1}))
  }

  const togglePlayer = (id: number) => {
    setMode((prev) =>({
      ...prev,
      players:prev.players.map((item) => {
        if (item.id === id) item.show = !item.show;
        return item;
      })
    })
    );
  }

  return (
    <ImageBackground
      source={require("../../assets/bg.png")}
      style={styles.container}
    >
      <View style={styles.content}>
        <View style={styles.config}>
          <Options mode={mode} toggleSize={toggleSize} toggleRule={toggleRule} incCount={incCount} decCount={decCount}/>
        </View>

        <View style={styles.players}>
          <Players players={mode.players} togglePlayer={togglePlayer} />
        </View>
      </View>
      <View style={styles.actions}>
        <Action navigation={navigation} mode={mode}/>
      </View>

    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingTop:35,
    flexDirection: 'row',
    height: "85%",
  },
  actions: {
    height: "15%",
    paddingBottom:20,
    justifyContent:'flex-end',
    alignItems: "center",
  },
  config: {
    paddingLeft:'2%',
    paddingRight:'1%',
    width: "50%",
  },
  players: {
    paddingLeft:'1%',
    paddingRight:'2%',
    width: '50%',
    justifyContent:'space-between',
    flexDirection: "column",
    flexWrap: "wrap",
  }
});
