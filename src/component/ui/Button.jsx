import React from 'react';

export default function Button({text , onClick}) {
    return (
        <button 
            className='block w-full py-3 px-5 bg-navy hover:bg-mint duration-200 rounded-md'
            type='button' 
            onClick={onClick}
        >
            <span className='md:text-lg text-base text-lightGray'>{text}</span>
        </button>
    );
}

