import React, {useState} from 'react'
import Square from './components/Square';


const Board = ({current, handleClick, xIsNext}) => {
  const winner = calculateWiner(current);
  
  const sqareIsClicked = (i) => {
    if(calculateWiner(current) || current[i]) {
      return;
    }
    const nextSquares = current.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    handleClick(nextSquares);
  }


  let status = '';
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${xIsNext? 'X' : 'O'}`;
  }


  return (
    <div className='app'>
      <h1 className="status">{status}</h1>
      <div className="board-row">
        <Square value={current[0]} onSquareClick={() => sqareIsClicked(0)} />
        <Square value={current[1]} onSquareClick={() => sqareIsClicked(1)} />
        <Square value={current[2]} onSquareClick={() => sqareIsClicked(2)} />
      </div>
      <div className="board-row">
        <Square value={current[3]} onSquareClick={() => sqareIsClicked(3)} />
        <Square value={current[4]} onSquareClick={() => sqareIsClicked(4)} />
        <Square value={current[5]} onSquareClick={() => sqareIsClicked(5)} />
      </div>
      <div className="board-row">
        <Square value={current[6]} onSquareClick={() => sqareIsClicked(6)} />
        <Square value={current[7]} onSquareClick={() => sqareIsClicked(7)} />
        <Square value={current[8]} onSquareClick={() => sqareIsClicked(8)} />
      </div>
    </div>
  )
};

function calculateWiner(squares) {
    const lines = [
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
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
  }

export default Board;