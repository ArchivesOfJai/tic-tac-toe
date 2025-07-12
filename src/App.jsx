import { useState } from "react";
import "./App.css";
import GameBoard from "./components/GameBoard";
import GameContainer from "./components/GameContainer";
import PlayerInfo from "./components/PlayerInfo";

function getCurrentPlayer(gameturn) {
  let currentPlayer = "X";

  if (gameturn.length > 0 && gameturn[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function App() {
  const [gameTurn, setGameTurn] = useState([]);
  const activePlayer=getCurrentPlayer(gameTurn);

  function handleBoardClick(rowIndex, colIndex) {

    console.log(`clicked on button ${rowIndex} ${colIndex}`);
    setGameTurn((turns) => {
      let currentPlayer = getCurrentPlayer(turns);

      let currentTurn = [
        { box: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...turns,
      ];

      return currentTurn;
    });
  }

  return (
    <>
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <h1 className="px-2 fs-1" style={{ backgroundColor: "#97B067" }}>
          TIC TAC TOE
        </h1>
        <GameContainer>
          <PlayerInfo
            currentPlayer={activePlayer}
          />
          <GameBoard onBtnSelect={handleBoardClick} turns={gameTurn} />
        </GameContainer>
      </div>
    </>
  );
}

export default App;
