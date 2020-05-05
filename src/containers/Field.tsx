import React from "react";
import {
  StyleSheet,
  Image,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { IMode } from "../interfaces";

const winHeight = Dimensions.get("window").height;
const winWidth = Dimensions.get("window").width;

interface FieldProps {
  mode: IMode;
}
const rows = 9;
const cols = 9;

export const Field: React.FC<FieldProps> = ({ mode }) => {
  const [gameField, setGameField] = React.useState<any[]>([]);
  const [curPl, setCurPl] = React.useState<Number>(1);
  


  const initializeField = () => {
    let field: any[] = [];
    for (let i = 0; i < rows; i++) {
      field[i] = [];
      for (let j = 0; j < cols; j++) {
        field[i][j] = 0;
      }
    }
    return field;
  };
  React.useEffect(() => {
    setGameField(initializeField);
  }, []);

  const renderIcon = (row: any, col: any) => {
    let val = gameField[row][col];
    switch (val) {
      case 1:
        return (
          <Image
            style={styles.icon}
            source={require("../../assets/sprites/romb.png")}
          />
        );
      case -1:
        return (
          <Image
            style={styles.icon}
            source={require("../../assets/sprites/treug.png")}
          />
        );
      default:
        return false;
    }
  };
  const onItemPress = (row: any, col: any) => {
    setGameField((prev) => {
      if (prev[row][col] == 0) prev[row][col] = curPl;
      return prev;
    });
    setCurPl((prev) => {
      switch (prev) {
        case 1:
          return -1;
        default:
          return 1;
      }
    });
  };

  return (
    <View style={styles.field}>
      <View style={styles.section}>
        {gameField.map((row, i) => {
          return (
            <View key={"row_" + i} style={styles.row}>
              {row.map((col: string, j: number) => {
                return (
                  <TouchableOpacity
                    disabled={gameField[i][j] != 0 ? true : false}
                    key={`${col}_${i}_${j}`}
                    onPress={() => {
                      onItemPress(i, j);
                    }}
                  >
                    <View style={styles.item}>{renderIcon(i, j)}</View>
                  </TouchableOpacity>
                );
              })}
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  field: {
    backgroundColor: "#DCEFE9",
    height: winHeight * 0.7,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  section: {},
  row: {
    flexDirection: "row",
  },
  item: {
    backgroundColor: "#B2DCD7",
    borderColor: "#77A29F",
    borderWidth: 1,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    margin: 2,
    padding: 17,
    width: winWidth / cols - 20,
    height: (winHeight * 0.6) / rows - 20,
    elevation: 2,
  },
  icon: {
    resizeMode: "contain",
    width: winWidth / cols - 10,
    height: (winHeight * 0.6) / rows - 10,
  },
});
