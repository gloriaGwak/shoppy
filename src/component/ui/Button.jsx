import React from 'react';

export default function Button({text , onClick}) {
    return (
        <button onClick={onClick}>
            <span>{text}</span>
        </button>
    );
}

