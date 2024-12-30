import React, { useState } from 'react';

export default function TextInput({type, name, placeholder, label, onChange}) {
    return (
        <div className='w-full'>
            <label 
                htmlFor={name}
                className='block mb-2 md:mb-1 font-medium text-lg md:text-base'
            >{label}</label>
            <input 
                type={type} 
                name={name} 
                id={name}
                placeholder={placeholder} 
                onChange={onChange}
                className='w-full h-10 md:h-9 px-4 rounded border '
            />
        </div>
    );
}

