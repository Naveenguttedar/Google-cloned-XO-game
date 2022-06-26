import React from "react";
import styled from "styled-components";

function Header({ player, setPlayer }) {
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
          checked={player.person}
          onChange={() => setPlayer()}
        />
        player
        <input
          type="radio"
          name="player"
          id="Ai"
          value="Ai"
          checked={player.Ai}
          onChange={() => setPlayer()}
        />
        Ai
      </div>
    </HeaderContainer>
  );
}
const HeaderContainer = styled.div`
  text-align: center;
`;
export default Header;
