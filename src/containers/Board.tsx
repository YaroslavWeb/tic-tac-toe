import React from "react";
import {
  StyleSheet,
  Image,
  View,
  Dimensions,
} from "react-native";
import { Row } from '../components/Row'

const winHeight = Dimensions.get("window").height;
const winWidth = Dimensions.get("window").width;

interface FieldProps {
  grid      : any[]
  onBoxPress: (row:any, col:any)=>void
}

export const Board: React.FC<FieldProps> = ({ grid, onBoxPress }) => {
  const length = grid.length

  const getSizeBox = () => {
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
  const getSizeIcon = () => {
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
        {grid.map((row, index) => {
          return (
            <Row key={"row_" + index} index={index} boxes={row} onBoxPress={onBoxPress} getSizeBox={getSizeBox} getSizeIcon={getSizeIcon}/>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  field: {
    height: winHeight * 0.7,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  section: {},

});
