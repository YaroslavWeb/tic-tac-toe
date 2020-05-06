import React from "react";
import { StyleSheet, View, Alert} from "react-native";
import { Field } from "../containers/Field";
import { Status } from "../containers/Status";
import { initField } from "../engine";
import { useNavigation } from "@react-navigation/native";
interface GameProps {
  route: any;
}

export const Game: React.FC<GameProps> = ({ route }) => {
  console.log(route.params);
  
  const navigation = useNavigation();
  const [gameField, setGameField] = React.useState(()=>initField(route.params.size));
  const [gameTurn, setGameTurn]= React.useState(1)

  const reloadGame = () =>{
    setGameField(initField(route.params.size))
    setGameTurn(1)
  }

  const changeTurn = () => {
    setGameTurn(prev => {
      if(prev === 1) prev = -1
      else prev = 1
      return prev;
    });
  };
  // Ход игрока фиксируется на поле
  const onItemPress = (row: any, col: any) => {
    setGameField((prev) => {
      if (prev[row][col] == 0) prev[row][col] = gameTurn;
      checkWin(prev)
      return prev;
    });
    changeTurn()
  };

  // Окно для выхода либо повтора игры 
  const gamePromt = ()=>{
    Alert.alert('Победа!', 'Можем повторить?',
      [
        {text: 'Нет', onPress: () => navigation.goBack()},
        {text: 'Да', onPress: () => reloadGame()},
      ],
      { cancelable: false }
    );
  }

  // Проверка победы, после заполнения ячейки
  const checkWin = (field:any) =>{
    let sum = 0
    for (let i = 0; i < field.length; i++) {
      for(let j = 0; j < field[i].length; j++){

        // sum = field[i][j]+field[i+1][j]+field[i+2][j]
        // sum === 3 ? gamePromt() : false
      //   if(gameTurn === field[i][j] && (field[i][j] === field[i][j+1] && field[i][j] === field[i][j+2])) 
      //     gamePromt()
      }
    }
  }

  return (
    <View style={styles.container}>
      <Field field={gameField} onItemPress={onItemPress}/>
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
