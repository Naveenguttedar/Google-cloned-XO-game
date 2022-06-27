import React from "react";
import styled from "styled-components";

const storedSession = sessionStorage.getItem("player");
const prevPlayers = JSON.parse(storedSession);
export const isAiTurnOn = prevPlayers === null ? false : prevPlayers.Ai;
function Header() {
  const setPlayer = () => {
    sessionStorage.setItem(
      "player",
      JSON.stringify({ person: true, Ai: false })
    );
    location.reload();
  };
  const setAI = () => {
    sessionStorage.setItem(
      "player",
      JSON.stringify({ person: false, Ai: true })
    );
    location.reload();
  };
  return (
    <HeaderContainer>
      <h1 className="game--title">Tic Tac Toe</h1>
      <div className="game--player">
        <label htmlFor="player">Play with</label>
        <input
          type="radio"
          name="player"
          id="player"
          value="player"
          checked={prevPlayers === null ? true : prevPlayers.person}
          onChange={() => setPlayer()}
        />
        player
        <input
          type="radio"
          name="player"
          id="Ai"
          value="Ai"
          checked={prevPlayers === null ? false : prevPlayers.Ai}
          onChange={() => setAI()}
        />
        Ai
      </div>
    </HeaderContainer>
  );
}
const HeaderContainer = styled.div`
  text-align: center;
  font-family: "Water Brush", cursive;
  h1 {
    color: rgb(84, 84, 84);
    letter-spacing: 11px;
  }
  div {
    color: rgb(84, 84, 84);
  }
`;
export default Header;
