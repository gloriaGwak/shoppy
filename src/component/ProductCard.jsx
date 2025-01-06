import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({product}) {
    const navigate = useNavigate();

    return (
        <li 
            onClick={() => navigate(`/products/${product.id}`, {state: {product}})}
            className='prd_item w-[calc(33.33%-0.666rem)] md:w-[calc(50%-0.25rem)] sm:w-full cursor-pointer'
        >
            <div className='overflow-hidden relative pb-[100%]'>
                <img 
                    className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full h-auto'
                    src={product.images} 
                    alt={product.name} 
                />
            </div>
            <div className='txt_area mt-2'>
                <span className='capitalize text-mint md:text-sm'>{product.category}</span>
                <h3 className='mt-1 font-medium text-xl md:text-base'>{product.name}</h3>
                <p className='mt-1 font-bold text-lg md:text-base'>
                    <span className='inline-block mr-[5px] text-base md:mr-[3px] md:text-sm'>$</span>{`${product.price}`}
                </p>
            </div>
        </li>
    );
}

