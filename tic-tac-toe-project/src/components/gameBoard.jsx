import { useState } from "react";
import initialGameBoard from "../../initialGameboard.js"


export default function GameBoard({onChangePlayer , activeplayersymbol}) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);
  function handleClick(rowIndex , colIndex) {
    setGameBoard((prevGameBoard)=>{
        const updatedBoard =[...prevGameBoard.map(innerArray =>[...innerArray])]
        updatedBoard[rowIndex][colIndex] = activeplayersymbol;
        return updatedBoard;
    });
    onChangePlayer();
  }
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={()=> handleClick(rowIndex,colIndex)} disabled= {playerSymbol!==null}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
} 

