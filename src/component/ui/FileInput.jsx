import React from 'react';

export default function FileInput({id, value}) {
    return (
        <div className=' w-full'>
            <label 
                className='block mb-2 md:mb-1 font-medium text-lg md:text-base'
                htmlFor='prdImage'
            >
                Image
            </label>
            <div className="relative">
                <input 
                    type='file' 
                    id={id} 
                    placeholder='' 
                    className='absolute top-0 left-0 w-full h-10 opacity-0
                '/>
                <input 
                    type='text' 
                    id={`id`} 
                    placeholder={value} 
                    className=' w-full h-10 md:h-9 px-4 rounded border ' 
                    disabled
                />
            </div>
        </div>
    );
}

