import React from 'react';
import SudokuBoard from "./components/SudokuBoard.jsx";

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Судоку</h1>
                <SudokuBoard size={9} />
            </div>
        );
    }
}

export default App;
