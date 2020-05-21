import React from "react";

import { IPlayer } from "../interfaces";
import { CardPlayer } from "../components/CardPlayer";
import { CardAdd } from "../components/CardAdd";

interface PlayersProps {
  players: IPlayer[];
  togglePlayer: (id: number) => void;
}

export const Players: React.FC<PlayersProps> = ({ players, togglePlayer }) => {
  return (
    <>
      {players.map((player, index) => {
        if (player.show)
          return (
            <CardPlayer
              key={"pl_" + index}
              player={player}
              togglePlayer={togglePlayer}
            />
          );
        else
          return (
            <CardAdd
              key={"pl_" + index}
              player={player}
              togglePlayer={togglePlayer}
            />
          );
      })}
    </>
  );
};
