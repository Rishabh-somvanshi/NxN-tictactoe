import React from 'react';

function Square({ value, onClick }) {
  return (
    <div onClick={onClick}>
      {value}
    </div>
  );
}

export default Square;
