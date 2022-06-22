import Board from "./Board";
import { board } from "./Board";
let Value = new Map([
  ["playerScore", 10],
  ["opponentScore", -10],
  ["maxValue", 1000],
  [("minValue", -1000)],
]);
//checks whether moves are left or not
const isMovesLeft = (board) => {
  for (let i = 0; i < 3; i++)
    for (let j = 0; j < 3; j++) if (board[i][j] == "") return true;
  return false;
};
//simply evalvates the three values
const isEqual3 = (a, b, c) => a === b && b === c && c !== "";

//checks the winner Element
const checkWinner = (board) => {
  console.log(board);
  let score = 0;
  // checking horizontal
  for (let i = 0; i < board.length; i++) {
    if (isEqual3(board[i][0], board[i][1], board[i][2])) {
      // addResulteSyles(i, 0, true, false, false);
      return board[i][0];
    }
  }
  //checking veritically
  for (let i = 0; i < board.length; i++) {
    if (isEqual3(board[0][i], board[1][i], board[2][i])) {
      // addResulteSyles(0, i, false, false, false);
      return board[0][i];
    }
  }
  //checking diagonal left
  if (isEqual3(board[0][0], board[1][1], board[2][2])) {
    return board[0][0];
  }
  //checking diagonal right
  if (isEqual3(board[0][2], board[1][1], board[2][0])) {
    //   addResulteSyles(0, 0, false, false, true);
    return board[0][2];
  }
  //checking game is over or not
  if (!isMovesLeft(board)) return "tie";
  return null;
};
import React from "react";

function Game({ value, toggleValue }) {
  const [winner, setWinner] = React.useState(null);
  const winValue = checkWinner(board);
  React.useEffect(() => {
    setWinner(winValue);
  }, [winValue]);
  console.log(winner);

  return (
    <>
      <Board value={value} toggleValue={toggleValue} winner={winner} />
    </>
  );
}

export default Game;
