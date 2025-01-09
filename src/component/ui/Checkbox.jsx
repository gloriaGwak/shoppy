import React from 'react';

export default function Checkbox({name, id, label, onChange}) {
    return (
        <label 
            className='md:w-[calc(25%-0.75rem)] w-[calc(50%-1rem)] md:text-lg text-base'
            htmlFor={id}
        >
            <input 
                className='inline-block align-middle w-5 h-5 mr-2 accent-navy'
                type="checkbox" 
                name={name} 
                id={id} 
                value={name}
                onChange={onChange}
            />
            {label}
        </label>
    );
}

