import React from 'react';

export default function Checkbox({name,id,label}) {
    return (
        <label 
            className='w-[calc(25%-0.75rem)] md:w-[calc(50%-1rem)] text-lg md:text-base'
            htmlFor={id}
        >
            <input 
                className='inline-block align-middle w-5 h-5 mr-2 accent-navy'
                type="checkbox" 
                name={name} 
                id={id} 
            />
            {label}
        </label>
    );
}

