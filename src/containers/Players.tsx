import React from "react";
import { IPlayer } from "../interfaces";
import { CardPlayer } from "../components/CardPlayer";
import { CardAdd } from "../components/CardAdd";

interface PlayersProps {
  players: IPlayer[];
  togglePlayer: (id: number, type: number) => void;
  getCharacter: (id: number, figure: number) => void
}
export const Players: React.FC<PlayersProps> = ({ players, togglePlayer, getCharacter }) => {
  return (
    <>
      {players.map((player, index) => {
        if (player.active)
          return ( 
            <CardPlayer
              key={"pl_" + index}
              player={player}
              togglePlayer={togglePlayer}
              getCharacter={getCharacter}
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
