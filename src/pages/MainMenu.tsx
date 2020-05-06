import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
  Dimensions,
  ImageBackground,
} from "react-native";
import { Players } from "../containers/Players";
import { useNavigation } from "@react-navigation/native";
import { IPlayer, IMode } from "../interfaces";
import { GS } from "../styles/global";
const winWidth = Dimensions.get("window").width;

export const MainMenu = () => {
  const navigation = useNavigation();
  const [mode, setMode] = React.useState<IMode>({
    size: false,
  });
  // const [modeSize, setModeSize] = React.useState(false);
  const [players, setPlayers] = React.useState<IPlayer[]>([
    { id: 1, name: "Игрок №1", show: true },
    { id: 2, name: "Игрок №2", show: true },
    { id: 3, name: "Игрок №3", show: false },
    { id: 4, name: "Игрок №4", show: false },
  ]);

  const switchSize = () => {
    setMode((prev) => {
      return { ...prev, size: !prev.size };
    });
  };

  const changeShow = (id: number) => {
    setPlayers((prev) =>
      prev.map((item) => {
        if (item.id === id) item.show = !item.show;
        return item;
      })
    );
  };

  return (
    <ImageBackground
      source={require("../../assets/bg.png")}
      style={styles.container}
    >
      <View style={styles.logo}>
        <Text>ХОД</Text>
      </View>

      <View style={styles.content}>
        {/* RULES */}
        <View style={styles.config}>
          <View style={[styles.configSize, GS.border]}>
            <View
              style={{
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                marginLeft: winWidth * 0.085,
              }}
            >
              <Text style={{ fontSize: 18 }}>Размер поля</Text>
            </View>
            <View style={styles.switch}>
              <Text>3x3</Text>
              <Switch
                trackColor={{ false: "#60DDD7", true: "#60DDD7" }}
                thumbColor={mode.size ? "#0884DD" : "#0884DD"}
                onValueChange={switchSize}
                value={mode.size}
              />
              <Text>9x9</Text>
            </View>
          </View>
          <View style={[styles.configRule,GS.border]}>
            <Text style = {{fontSize: 18}}>Правила</Text>
            <View style = {styles.buttonsConfigRule}>
            <TouchableOpacity style = {styles.buttonClassic}>
              <Text style = {{ textAlign:'center'}}>Свободная</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.buttonSex}>
              <Text style = {{ textAlign:'center'}}>Секционная</Text>
            </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* PLAYERS */}
        <View style={styles.players}>
          <Players players={players} changeShow={changeShow} />
        </View>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity onPress={() => navigation.navigate("Game", mode)}>
          <View style={styles.button}>
            <Text style={styles.text}>Начать игру</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E2F9FF",
  },
  logo: {
    paddingTop: 15,
    justifyContent: "flex-end",
    alignItems: "center",
    height: "15%",
  },
  content: {
    flexDirection: 'row',
    height: "70%",
  },
  config: {
    width: "50%"
  },
  players: {
    width: '50%',
    flexDirection: "column",
    flexWrap: "wrap",
    
  },
  actions: {
    height: "15%",
    alignItems: "center",
    justifyContent: "center",
  },
  configSize: {
    width: winWidth * 0.44,
    marginLeft: 10,
    backgroundColor: "#FFBD4F",
    marginBottom:5
  },
  configRule:{
    marginLeft: 10,
    width: winWidth * 0.44,
    height: "29.6%",
    backgroundColor: '#FFBD4F'
  },
  button: {
    width: winWidth * 0.53,
    height: '71.3%',
    borderRadius: 16,
    borderColor: "#0884DD",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 7,
    backgroundColor: "#0884DD",
  },
  text: {
    color: "white",
    fontSize: 20,
  },
  switch: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginLeft: winWidth * 0.02,
  },
  buttonsConfigRule: {
    alignItems:"center",
    justifyContent: 'space-around',
  },


  buttonClassic: {
    width: winWidth * 0.35,
    height: '35%',
    borderRadius: 8,
    borderColor: "#28A745",
    borderWidth: 1,
    backgroundColor: "#28A745",
  },
  buttonSex: {
    width: winWidth * 0.35,
    height: '35%',
    borderRadius: 8,
    borderColor: "#28A745",
    borderWidth: 1,
    backgroundColor: "#28A745",

  }
});
