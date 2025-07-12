import React from "react";
import Player from "./Player";

export default function PlayerInfo({ currentPlayer }) {
  return (
    <>
      <div className="row m-0 text-center fs-5">
        <div className="col">
          <Player
            name="Player 1"
            symbol={"X"}
            isActive={currentPlayer === "X"}
          />
        </div>
        <div className="col">
          <Player
            name={"Player 2"}
            symbol={"O"}
            isActive={currentPlayer === "O"}
          />
        </div>
      </div>
    </>
  );
}
