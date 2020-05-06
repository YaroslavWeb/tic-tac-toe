import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
  Dimensions,
} from "react-native";
import { Players } from "../containers/Players";
import { useNavigation } from "@react-navigation/native";
import { IPlayer, IMode } from "../interfaces";

const winWidth = Dimensions.get("window").width;

export const MainMenu = () => {
  const navigation = useNavigation();
  const [mode, setMode] = React.useState<IMode>({
    size:false
  })
  // const [modeSize, setModeSize] = React.useState(false);
  const [players, setPlayers] = React.useState<IPlayer[]>([
    { id: 1, name: "Игрок №1", show: true },
    { id: 2, name: "Игрок №2", show: true },
    { id: 3, name: "Игрок №3", show: false },
    { id: 4, name: "Игрок №4", show: false },
  ]);

  const switchSize = () => {
    setMode(prev=> {return {...prev, size:!prev.size}})
  }

  const changeShow = (id: number) => {
    setPlayers((prev) =>
      prev.map((item) => {
        if (item.id === id) item.show = !item.show;
        return item;
      })
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.rules}>
        <View
          style={{
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            marginLeft: winWidth * 0.085,
          }}
        >
          <Text>Размер</Text>
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

      <View style={styles.actions}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Game", mode)}
        >
          <View style={styles.button}>
            <Text style={styles.text}>Начать игру</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          flexWrap: "wrap",
          height: "40%",
        }}
      >
        <Players players={players} changeShow={changeShow} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E2F9FF",
  },
  rules: {
    height: "30%",
  },
  actions: {
    height: "30%",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginBottom: 2,
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
});
