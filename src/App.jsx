import "./App.css";
import GameBoard from "./components/GameBoard";
import GameContainer from "./components/GameContainer";
import PlayerInfo from "./components/PlayerInfo";
function App() {
  return (
    <>
      
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <h1 className="px-2 fs-1" style={{backgroundColor:'#97B067'}}>TIC TAC TOE</h1>
        <GameContainer>
          <PlayerInfo/>
          <GameBoard/>
        </GameContainer>
      </div>
    </>
  );
}

export default App;
