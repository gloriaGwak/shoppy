import React, { useEffect } from 'react';
import Product from '../component/Product';

export default function AllProducts() {

    useEffect(() => {
        // console.log("Updated product:", product);
    }, []);


    return (
        <div className='content'>
            <div className="inner">
                <h2 className='mb-12 md:mb-8 font-medium text-2xl'>All Products</h2>
                <Product />
            </div>
        </div>
    );
}

