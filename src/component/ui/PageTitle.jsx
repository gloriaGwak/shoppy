import React from 'react';

export default function PageTitle({text}) {
    return (
        <h2 className='
            md:mb-12 md:text-3xl font-bold
            mb-8 text-2xl
        '>{text}</h2>
    );
}

