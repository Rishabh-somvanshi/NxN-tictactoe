import React from 'react';

function Square({ value, onClick }) {
  return (
    <div onClick={onClick}>
      <input type="text" value={value}>
      {value}
      </input>
    </div>
  );
}

export default Square;
