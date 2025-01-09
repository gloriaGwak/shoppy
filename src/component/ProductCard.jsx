import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({product, product:{id, images, name, category, price}}) {
    const navigate = useNavigate();

    return (
        <li 
            onClick={() => navigate(`/products/${id}`, {state: {product}})}
            className='prd_item cursor-pointer
                lg:w-[calc(33.33%-0.666rem)] 
                md:w-[calc(50%-0.5rem)] 
                w-full
            '
        >
            <div className='overflow-hidden relative pb-[100%] rounded'>
                <img 
                    className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full h-auto'
                    src={images} 
                    alt={name} 
                />
            </div>
            <div className='txt_area mt-2'>
                <span className='capitalize text-mint text-sm'>{category}</span>
                <h3 className='font-medium md:text-xl text-lg'>{name}</h3>
                <p className='md:mt-2 font-bold md:text-xl text-lg'>${`${price}`}</p>
            </div>
        </li>
    );
}

