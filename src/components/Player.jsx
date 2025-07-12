import React, { useState } from "react";
import style from "./Player.module.css";



export default function Player({ symbol, name, isActive }) {

  const [isEditable, setIsEditable] = useState(false);
  const [playerName, setplayerName] = useState("");



  function handleClick() {
    setIsEditable((editable) => !editable);
  }

  function handleChange(e) {
    setplayerName(e.target.value);
  }



  let tag = (
    <span className="px-3 text-white w-75">
      {playerName ? playerName : name}
    </span>
  );


  if (isEditable) {
    tag = (
      <input
        type="text"
        className="w-75 rounded border-0"
        value={playerName}
        placeholder={name}
        onChange={handleChange}
      />
    );
  }

  
  return (
    <>
      <span className={isActive ? style.active : undefined}>
        {tag}
        <span className="mx-2 fw-bold">{symbol}</span>
      </span>
        <button className="border-0 px-2 my-2 rounded" onClick={handleClick}>
          {isEditable ? "save" : "edit"}
        </button>
    </>
  );
}
