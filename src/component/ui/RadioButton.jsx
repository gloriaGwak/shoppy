import React from 'react';

export default function RadioButton({name, id, label}) {
    return (
        <label 
            className='w-[calc(25%-0.75rem)] md:w-[calc(50%-1rem)] text-lg md:text-base'
            htmlFor={id}
        >
            <input 
                className='inline-block align-sub mr-2 w-5 h-5 accent-navy'
                type="radio" 
                name={name} 
                id={id} 
            />
            {label}
        </label>
    );
}