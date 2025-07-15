import React, { useState } from "react";
import style from "./Player.module.css";

export default function Player({ symbol, name, isActive, onNameChange }) {
  const [isEditable, setIsEditable] = useState(false);

  function handleClick() {
    setIsEditable((editable) => !editable);
  }

  function handleChange(e) {
    onNameChange(symbol, e.target.value);
  }

  let tag = <span className="px-3 fs-6 text-white w-75">{name}</span>;

  if (isEditable) {
    tag = (
      <input
        type="text"
        className="w-75 fs-6 rounded border-0"
        value={name}
        defaultValue={name}
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
