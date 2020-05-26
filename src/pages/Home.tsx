import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Dimensions } from "react-native";
import { IMode } from "../interfaces";
import { Players } from "../containers/Players";
import { Action } from "../containers/Action";
import { Options } from "../containers/Options";
import * as Animatable from 'react-native-animatable';

const dimensions = Dimensions.get("window");

const SlidePlayersAnim = {
  from: {
    transform: [{
      translateX: dimensions.width
    }]
  },
  to: {
    transform: [{
      translateX: 0
    }]
  }
}

const SlideActionsAnim = {
  from: {
    transform: [{
      translateY: dimensions.height
    }]
  },
  to: {
    transform: [{
      translateY: 0
    }]
  }
}



export const Home = () => {
  const navigation = useNavigation();
  const [mode, setMode] = React.useState<IMode>({
    size: true,
    rule: false,
    count: 4,
    players:[
      {id:1, active:true, type:1, character:1},
      {id:2, active:true, type:1, character:1},
      {id:3, active:false, type:0, character:1},
      {id:4, active:false, type:0, character:1},
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
  const getCharacter = (id:number, figure:number) => {
    setMode((prev) => ({
      ...prev,
      players: prev.players.map((item)=>{
        if(item.id === id){
          item.character = figure
        }
        return item
      })
    }))
  }
  const togglePlayer = (id: number, type:number) => {
    setMode((prev) =>({
      ...prev,
      players:prev.players.map((item) => {
        if (item.id === id) {
          item.active = !item.active
          item.type = type
        }
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

        <Animatable.View easing={'ease'} animation={SlidePlayersAnim} duration={1500} style={styles.players}>
          <Players players={mode.players} togglePlayer={togglePlayer} getCharacter={getCharacter}/>
        </Animatable.View>
      </View>
      <Animatable.View easing={'ease'} animation={SlideActionsAnim} duration={1500} style={styles.actions}>
        <Action navigation={navigation} mode={mode}/>
      </Animatable.View>
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
