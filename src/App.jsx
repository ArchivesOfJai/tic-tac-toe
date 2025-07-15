import { useState } from "react";
import "./App.css";
import GameBoard from "./components/GameBoard";
import GameContainer from "./components/GameContainer";
import PlayerInfo from "./components/PlayerInfo";
import Log from "./components/Log";
import WinnerBoard from "./components/WinnerBoard";
import { WINNING_COMBINATIONS } from "./winning-combinations";

let PLAYERS = {
  X: "Player 1",
  O: "Player 2",
};

const INITIALBOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function getCurrentPlayer(gameturn) {
  let currentPlayer = "X";

  if (gameturn.length > 0 && gameturn[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function App() {
  const [gameTurn, setGameTurn] = useState([]);
  const [players, setPlayers] = useState(PLAYERS);
  const activePlayer = getCurrentPlayer(gameTurn);

  let winner;
  let gameBoard = [...INITIALBOARD.map((array) => [...array])];

  for (const turn of gameTurn) {
    let { box, player } = turn;
    let { row, col } = box;
    gameBoard[row][col] = player;
  }

  function updatePlayer(symbol, value) {
    setPlayers({
      ...players,
      [symbol]: value,
    });
  }

  function handleReset() {
    setGameTurn([]);
  }

  function handleBoardClick(rowIndex, colIndex) {
    setGameTurn((turns) => {
      let currentPlayer = getCurrentPlayer(turns);

      let currentTurn = [
        { box: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...turns,
      ];

      return currentTurn;
    });
  }

  for (const combination of WINNING_COMBINATIONS) {
    let firstSymbol = gameBoard[combination[0].row][combination[0].col];
    let secondSymbol = gameBoard[combination[1].row][combination[1].col];
    let thirdSymbol = gameBoard[combination[2].row][combination[2].col];

    if (
      firstSymbol &&
      firstSymbol === secondSymbol &&
      firstSymbol === thirdSymbol
    ) {
      winner = players[firstSymbol];
    }
  }

  return (
    <div className="position-relative">
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
            participants={players}
            updatePlayerName={updatePlayer}
          />
          <GameBoard onBtnSelect={handleBoardClick} board={gameBoard} />
        </GameContainer>
        <Log game={gameTurn} />
      </div>
      {(winner || gameTurn.length === 9) && <WinnerBoard onClickReset={handleReset} playerWon={winner} />}
    </div>
  );
}

export default App;
