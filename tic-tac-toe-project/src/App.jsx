import Player from "./components/player";
import GameBoard from "./components/gameBoard";
import { useState } from "react";

function App() {
  const [activePlayerSymbol, setActivePlayerSymbol] = useState("X");
  function handleChangePlayer() {
    setActivePlayerSymbol((currentActivePlayer) =>
      currentActivePlayer === "X" ? "O" : "X",
    );
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name="Player 1"
            symbol="X"
            isActive={activePlayerSymbol === "X"}
          />
          <Player
            name="Player 2"
            symbol="O"
            isActive={activePlayerSymbol === "O"}
          />
        </ol>
        <GameBoard
          onChangePlayer={handleChangePlayer}
          activeplayersymbol={activePlayerSymbol}
        />
      </div>
    </main>
  );
}

export default App;
