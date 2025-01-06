import React, { useEffect } from 'react';
import Product from '../component/Product';

export default function AllProducts() {

    useEffect(() => {
        // console.log("Updated product:", product);
    }, []);


    return (
        <div className='content'>
            <div className="inner">
            AllProducts
                <Product />
            </div>
        </div>
    );
}

