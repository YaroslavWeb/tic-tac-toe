import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { GS } from "../../styles/global";
import { Info } from "../Info"
interface RuleProps {
  getOptBg: (val: boolean) => any;
  toggleRule: () => void;
  rule: boolean;
}

export const Rule: React.FC<RuleProps> = ({ getOptBg, rule, toggleRule }) => {
  const [infoVisible, setInfoVisible] = React.useState(false);
  const toggleInfo = () => {
    setInfoVisible(prev=> !prev)
  }
  return (
    <View style={[styles.optItem, GS.border, GS.bgOptions]}>
      <Info infoVisible = {infoVisible} toggleInfo = {toggleInfo}/>
      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <Text style={[GS.textRegular, GS.textBig]}>Правила</Text>
        <TouchableOpacity style={{alignSelf:'center'}} onPress={toggleInfo}>
          <Image style={{width:24, height:24, resizeMode:'stretch'}} source={require('../../../assets/control/question.png')}/>
        </TouchableOpacity>
      </View>
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
