import React from "react";

export default function Log({ game }) {
  return (
    <>
      <ul
        className="overflow-y-auto w-50 text-center"
        style={{ height: "150px",listStyle:'none' }}
      >
        {game.map((turn) => (
          <li>
            <span>
              {turn.player} clicked box {turn.box.row} {turn.box.col}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}
