import React, { useState } from 'react';

const Cell = ({row,col,value,onCellClick}) => {
    const handleClick = (event) => {
        const value = event.target.value;
        if(value === '' || (value >= 1 && value <= 9)){
            onCellClick(row,col,value);
        }
        else {
            alert('Введіть число від 1 до 9')
        }
    }


    return (
        <input
            type="text"
            value={value}
            onChange={handleClick}
            maxLength={1}
            style={{
                width: '50px',
                height: '50px',
                textAlign: 'center',
                fontSize: '24px',
                cursor: 'pointer',
                borderTop: row % 3 === 0 ? '3px solid black' : '1px solid black',
                borderLeft: col % 3 === 0 ? '3px solid black' : '1px solid black',
                borderRight: (col + 1) % 3 === 0 ? '3px solid black' : '1px solid black',
                borderBottom: (row + 1) % 3 === 0 ? '3px solid black' : '1px solid black'
            }}
        />
    );
}

export default Cell;
