import React from "react";
import { StyleSheet, View } from "react-native";
import { Field } from "../containers/Field";
import { Status } from "../containers/Status";
import { IMode } from "../interfaces";


export  const Game = () => {
  
    const [mode, setMode] = React.useState<IMode>({
        size3X3: true,
      });


  return (
    <View style={styles.container}>
      <Field mode={mode} />
      <Status mode={mode} setMode={setMode} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
