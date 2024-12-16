import React, {useState} from 'react';
import Cell from './Cell.jsx';

const SudokuBoard = ({size}) => {
        const [board,setBoard] = useState(
            Array.from({length:size}, () => Array(size).fill(''))
        );
        const handleCellClick = (row,col,value) =>{
            const newBoard = [...board];
            newBoard[row][col] = value;
            setBoard(newBoard);
        }

        return (
            <table style={{ borderCollapse: 'collapse' }}>
                <tbody>
                {board.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {row.map((cellValue, colIndex) => (
                            <Cell
                                key={`${rowIndex}-${colIndex}`}
                                value={cellValue}
                                row={rowIndex}
                                col={colIndex}
                                onCellClick={handleCellClick}
                            />
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        );
}

export default SudokuBoard;
