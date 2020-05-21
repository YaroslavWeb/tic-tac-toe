import * as Font from "expo-font";

export const getFonts = () =>
  Font.loadAsync({
    "Oswald-Regular": require("./fonts/Oswald-Regular.ttf"),
    "Oswald-Light": require("./fonts/Oswald-Light.ttf"),
    "Oswald-Bold": require("./fonts/Oswald-Bold.ttf"),
  });

export const getSprite: any = {
  pl1: [
    require("./sprites/krestO.png"),
    require("./sprites/krugO.png"),
    require("./sprites/rombO.png"),
    require("./sprites/treugO.png")
  ],
  pl2: [
    require("./sprites/krugV.png"),
    require("./sprites/krestV.png"),
    require("./sprites/rombV.png"),
    require("./sprites/treugV.png")
  ],  
  pl3: [
    require("./sprites/rombB.png"),
    require("./sprites/krestB.png"),
    require("./sprites/krugB.png"),
    require("./sprites/treugB.png")
  ],  
  pl4: [
    require("./sprites/treugG.png"),
    require("./sprites/krestG.png"),
    require("./sprites/krugG.png"),
    require("./sprites/rombG.png"),
  ],
};
