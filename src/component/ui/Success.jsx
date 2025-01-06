import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

export default function Success({state}) {
    console.log("호출",state)
    if(state){
        toast.success('🙌Added successfully!', {
            position: 'top-center',
        });
    }
    
    return (
        // <ToastContainer />
        <ToastContainer />
        // <div className='fixed top-[40px] left-[50%] z-10 w-auto p-4 bg-mint rounded shadow-2xl translate-x-[-50%] sm:w-[calc(100%-30px)] sm:py-2'>
        //     <div className="flex items-center justify-center gap-4 w-full">
        //         <p className='text-xl md:text-lg text-linen'>🙌Added successfully!</p>
        //     </div>
        // </div>
    );
}

