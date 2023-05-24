import React, { useState, useEffect } from 'react';
import Square from './Square';

function Board({ gridSize }) {
  const [board, setBoard] = useState(
    Array(gridSize)
      .fill(null)
      .map(() => Array(gridSize).fill(null))
  );
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    checkWinner();
  }, [board]);

  const handleClick = (row, col) => {
    if (board[row][col] === null && !winner) {
      const updatedBoard = [...board];
      updatedBoard[row][col] = currentPlayer;
      setBoard(updatedBoard);
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
  };

  const checkWinner = () => {
    const lines = getWinningLines();
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        board[a[0]][a[1]] &&
        board[a[0]][a[1]] === board[b[0]][b[1]] &&
        board[a[0]][a[1]] === board[c[0]][c[1]]
      ) {
        setWinner(board[a[0]][a[1]]);
        break;
      }
    }
  };

  const getWinningLines = () => {
    const lines = [];

    // Rows
    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize - 2; j++) {
        lines.push([
          [i, j],
          [i, j + 1],
          [i, j + 2],
        ]);
      }
    }

    // Columns
    for (let i = 0; i < gridSize - 2; i++) {
      for (let j = 0; j < gridSize; j++) {
        lines.push([
          [i, j],
          [i + 1, j],
          [i + 2, j],
        ]);
      }
    }

    // Diagonals
    for (let i = 0; i < gridSize - 2; i++) {
      for (let j = 0; j < gridSize - 2; j++) {
        lines.push([
          [i, j],
          [i + 1, j + 1],
          [i + 2, j + 2],
        ]);
        lines.push([
          [i, j + 2],
          [i + 1, j + 1],
          [i + 2, j],
        ]);
      }
    }

    return lines;
  };

  const resetBoard = () => {
    setBoard(
      Array(gridSize)
        .fill(null)
        .map(() => Array(gridSize).fill(null))
    );
    setCurrentPlayer('X');
    setWinner(null);
  };

  const renderSquare = (row, col) => {
    return (
      <Square
        value={board[row][col]}
        onClick={() => handleClick(row, col)}
        disabled={!!board[row][col] || winner}
        key={`${row}-${col}`}
      />
    );
  };

  const renderBoard = () => {
    return board.map((row, rowIndex) => (
      <div key={rowIndex}>
        {row.map((_, colIndex) => renderSquare(rowIndex, colIndex))}
      </div>
    ));
  };

  return (
    <div className="gameBoard">
      <div id="statusArea">
        Next player: <span>{currentPlayer}</span>
      </div>
      {winner && (
        <div id="winnerArea">
          Winner: <span>{winner}</span>
        </div>
      )}
      <button onClick={resetBoard}>Reset</button>
      <div>{renderBoard()}</div>
    </div>
  );
}

export default Board;
