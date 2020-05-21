import React from "react";
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

export const Options: React.FC<ActionProps> = ({
  mode,
  toggleSize,
  toggleRule,
  incCount,
  decCount,
}) => {
  const getOptBg = (val: boolean) => {
    if (val) return GS.bgActive;
    return GS.bgDisabled;
  };
  return (
    <>
      <Size getOptBg={getOptBg} toggleSize={toggleSize} size={mode.size} />
      {mode.size ? (
        <Rule getOptBg={getOptBg} rule={mode.rule} toggleRule={toggleRule} />
      ) : (
          false
        )}

      {mode.size && !mode.rule ? (
        <Counter count={mode.count} incCount={incCount} decCount={decCount} />
      ) : (
          false
        )}
    </>
  );
};
