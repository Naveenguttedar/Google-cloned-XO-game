import React from "react";
import styled from "styled-components";

function Header() {
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
          defaultChecked="checked"
        />
        player
        <input type="radio" name="player" id="Ai" value="Ai" />
        Ai
      </div>
    </HeaderContainer>
  );
}
const HeaderContainer = styled.div`
  text-align: center;
`;
export default Header;
