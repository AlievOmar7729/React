import React from 'react';

class Cell extends React.Component {
    handleClick = (event) => {
        const value = event.target.value;
        if (value === '' || (value >= 1 && value <= 9)) {
            this.props.onCellClick(this.props.row, this.props.col, value);
        } else {
            alert('Введіть число від 1 до 9');
        }
    }

    render() {
        return (
            <input
                type="text"
                value={this.props.value}
                onChange={this.handleClick}
                maxLength={1}
                style={{
                    width: '50px',
                    height: '50px',
                    textAlign: 'center',
                    fontSize: '24px',
                    cursor: 'pointer',
                    borderTop: this.props.row % 3 === 0 ? '3px solid black' : '1px solid black',
                    borderLeft: this.props.col % 3 === 0 ? '3px solid black' : '1px solid black',
                    borderRight: (this.props.col + 1) % 3 === 0 ? '3px solid black' : '1px solid black',
                    borderBottom: (this.props.row + 1) % 3 === 0 ? '3px solid black' : '1px solid black'
                }}
            />
        );
    }
}

export default Cell;
