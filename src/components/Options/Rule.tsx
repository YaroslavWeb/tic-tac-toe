import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { GS } from "../../styles/global";

interface RuleProps {
  getOptBg: (val: boolean) => any;
  toggleRule: () => void;
  rule: boolean;
}

export const Rule: React.FC<RuleProps> = ({ getOptBg, rule, toggleRule }) => {
  return (
    <View style={[styles.optItem, GS.border, GS.bgOptions]}>
      <Text style={[GS.textRegular, GS.textBig]}>Правила</Text>
      <View style={styles.switchRule}>
        <TouchableOpacity
          disabled={!rule}
          onPress={toggleRule}
          style={[
            styles.btnRule,
            GS.border,
            getOptBg(!rule),
            { marginBottom: 5 },
          ]}
        >
          <Text style={[GS.textLight, GS.textMedium, GS.textWhite]}>
            Свободная
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={rule}
          onPress={toggleRule}
          style={[styles.btnRule, GS.border, getOptBg(rule)]}
        >
          <Text style={[GS.textLight, GS.textMedium, GS.textWhite]}>
            Секционная
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  optItem: {
    elevation: 3,
    padding: 4,
    paddingTop: 0,
    marginBottom: 5,
  },
  switchRule: {
    alignItems: "center",
    justifyContent: "space-around",
  },
  btnRule: {
    elevation: 3,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    width: "95%",
  },
});
