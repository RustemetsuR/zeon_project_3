import React, { useEffect, useState } from 'react';
import "./App.css";
import Tile from './components/Tile/Tile';

const App = () => {

    const [board, setBoard] = useState([
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ]);

    useEffect(() => {
        for(let i = 0; i < 2; i++){
            spawnNumber();
        }
    }, []);

    const spawnNumber = () => {
        const newBoard = [...board];
        while(true){
            const row = Math.floor(Math.random() * 4);
            const col = Math.floor(Math.random() * 4);
            if(newBoard[row][col] == 0){
                const chanceOfNum = Math.floor(Math.random() * 10);
                if(chanceOfNum == 0){
                    newBoard[row][col] = 4;
                }else{
                    newBoard[row][col] = 2;
                }
                setBoard(newBoard);
                break;
            }
        }
    }

    return (
        <div className="App">
            <div className="board">
                {board.map((boardElement, boardIndex) => {
                    return <div key={boardIndex + "" + boardElement} className="row-block">
                        {boardElement.map((el, index) => {
                            return <Tile key={index + "" + boardIndex}
                                index={index}
                                number={el}
                            />
                        })}
                    </div>
                })}
            </div>
        </div>
    );
};


export default App;