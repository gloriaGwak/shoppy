import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

export default function CartItem({product, product:{id, category, images, name, price, size, quantity}}) {
    const navigate = useNavigate();
    const totalPrice = quantity * price;
    // console.log(product)
    return (
        <li 
            // onClick={() => navigate(`/products/${id}`, {state: {product}})}
            className='
                flex gap-4 pb-4 w-[calc(50%-0.5rem)] flex-col justify-between
                md:flex-row
                md:w-full
                md:gap-8
                md:flex-nowrap
                md:p-4
                md:border-b-[1px]
                last:border-b-0
            '
        >   
            <div 
                // onClick={() => navigate(`/products/${id}`, {state: {product}})}
                className='
                    cursor-pointer flex md:gap-8 md:w-[60%] md:flex-nowrap
                    flex-wrap
                    items-center
                    gap-4 
                    w-full
            '>
                <div className='
                    overflow-hidden md:w-[100px] rounded
                    w-full
                '>
                    <img src={images} alt={name} />
                </div>
                <div className='md:w-[calc(100%-100px-1rem)] w-full text-sm'>
                    <span className='capitalize text-mint'>{category}</span>
                    <h3 className='font-medium lg:text-xl md:text-lg text-base '>{name}</h3>
                    <span className='block mt-2'>Size: {size}</span>
                    <p className='mt-1 font-bold'>${`${price}`}</p>
                </div>
            </div>
            <div className='
                flex items-center justify-center md:gap-2 md:w-[20%]
                gap-4
                sm:w-full
            '>
                <button className='
                    w-8 h-8
                    md:w-10 md:w-10
                '>
                    <CiCirclePlus className='w-full h-full'/>
                </button>
                <span className='font-bold md:text-xl text-lg'>{quantity}</span>
                <button className='
                    w-8 h-8
                    md:w-10 md:w-10
                '>
                    <CiCircleMinus className='w-full h-full'/>
                </button>
            </div>
            <div className='md:flex items-center justify-center md:w-[20%] hidden'>
                <span className='font-bold lg:text-xl text-lg'>${totalPrice}</span>
            </div>
        </li>
    );
}

