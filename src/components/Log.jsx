import React from "react";
import style from './Log.module.css';

export default function Log({ game }) {
  return (
    <div className={`${style.container}`}>
      <ul
        className="overflow-y-auto w-50 text-center"
        style={{ height: "100px",listStyle:'none' }}
      >
        {game.map((turn) => (
          <li key={`${turn.box.row}${turn.box.col}`}>
            <span>
              {turn.player} clicked box {turn.box.row} {turn.box.col}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
