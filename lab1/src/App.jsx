import React from 'react';
import SudokuBoard from "./components/SudokuBoard.jsx";

const App = () => {
        return (
            <div>
                <h1>Судоку</h1>
                <SudokuBoard size={9} />
            </div>
        );
}
export default App;
