import { StyleSheet } from "react-native";

export const COLORS = {
  GREEN: "#28A745",
  WHITE: "#FBF5EE",
  YELLOW: "#FFBD4F",
  GRAY: "#505050",

  BORDER: "#201600",

  PL1: "#F7931E",
  PL1_second: "#FFB666",
  PL2: "#8B58BF",
  PL2_second: "#A284BD",
  PL3: "#5996D8",
  PL3_second: "#87B9D8",
  PL4: "#50CC79",
  PL4_second: "#6BCDA1",
};

export const GS = StyleSheet.create({
  // Text
  textLight: { fontFamily: "Oswald-Light" },
  textRegular: { fontFamily: "Oswald-Regular" },
  textBold: { fontFamily: "Oswald-Bold" },

  textTiny: { fontSize: 12 },
  textSmall: { fontSize: 14 },
  textMedium: { fontSize: 18 },
  textBig: { fontSize: 24 },
  textLarge: { fontSize: 32 },

  textWhite: { color: COLORS.WHITE },

  // Border
  border: {
    borderColor: COLORS.BORDER,
    borderWidth: 2,
    borderRadius: 4,
  },

  // Background
  bgOptions: { backgroundColor: COLORS.YELLOW },
  bgActive: { backgroundColor: COLORS.GREEN },
  bgDisabled: { backgroundColor: COLORS.GRAY },
});
