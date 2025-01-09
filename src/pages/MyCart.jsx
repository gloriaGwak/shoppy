import React, { useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { getCarts } from '../api/firebase';
import { useQuery } from '@tanstack/react-query';
import CartItem from '../component/CartItem';
import PriceCard from '../component/PriceCard';
import { GoPlus } from "react-icons/go";
import { PiEqualsLight } from "react-icons/pi";
import PageTitle from '../component/ui/PageTitle';
import Button from '../component/ui/Button';

const shipping = 13;
export default function MyCart() {
    const {uid} = useAuthContext();
    const { isLoading, error, data: products } = useQuery({
        queryKey: ['carts'],
        queryFn: () => getCarts(uid),
        // staleTime: 1000 * 60 *5
    });
    const hasProducts = products && products.length > 0;
    const totalPrice = products && products.reduce(
        (prev, current) => prev + parseInt(current.price) * current.quantity, 0
    );
    
    useEffect(() => {
        // console.log("Updated product:", product);
    }, []);

    return (
        <main>
            <div className='content'>
                <div className="inner">
                    <PageTitle text={'My Cart'} />
                    {!hasProducts && <p>empty!</p>}
                    {hasProducts && 
                        <>
                            <ul className='md:border-y-[1px] md:block flex flex-wrap gap-4'>
                                {products &&
                                    products.map((product) => (
                                        <CartItem key={product.id} product={product} />
                                    ))
                                }
                            </ul>
                            <div className='w-full md:w-[50%] lg:w-[30%] mt-8 ml-auto'>
                                <div className='mb-2'>
                                    <PriceCard text={'Subtotal'} price={totalPrice} />
                                    {/* <GoPlus /> */}
                                    <PriceCard text={'Shipping'} price={shipping} />
                                    {/* <PiEqualsLight /> */}
                                    <PriceCard text={'Total'} price={totalPrice+shipping} />
                                </div>
                                <Button text={'Checkout'} />
                            </div>
                        </>
                    }
                </div>
            </div>
        </main>
    );
}