import React from 'react';
import Cell from './Cell.jsx';

class SudokuBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            board: Array.from({ length: props.size }, () => Array(props.size).fill(''))
        };
    }

    handleCellClick = (row, col, value) => {
        const newBoard = this.state.board.slice();
        newBoard[row][col] = value;
        this.setState({ board: newBoard });
    }

    render() {
        return (
            <table style={{ borderCollapse: 'collapse' }}>
                <tbody>
                {this.state.board.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {row.map((cellValue, colIndex) => (
                            <Cell
                                key={`${rowIndex}-${colIndex}`}
                                value={cellValue}
                                row={rowIndex}
                                col={colIndex}
                                onCellClick={this.handleCellClick}
                            />
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        );
    }
}

export default SudokuBoard;
