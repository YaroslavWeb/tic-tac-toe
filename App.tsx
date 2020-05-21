import React from "react";
import { AppLoading } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { getFonts } from "./assets/assets";
import { Home } from "./src/pages/Home";
import { Game } from "./src/pages/Game";

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = React.useState<boolean>(false);
  
  if(fontsLoaded)
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Game" component={Game} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  else 
  return(
    <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
  )
}
