import React, { useEffect } from "react";
import Board, { cellObj } from "./Board";
import { getAiMove } from "./Ai.js";
import "./Game.scss";

export let Value = new Map([
  ["playerScore", 10],
  ["opponentScore", -10],
  ["maxValue", 1000],
  [("minValue", -1000)],
]);
export const board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
//checks whether moves are left or not
export const isMovesLeft = (board) => {
  for (let i = 0; i < 3; i++)
    for (let j = 0; j < 3; j++) if (board[i][j] == "") return true;
  return false;
};
//simply evalvates the three values
const isEqual3 = (a, b, c) => a === b && b === c && c !== "";

//checks the winner Element
export const checkWinner = (board) => {
  // checking horizontal
  for (let i = 0; i < board.length; i++) {
    if (isEqual3(board[i][0], board[i][1], board[i][2])) {
      addResulteSyles(i, 0, true, false, false);
      return board[i][0];
    }
  }
  //checking veritically
  for (let i = 0; i < board.length; i++) {
    if (isEqual3(board[0][i], board[1][i], board[2][i])) {
      addResulteSyles(0, i, false, false, false);
      return board[0][i];
    }
  }
  //checking diagonal left
  if (isEqual3(board[0][0], board[1][1], board[2][2])) {
    addResulteSyles(0, 0, false, true, false);
    return board[0][0];
  }
  //checking diagonal right
  if (isEqual3(board[0][2], board[1][1], board[2][0])) {
    addResulteSyles(0, 0, false, false, true);
    return board[0][2];
  }
  //checking game is over or not
  if (!isMovesLeft(board)) return "tie";
  return null;
};
//adding styles to winner elements
let addResulteSyles = (
  row,
  col,
  isHorizontal,
  isDaigonalLeft,
  isDaigonalRightl
) => {
  for (
    let i = 0;
    i < board.length && !isDaigonalRightl && !isDaigonalLeft;
    i++
  ) {
    let id = isHorizontal ? row * board.length + i : i * board.length + col;
    let cell = document.getElementById("cell" + id);
    cell.classList.add("winner");
  }
  if (isDaigonalLeft) {
    for (let i = 0; i <= 9; i++) {
      let id = i;
      i += 3;
      let cell = document.getElementById("cell" + id);
      cell.classList.add("winner");
    }
    return;
  }
  if (isDaigonalRightl) {
    for (let i = 2; i <= 7; ) {
      let id = i;
      i += 2;
      let cell = document.getElementById("cell" + id);
      cell.classList.add("winner");
    }
  }
};
export let cellContainer = "";
function Game({ value, toggleValue, aiTurn }) {
  const [cells, setCells] = React.useState({ ...cellObj });
  const winner = checkWinner(board);

  const addValue = (cell_Id) => {
    if (winner == "X" || winner == "O" || winner == "tie") return;
    if (cells[cell_Id] !== "") return;
    let row = Math.trunc(cell_Id.charAt(4) / board.length);
    let col = cell_Id.charAt(4) % board.length;
    board[row][col] = aiTurn ? "X" : value;
    setCells((prevCellValue) => ({
      ...prevCellValue,
      [cell_Id]: aiTurn ? "X" : value,
    }));
    if (aiTurn) {
      let aiMove = getAiMove(board);
      addAiValue(aiMove);
    } else toggleValue();
  };
  const addAiValue = (cell_Id) => {
    if (winner == "X" || winner == "O" || winner == "tie") return;
    if (cells[cell_Id] !== "") return;
    let row = Math.trunc(cell_Id.charAt(4) / board.length);
    let col = cell_Id.charAt(4) % board.length;
    board[row][col] = "O";
    setCells((prevCellValue) => ({
      ...prevCellValue,
      [cell_Id]: "O",
    }));
  };
  return (
    <>
      <Board cells={cells} addValue={addValue} />
      <button
        className="game--restart"
        id="gameRestart"
        onClick={() => location.reload()}
      >
        Restart Game
      </button>
    </>
  );
}

export default Game;
