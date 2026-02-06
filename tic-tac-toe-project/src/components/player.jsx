import { useState } from "react";

export default function Player({ name, symbol , isActive }) {
  const [isEditing, setisEditing] = useState(false);
  const [changedPlayerName, setChangedPlayerName] = useState(name);
  function handleEdit() {
    setisEditing((editing) => !editing);
  }
  function handleChange(event) {
    console.log(event.target)
    setChangedPlayerName(event.target.value);
  }
  let playerName = <span className="player-name">{changedPlayerName}</span>;
  let btnEdit = "Edit";
  if (isEditing) {
    playerName = (
      <input type="text" required value={changedPlayerName} onChange={handleChange} />
    );
    btnEdit = "Save";
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{btnEdit}</button>
    </li>
  );
}
