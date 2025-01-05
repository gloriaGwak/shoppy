import React from 'react';
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Loading() {
    return (
        <div className='fixed top-0 left-0 z-10 w-full h-full bg-black bg-opacity-50'>
            <AiOutlineLoading3Quarters 
                className='fixed top-[50%] left-[50%] w-[30px] h-[30px] m-[-15px] text-linen animate-spin origin-center'
            />
        </div>
    );
}

