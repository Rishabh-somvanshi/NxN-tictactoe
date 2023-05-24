import React, { useState } from 'react';
import Board from './Board';

function Game() {
  const [gridSize, setGridSize] = useState(3);

  const handleSizeChange = (event) => {
    const newSize = parseInt(event.target.value, 10);
    if (newSize >= 3 && newSize <= 10) {
      setGridSize(newSize);
    }
  };

  const renderGame = (gridSize) => {
    return (
      <div className="game">
        <div className="game-board">
          <Board gridSize={gridSize} />
        </div>
        <div className="grid-size">
          <label htmlFor="gridSize">Grid Size:</label>
          <select id="gridSize" value={gridSize} onChange={handleSizeChange}>
            <option value={3}>3x3</option>
            <option value={4}>4x4</option>
            <option value={5}>5x5</option>
            {/* Add more options as needed */}
          </select>
        </div>
      </div>
    );
  };

  return renderGame(gridSize);
}

export default Game;
