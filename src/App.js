import React from "react";
import "./App.css";
import Header from "./components/Header";
import Game from "./components/Game";
function App() {
  const [value, setValue] = React.useState("X");
  const toggleValue = () => {
    setValue((prev) => (prev == "X" ? "O" : "X"));
  };
  const [gameOver, setGameOver] = React.useState(false);
  const setGameIsOver = () => {
    setGameOver(false);
  };
  return (
    <div>
      <Header />
      <Game
        value={value}
        toggleValue={toggleValue}
        isGameOver={gameOver}
        addGameOver={setGameIsOver}
      />
    </div>
  );
}

export default App;
