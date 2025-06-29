import React, { useState } from "react";

export default function Player({ symbol, name }) {
  const [isEditable, setIsEditable] = useState(false);
  const [playerName,setplayerName] = useState('');
  function handleClick() {
    setIsEditable((editable) => !editable);
  }
  

  function handleChange(e) {
    setplayerName(e.target.value);
  }

  let tag = <span className="px-3 text-white w-75">{playerName ? playerName : name}</span>;
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
      {tag}
      <span className="mx-2 fw-bold">{symbol}</span>
      <button className="border-0 px-2 my-2 rounded" onClick={handleClick}>
        {isEditable ? "save" : "edit"}
      </button>
    </>
  );
}
