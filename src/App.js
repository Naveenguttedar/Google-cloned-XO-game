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
  const toggleValue = () => {
    setValue((prev) => (prev == "X" ? "O" : "X"));
  };
  return (
    <>
      <GlobalStyles />
      <div>
        <Header />
        <Game value={value} toggleValue={toggleValue} />
      </div>
    </>
  );
}

export default App;
