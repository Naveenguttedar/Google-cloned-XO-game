import React from "react";
import styled from "styled-components";
import Background from "./svg/Background";
import X from "./svg/val-X";
import O from "./svg/val-O";
export const board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
function Board({ value, toggleValue, winner }) {
  const [cellValue, setCellValue] = React.useState({
    cell0: "",
    cell1: "",
    cell2: "",
    cell3: "",
    cell4: "",
    cell5: "",
    cell6: "",
    cell7: "",
    cell8: "",
  });
  const addValue = (cell) => {
    if (winner == "X" || winner == "O" || winner == "tie") return;
    if (cellValue[cell.id] !== "") return;
    let row = Math.trunc(cell.id.charAt(4) / board.length);
    let col = cell.id.charAt(4) % board.length;
    board[row][col] = value;

    setCellValue((prevCellValue) => ({ ...prevCellValue, [cell.id]: value }));
    toggleValue();
  };
  const XOValue = (cell) => (cell == "X" ? <X /> : <O />);
  return (
    <>
      <BoardStyles>
        <Background />
        <Cell id="cell0" key="" onClick={(e) => addValue(e.target)}>
          {cellValue.cell0 ? XOValue(cellValue.cell0) : ""}
        </Cell>
        <Cell id="cell1" onClick={(e) => addValue(e.target)}>
          {cellValue.cell1 ? XOValue(cellValue.cell1) : ""}
        </Cell>
        <Cell id="cell2" onClick={(e) => addValue(e.target)}>
          {cellValue.cell2 ? XOValue(cellValue.cell2) : ""}
        </Cell>
        <Cell id="cell3" onClick={(e) => addValue(e.target)}>
          {cellValue.cell3 ? XOValue(cellValue.cell3) : ""}
        </Cell>
        <Cell id="cell4" onClick={(e) => addValue(e.target)}>
          {cellValue.cell4 ? XOValue(cellValue.cell4) : ""}
        </Cell>
        <Cell id="cell5" onClick={(e) => addValue(e.target)}>
          {cellValue.cell5 ? XOValue(cellValue.cell5) : ""}
        </Cell>
        <Cell id="cell6" onClick={(e) => addValue(e.target)}>
          {cellValue.cell6 ? XOValue(cellValue.cell6) : ""}
        </Cell>
        <Cell id="cell7" onClick={(e) => addValue(e.target)}>
          {cellValue.cell7 ? XOValue(cellValue.cell7) : ""}
        </Cell>
        <Cell id="cell8" onClick={(e) => addValue(e.target)}>
          {cellValue.cell8 ? XOValue(cellValue.cell8) : ""}
        </Cell>
      </BoardStyles>
    </>
  );
}
const BoardStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  font-family: "Water Brush", cursive;
  width: 306px;
  margin: 0px auto;
  margin-top: 40px;
  color: white;
  position: relative;
`;
const Cell = styled.div`
  width: 100px;
  height: 100px;
  z-index: 1;
  cursor: pointer;
  text-align: center;
  font-weight: 600;
  line-height: 100px;
  font-size: 85px;
`;
export default Board;
