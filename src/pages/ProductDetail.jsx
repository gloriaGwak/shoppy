import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../component/ui/Button';
import { useAuthContext } from '../context/AuthContext';
import { addOrUpdateToCart } from '../api/firebase';

export default function ProductDetail() {
    const {uid} = useAuthContext();
    const navigate = useNavigate();
    const {state: {
            product,
            product: {id, images, name, category, price, size, description}
        }
    } = useLocation();
    const [selected, setSelected] = useState(0);
    
    const handleSelect = (idx) => {
        setSelected(idx); // 클릭한 버튼의 index를 상태로 저장
    }

    const handleAddCart = () => {
        if (!size[selected]) {
            return;
        }    
        const selectedSize = size[selected];
        const product = {id, category, images, name, price, size:selectedSize, quantity: 1};

        // navigate(`/carts`, {state: {product}});
        addOrUpdateToCart(uid,product)
        // .then(() => {
            // toast.update(tt, { 
            //     render: "Product added successfully!", 
            //     type: "success", 
            //     isLoading: false, 
            //     autoClose: 3000 
            // });
            // setSuccess(true);

            // setTimeout(() => {
            //     setSuccess(false);
            //     window.location.reload();
            // }, 3000);
        // })
        // navigate(`/carts`);
    }

    return (
        <main>
            <div className='content'>
                <div className="inner ">
                    <div className='
                        flex items-stretch justify-start md:gap-8 flex-wrap gap-4
                    '>
                        <div className='md:w-[calc(50%-1rem)] w-full'>
                            <img 
                                className='md:sticky top-0 left-0 md:rounded-lg relative rounded'
                                src={images} 
                                alt={name} 
                            />
                        </div>
                        <div className='md:w-[calc(50%-1rem)] md:px-8 md:py-10 bg-linen md:rounded-lg w-full rounded p-6'>
                            <div className=''>
                                <span className='capitalize font-medium md:text-base text-sm text-mint'>{category}</span>
                                <h3 className='md:mt-2 mt-1 capitalize font-bold md:text-4xl text-3xl'>{name}</h3>
                                <p className='md:mt-4 mt-2 font-bold md:text-3xl text-2xl'>${`${price}`}</p>
                                <div className='md:mt-24 mt-10'>
                                    <h4 className='mb-4 font-bold md:text-2xl text-xl'>Select Size</h4>
                                    <ul className='flex items-center justify-start gap-2'>
                                        {size &&
                                            size.map((size,idx) => (
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
                                    <Button text={'Add to Cart'} onClick={handleAddCart} />
                                </div>
                                <div className='md:mt-24 mt-10'>
                                    <h4 className='mb-4 font-bold md:text-2xl text-xl'>Description</h4>
                                    <pre className='break-keep whitespace-pre-wrap md:text-lg text-base'>{description}</pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

