import { Value, isMovesLeft } from "./Game";

class Move {
  constructor() {
    let row, col;
  }
}
// Its the gamePlay of AI so player will be playing 'O' and opponent (person ) playing 'X' hence ..
let player = "O",
  opponent = "X";
function evaluate(b) {
  // Checking for Rows for X or O victory.
  for (let row = 0; row < 3; row++) {
    if (b[row][0] == b[row][1] && b[row][1] == b[row][2]) {
      if (b[row][0] == player) {
        return Value.get("playerScore");
      } else if (b[row][0] == opponent) return Value.get("opponentScore");
    }
  }

  // Checking for Columns for X or O victory.
  for (let col = 0; col < 3; col++) {
    if (b[0][col] == b[1][col] && b[1][col] == b[2][col]) {
      if (b[0][col] == player) {
        return Value.get("playerScore");
      } else if (b[0][col] == opponent) return Value.get("opponentScore");
    }
  }

  // Checking for Diagonals for X or O victory.
  if (b[0][0] == b[1][1] && b[1][1] == b[2][2]) {
    if (b[0][0] == player) {
      return Value.get("playerScore");
    } else if (b[0][0] == opponent) return Value.get("opponentScore");
  }

  if (b[0][2] == b[1][1] && b[1][1] == b[2][0]) {
    if (b[0][2] == player) {
      return Value.get("playerScore");
    } else if (b[0][2] == opponent) return Value.get("opponentScore");
  }
  return 0;
}

function minimax(board, depth, isMax) {
  let score = evaluate(board);
  if (score == Value.get("playerScore")) return score;
  if (score == Value.get("opponentScore")) return score;
  if (isMovesLeft(board) == false) return 0;
  if (isMax) {
    let best = -1000;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] == "") {
          board[i][j] = player;
          best = Math.max(best, minimax(board, depth + 1, !isMax));
          board[i][j] = "";
        }
      }
    }
    return best;
  } else {
    let best = Infinity;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] == "") {
          board[i][j] = opponent;
          best = Math.min(best, minimax(board, depth + 1, !isMax));
          board[i][j] = "";
        }
      }
    }
    return best;
  }
}
function findBestMove(board) {
  let bestVal = -Infinity;
  let bestMove = new Move();
  bestMove.row = -1;
  bestMove.col = -1;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] == "") {
        board[i][j] = player;
        let moveVal = minimax(board, 0, false);
        board[i][j] = "";
        if (moveVal > bestVal) {
          bestMove.row = i;
          bestMove.col = j;
          bestVal = moveVal;
        }
      }
    }
  }
  return bestMove;
}
const findEmptyCells = (board) => {
  let result = [];
  for (let row = 0; row < 3; row++)
    for (let col = 0; col < 3; col++) {
      if (board[row][col] == "") result.push(row * 3 + col);
    }
  return result;
};
const getBestMove = (board) => {
  let aiBoardIndex = findBestMove(board);
  let id = aiBoardIndex.row * 3 + aiBoardIndex.col;
  return "cell" + id;
};
const getRandomMove = (board) => {
  const EmptyCells = findEmptyCells(board);
  let randomIndex = Math.floor(Math.random() * EmptyCells.length);
  return "cell" + EmptyCells[randomIndex];
};
let getAiMove = (board) => {
  const randomMoveOdds = Math.floor(Math.random() * 101);
  const AiMove =
    80 > randomMoveOdds ? getBestMove(board) : getRandomMove(board);
  return AiMove;
};
const addAiValue = (board, winner, cells, setCells) => {
  let cell_Id = getAiMove(board);
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
export { addAiValue };
