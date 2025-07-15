import React from "react";
import Player from "./Player";

export default function PlayerInfo({
  currentPlayer,
  updatePlayerName,
  participants,
}) {
  return (
    <>
      <div className="row m-0 text-center fs-5">
        <div className="col">
          <Player
            name={participants["X"]}
            symbol={"X"}
            isActive={currentPlayer === "X"}
            onNameChange={updatePlayerName}
          />
        </div>
        <div className="col">
          <Player
            name={participants["O"]}
            symbol={"O"}
            isActive={currentPlayer === "O"}
            onNameChange={updatePlayerName}
          />
        </div>
      </div>
    </>
  );
}
