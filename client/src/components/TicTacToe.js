import React, { useState } from 'react';

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [isX, setIsX] = useState(true);

  const handleClick = (index) => {
    if (board[index] !== "") return;
    const newBoard = [...board];
    newBoard[index] = isX ? "X" : "O";
    setBoard(newBoard);
    setIsX(!isX);
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 50px)' }}>
      {board.map((val, i) => (
        <button
          key={i}
          onClick={() => handleClick(i)}
          style={{ width: 50, height: 50, fontSize: 24 }}
        >
          {val}
        </button>
      ))}
    </div>
  );
}

export default TicTacToe;
