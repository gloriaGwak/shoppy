import React, { useEffect } from 'react';
import Product from '../component/Product';
import PageTitle from '../component/ui/PageTitle';

export default function AllProducts() {

    useEffect(() => {
        // console.log("Updated product:", product);
    }, []);


    return (
        <div className='content'>
            <div className="inner">
                <PageTitle text={'All Products'} />
                <Product />
            </div>
        </div>
    );
}

