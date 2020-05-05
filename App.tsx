import React from "react";
import { StyleSheet, View } from "react-native";
import { Field } from "./src/containers/Field";
import { Status } from './src/containers/Status';
import {Navbar} from './src/containers/Navbar'
import { IMode } from "./src/interfaces"

export default function App() {

  const [mode, setMode] = React.useState<IMode>({
    size3X3: true
  })

  return (
    <View style={styles.container}>
      <Navbar/>
      <Field mode={mode}/>
      <Status mode={mode} setMode={setMode}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
