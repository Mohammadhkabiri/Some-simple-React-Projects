import { useState, useRef } from "react";

export default function Player() {
  const PlayerName = useRef();
  const [entredPlayerName, setentredPlayerName] = useState("");
  function handleClick() {
    setentredPlayerName(PlayerName.current.value);
    PlayerName.current.value = "";
  }
  function handleEnter(event) {
    if (event.key === "Enter") {
      handleClick();
    }
  }
  return (
    <section id="player">
      <h2>Welcome {entredPlayerName ? entredPlayerName : "Unknown"}</h2>
      <p>
        <input type="text" ref={PlayerName} onKeyDown={handleEnter} required />
        <button  onClick={handleClick}>
          Set Name
        </button>
      </p>
    </section>
  );
}
