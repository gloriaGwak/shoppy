import React from 'react';

export default function User({user: {photoURL, displayName}}) {
    return (
        <div className=''>
            <img src={photoURL} alt={displayName} className='inline-block md:mr-2 mr-0 w-[30px] h-[30px] rounded-full' />
            <span className='hidden md:inline-block align-middle'>{displayName}</span>
        </div>
    );
}

