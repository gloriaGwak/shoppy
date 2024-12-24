import React, { useState } from 'react';

export default function TextInput({type, id, placeholder, label, onChange}) {
    return (
        <div className='w-full'>
            <label 
                htmlFor={id}
                className='block mb-2 md:mb-1 font-medium text-lg md:text-base'
            >{label}</label>
            <input 
                type={type} 
                id={id} 
                onChange={onChange}
                placeholder={placeholder} 
                className='w-full h-10 md:h-9 px-4 rounded border '
            />
        </div>
    );
}

