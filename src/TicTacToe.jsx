// import { green, red } from "@mui/material/colors";
import { useState } from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import Button from "@mui/material/Button";

export function TicTacToe() {
  const { width, height } = useWindowSize();
  let [board, setBoard] = useState(Array(9).fill(null));
  let [isXTurn, setIsXTurn] = useState(true);
  let handClick = (index) => {
    if (!winner && board[index] === null) {
      // console.log(index);
      let boardCopy = [...board];
      boardCopy[index] = isXTurn ? "X" : "O";
      setIsXTurn(!isXTurn);
      setBoard(boardCopy);
    }
  };
  // --------------------------------------------------------------------------------
  let decideWinner = (board) => {
    let lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      let [a, b, c] = lines[i];
      if (board[a] != null && board[a] === board[b] && board[b] === board[c]) {
        console.log("Winner is", board[a]);
        return board[a];
      }
    }
    return null;
  };
  // ------------------------------------------------------------------------------
  let restartGame = () => {
    setBoard(Array(9).fill(null));
    setIsXTurn(true);
  };
  // -----------------------------------------------------------------------------------
  let winner = decideWinner(board);
  return (
    <div className="tic-tac-toe">
      {winner ? (
        <Confetti width={width} height={height} gravity={0.02} />
      ) : null}
      <h3>TicTacToe Game</h3>
      <div className="game-box-order">
        {board.map((val, index) => (
          <Game value={val} onPlayerClick={() => handClick(index)} />
        ))}
      </div>
      <Button onClick={restartGame} variant="contained">
        Restart
      </Button>
      {winner ? <h3>The winner is : {winner}</h3> : null}
    </div>
  );
}
function Game({ value, onPlayerClick }) {
  // let [value, setValue] = useState("");
  let styles = {
    color: value === "X" ? "green" : "red",
  };
  return (
    <div onClick={onPlayerClick} style={styles} className="game-box">
      {value}
    </div>
  );
}
