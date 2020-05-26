import React from "react";
import { Dimensions } from "react-native";
import * as Animatable from 'react-native-animatable';
import { GS } from "../styles/global";
import { IMode } from "../interfaces";
import { Size } from "../components/Options/Size";
import { Rule } from "../components/Options/Rule";
import { Counter } from "../components/Options/Counter";

interface ActionProps {
  mode: IMode;
  toggleSize: () => void;
  toggleRule: () => void;
  incCount: () => void;
  decCount: () => void;
}

const dimensions = Dimensions.get("window");

export const Options: React.FC<ActionProps> = ({
  mode,
  toggleSize,
  toggleRule,
  incCount,
  decCount,
}) => {

  const SlideSizeAnim = {
    from: {
      transform: [{
        translateX: -dimensions.width
      }]
    },
    to: {
      transform: [{
        translateX: 0
      }]
    }
  }
  const SlideRulesAnim = {
    from: {
      transform: [{
        translateX: mode.size ? -dimensions.width : 0
      }]
    },
    to: {
      transform: [{
        translateX: mode.size ? 0 : -dimensions.width
      }]
    }
  };
  const SlideLineAnim = {
    from: {
      transform: [{
        translateX: (mode.size && !mode.rule) ? -dimensions.width : 0
      }]
    },
    to: {
      transform: [{
        translateX: (mode.size && !mode.rule) ? 0 : -dimensions.width
      }]
    }
  };

  const getOptBg = (val: boolean) => {
    if (val) return GS.bgActive;
    return GS.bgDisabled;
  };
  return (
    <>
      <Animatable.View easing={'ease'} animation={SlideSizeAnim} duration={1500}>
        <Size getOptBg={getOptBg} toggleSize={toggleSize} size={mode.size} />
      </Animatable.View>
      <Animatable.View easing={'ease'} animation={SlideRulesAnim} duration={1500}>
        <Rule getOptBg={getOptBg} rule={mode.rule} toggleRule={toggleRule} />
      </Animatable.View>

      <Animatable.View easing={'ease'} animation={SlideLineAnim} duration={1500}>
        <Counter count={mode.count} incCount={incCount} decCount={decCount} />
      </Animatable.View>
    </>
  );
};

