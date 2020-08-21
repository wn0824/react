import React, { useState } from 'react';

const Say = () => {
    const [message, setMessage] = useState('');
    const onClickEnter = () => setMessage('Hi');
    const onClickLeave = () => setMessage('Bye');

    const [color, setColor] = useState('black');

    return (
        <div>
            <button onClick = {onClickEnter}>Hi</button>
            <button onClick = {onClickLeave}>Bye</button>
            <h1 style = {{ color }}>{message}</h1>
            <button style = {{ color: 'red' }} onClick = {() => setColor('red')}>red</button>
            <button style = {{ color: 'blue' }} onClick = {() => setColor('blue')}>blue</button>
            <button style = {{ color: 'black' }} onClick = {() => setColor('black')}>black</button>
        </div>
    );
};

export default Say;