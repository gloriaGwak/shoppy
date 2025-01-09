import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../api/firebase';
import Loading from './ui/Loading';
import ProductCard from './ProductCard';

export default function Product() {
    const { isLoading, error, data: products } = useQuery({
        queryKey: ['products'],
        queryFn: getProducts,
        // staleTime: 1000 * 60 *5
    });
    return (
        <>
            {isLoading && <Loading />}
            {error && <p>error</p>}
            <ul className='
                flex justify-start items-stretch flex-wrap
                md:gap-x-4 md:gap-y-8
                gap-x-2 gap-y-4
            '>
                {products &&
                    products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                }
            </ul>
        </>
    );
}

