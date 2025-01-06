import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../component/ui/Button';

export default function ProductDetail() {
    const {state: {product}} = useLocation();
    const [selected, setSelected] = useState(null);

    const handleSelect = (idx) =>{
        setSelected(idx); // 클릭한 버튼의 index를 상태로 저장
    }

    return (
        <div className='content'>
            <div className="inner ">
                <div className='flex items-stretch justify-start gap-8 md:flex-wrap md:gap-4'>
                    <div className='w-[calc(50%-1rem)] md:w-full'>
                        <img 
                            className='sticky top-0 left-0 rounded-lg md:relative md:rounded'
                            src={product.images} 
                            alt={product.name} 
                        />
                    </div>
                    <div className='w-[calc(50%-1rem)] px-8 py-20 bg-linen rounded-lg md:w-full md:rounded md:p-6'>
                        <div className=''>
                            <span className='capitalize font-medium text-base md:text-sm text-mint'>{product.category}</span>
                            <h3 className='mt-2 md:mt-1 capitalize font-bold text-4xl md:text-3xl'>{product.name}</h3>
                            <p className='mt-4 md:mt-2 font-bold text-3xl md:text-2xl'>
                                <span className=''>$</span>{`${product.price}`}
                            </p>
                            <div className='mt-24 md:mt-10'>
                                <h4 className='mb-4 font-bold text-2xl md:text-xl'>Select Size</h4>
                                <ul className='flex items-center justify-start gap-2'>
                                    {product.size &&
                                        product.size.map((size,idx) => (
                                            <li 
                                                key={`size${idx}`}
                                            >
                                                <button
                                                    onClick={() => handleSelect(idx)}
                                                    className={`min-w-[45px] border rounded px-2 py-1 hover:border-mint duration-200 ${selected === idx ? 'border-mint' : ''} text-lg md:text-base`}
                                                >
                                                    {size}
                                                </button>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className='mt-10'>
                                <Button text={'Add to Cart'} onClick={''} />
                            </div>
                            <div className='mt-24 md:mt-10'>
                                <h4 className='mb-4 font-bold text-2xl md:text-xl'>Description</h4>
                                <pre className='break-keep whitespace-pre-wrap text-lg md:text-base'>{product.description}</pre>
                            </div>
                        </div>
                    </div>
                </div>
                
                
            </div>
        </div>
    );
}

