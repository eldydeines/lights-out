import React, { useState } from "react";
import Cell from "./Cell";
import "./Board.css";

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

function Board({ nrows = 3, ncols = 3, chanceLightStartsOn }) {
  const [board, setBoard] = useState(createBoard());

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */
  function createBoard() {
    let initialBoard = Array.from({ length: nrows });
    // TODO: create array-of-arrays of true/false values

    for (let row in initialBoard) {
      initialBoard[row] = [];
      for (let x = 0; x < ncols; x++)
        initialBoard[row].push(Math.random() > 0.5 ? true : false);
    }

    return initialBoard;
  }

  function hasWon() {
    // TODO: check the board in state to determine whether the player has won.
    return board.every(row => row.every(c => !c));
  }

  function flipCellsAround(coord) {
    setBoard(oldBoard => {

      const [y, x] = coord.split("-").map(Number);

      const flipCell = (y, x, boardCopy) => {
        // if this coord is actually on board, flip it

        if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
          boardCopy[y][x] = !boardCopy[y][x];
        }
      };

      // TODO: Make a (deep) copy of the oldBoard
      const newBoard = oldBoard.slice();

      // TODO: in the copy, flip this cell and the cells around it
      // cell itself
      flipCell(y, x, newBoard);
      // topCell
      flipCell(y - 1, x, newBoard);
      // bottomCell
      flipCell(y + 1, x, newBoard);
      // rightCell
      flipCell(y, x + 1, newBoard);
      // leftCell
      flipCell(y, x - 1, newBoard);

      // TODO: return the copy
      return newBoard;

    });
  }


  // if the game is won, just show a winning msg & render nothing else
  if (hasWon()) {
    return (<div>You've Won!</div>)
  }

  return (
    // make table board
    < table className="Board" >
      <tbody>
        {board.map((row, idxR) =>
          <tr key={idxR}>
            {row.map((col, idxC) =>
              <Cell key={`${idxR}-${idxC}`} flipCellsAroundMe={() => flipCellsAround(`${idxR}-${idxC}`)} isLit={col} />)}
          </tr>
        )}
      </tbody>
    </table >
  )

}

export default Board;
