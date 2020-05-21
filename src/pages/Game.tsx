import React from "react";
import { StyleSheet, View } from "react-native";
import { Board } from "../containers/Board";
import { Status } from "../containers/Status";
import { initBoard, checkWin } from "../engine";
interface GameProps {
  route: any;
}

export const Game: React.FC<GameProps> = ({ route }) => {
  const [grid, setGrid] = React.useState(() => initBoard(route.params.size));
  const [players, setPlayers] = React.useState(2)
  const [turn, setTurn] = React.useState(1);

  const restartGame = () => {
    setGrid(initBoard(route.params.size));
    setTurn(1);
  };
  
  const changeTurn = () => {
    setTurn((prev) => {
      if (prev === 1) prev = 2;
      else prev = 1;
      return prev;
    });
  };

  // Ход игрока фиксируется на поле
  const onBoxPress = (row: any, col: any) => {
    setGrid((prev) => {
      if (prev[row][col] == 0) prev[row][col] = turn;
      checkWin(prev, turn) ? restartGame() : false;
      return prev;
    });
    changeTurn();
  };

  return (
    <View style={styles.container}>
      <Board grid={grid} onBoxPress={onBoxPress} />
      <Status />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
