import React from "react";
import { createGlobalStyle } from "styled-components";
import Header from "./components/Header";
import Game from "./components/Game";
const GlobalStyles = createGlobalStyle` 
body{
  background-color: rgb(20, 189, 172);
}
`;
function App() {
  const [value, setValue] = React.useState("X");
  const [player, setPlayer] = React.useState({ person: true, Ai: false });

  const toggleValue = () => {
    setValue((prev) => (prev == "X" ? "O" : "X"));
  };
  const setSession = () => {
    console.log("hi");
    setPlayer((prevState) => ({
      ...prevState,
      person: !prevState.person,
      Ai: !prevState.Ai,
    }));
  };
  return (
    <>
      <GlobalStyles />
      <div>
        <Header player={player} setPlayer={setSession} />
        <Game value={value} toggleValue={toggleValue} aiTurn={player.Ai} />
      </div>
    </>
  );
}

export default App;
