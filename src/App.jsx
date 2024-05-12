import React, { useState } from 'react'
import Board from './Board'

const App = () => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove ] = useState(0);
    const currentGame = history[currentMove];
    const xIsNext = currentMove % 2 === 0;
    const hendlePlay = (nextSquare) => {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquare];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    };

    const jumpTo = (i) => {
        setCurrentMove(i);
    };

    const moves = history.map((mov, index) => {
            const desc = index? `Go to move #${index + 1}` :  'Go to game start';
            return (
                <li key={mov}>
                    <button onClick={() => jumpTo(index)}>{desc}</button>
                </li>
            )
        });




    return (
        <div className="game">
            <div className="game-board">
                <Board xIsNext={xIsNext} current={currentGame} handleClick={hendlePlay} />
            </div>
            <div className="game-info">
                <ol>{moves}</ol>
            </div>
        </div>
    )
}



export default App