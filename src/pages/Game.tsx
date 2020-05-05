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
  const navigation = useNavigation();
  const [gameField, setGameField] = React.useState(initField(route.params.modeSize));
  const [gameTurn, setGameTurn]= React.useState(1)

  const reloadGame = () =>{
    setGameField(initField(route.params.modeSize))
    setGameTurn(1)
  }

  const changeTurn = () => {
    setGameTurn(prev => {
      if(prev === 1) prev = -1
      else prev = 1
      return prev;
    });
  };
 
  const onItemPress = (row: any, col: any) => {
    setGameField((prev) => {
      if (prev[row][col] == 0) prev[row][col] = gameTurn;
      checkWin(prev)
      return prev;
    });
    changeTurn()
  };

  const _twoOptionAlertHandler = ()=>{
    Alert.alert('Победа!', 'Можем повторить?',
      [
        {text: 'Нет', onPress: () => navigation.goBack(), style: 'cancel'},
        {text: 'Да', onPress: () => reloadGame()},
      ],
      { cancelable: false }
      //clicking out side of alert will not cancel
    );
  }

  const checkWin = (field:any) =>{
    for (let i = 0; i < field.length; i++) {
      for(let j = 0; j < field[i].length; j++){
        if(gameTurn === field[i][j] && (field[i][j] === field[i][j+1] && field[i][j] === field[i][j+2])) 
        _twoOptionAlertHandler()
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
