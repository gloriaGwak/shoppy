import React from 'react';

export default function User({user: {photoURL, displayName}}) {
    return (
        <div className=''>
            <img src={photoURL} alt={displayName} className='inline-block mr-1 sm:mr-0 w-[30px] h-[30px] rounded-full' />
            <span className='inline-block align-middle sm:hidden'>{displayName}</span>
        </div>
    );
}

