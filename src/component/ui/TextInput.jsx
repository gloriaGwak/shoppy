import React from 'react';

export default function TextInput({type, name, placeholder, label, onChange, reqired}) {
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
                reqired={reqired}
                className='w-full h-12 md:h-10 px-4 rounded border '
            />
        </div>
    );
}

