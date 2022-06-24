import React from "react";
import X from "./svg/val-X";
import O from "./svg/val-O";
import Background from "./svg/Background";
import "./Board.scss";
export const cellObj = {
  cell0: "",
  cell1: "",
  cell2: "",
  cell3: "",
  cell4: "",
  cell5: "",
  cell6: "",
  cell7: "",
  cell8: "",
};
function Board({ cells, addValue }) {
  const XOValue = (cell) => (cell == "X" ? <X /> : <O />);
  return (
    <>
      <div className="game_container">
        <Background />
        <div
          id="cell0"
          className="cell "
          onClick={(e) => addValue(e.target.id)}
        >
          {cells.cell0 ? XOValue(cells.cell0) : ""}
        </div>
        <div
          id="cell1"
          className="cell "
          onClick={(e) => addValue(e.target.id)}
        >
          {cells.cell1 ? XOValue(cells.cell1) : ""}
        </div>
        <div
          id="cell2"
          className="cell "
          onClick={(e) => addValue(e.target.id)}
        >
          {cells.cell2 ? XOValue(cells.cell2) : ""}
        </div>
        <div id="cell3" className="cell" onClick={(e) => addValue(e.target.id)}>
          {cells.cell3 ? XOValue(cells.cell3) : ""}
        </div>
        <div id="cell4" className="cell" onClick={(e) => addValue(e.target.id)}>
          {cells.cell4 ? XOValue(cells.cell4) : ""}
        </div>
        <div id="cell5" className="cell" onClick={(e) => addValue(e.target.id)}>
          {cells.cell5 ? XOValue(cells.cell5) : ""}
        </div>
        <div id="cell6" className="cell" onClick={(e) => addValue(e.target.id)}>
          {cells.cell6 ? XOValue(cells.cell6) : ""}
        </div>
        <div id="cell7" className="cell" onClick={(e) => addValue(e.target.id)}>
          {cells.cell7 ? XOValue(cells.cell7) : ""}
        </div>
        <div id="cell8" className="cell" onClick={(e) => addValue(e.target.id)}>
          {cells.cell8 ? XOValue(cells.cell8) : ""}
        </div>
      </div>
    </>
  );
}

export default Board;
