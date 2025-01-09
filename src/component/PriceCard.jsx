import React from 'react';

export default function PriceCard({text, price}) {
    return (
        <dl className='last:border-b-0 border-b-[1px] p-2 px-4'>
            <dt className='inline-block w-[30%] text-mint font-medium text-sm md:text-base align-middle'>{text}</dt>
            <dd className='inline-block w-[70%] font-medium text-2xl md:text-3xl text-right align-middle'><span className='text-base md:text-lg'>$</span>{price}</dd>
        </dl>
    );
}

