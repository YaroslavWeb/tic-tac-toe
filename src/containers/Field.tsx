import React from "react";
import {
  StyleSheet,
  Image,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const winHeight = Dimensions.get("window").height;
const winWidth = Dimensions.get("window").width;
interface FieldProps {
  field      : any[]
  onItemPress: (row:any, col:any)=>void
}

export const Field: React.FC<FieldProps> = ({ field, onItemPress }) => {

  const renderIcon = (row: any, col: any) => {
    let val = field[row][col];
    switch (val) {
      case 1:
        return (
          <Image
            style={[styles.icon, getSizeIcon(field.length)]}
            source={require("../../assets/sprites/romb.png")}
          />
        );
      case -1:
        return (
          <Image
            style={[styles.icon, getSizeIcon(field.length)]}
            source={require("../../assets/sprites/treug.png")}
          />
        );
      default:
        return false;
    }
  };
  const getSizeItem = (length: number) => {
    if (length == 3) {
      return {
        width: winWidth / length - 20,
        height: (winHeight * 0.6) / length - 20,
      };
    } else {
      return {
        width: winWidth / length - 10,
        height: (winHeight * 0.6) / length - 10,
      };
    }
  };
  const getSizeIcon = (length: number) => {
    if (length == 3) {
      return {
        width: winWidth / length - 20,
        height: (winHeight * 0.6) / length - 20,
      };
    } else {
      return {
        width: winWidth / length - 5,
        height: (winHeight * 0.6) / length - 5,
      };
    }
  };

  return (
    <View style={styles.field}>
      <View style={styles.section}>
        {field.map((row, i) => {
          return (
            <View key={"row_" + i} style={styles.row}>
              {row.map((col: string, j: number) => {
                return (
                  <TouchableOpacity
                    disabled={field[i][j] != 0 ? true : false}
                    key={`${col}_${i}_${j}`}
                    onPress={() => {
                      onItemPress(i, j);
                    }}
                  >
                    <View style={[styles.item, getSizeItem(field.length)]}>
                      {renderIcon(i, j)}
                    </View>
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

    elevation: 2,
  },
  icon: {
    resizeMode: "contain",
  },
});
