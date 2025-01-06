import React from 'react';
import Product from '../component/Product';
import SwiperSilde from '../component/ui/SwiperSilde';

export default function Home() {
    return (
        <main>
            <div>
                <SwiperSilde />
            </div>
            <div className='content'>
                <div className="inner">
                    <Product />
                </div>
            </div>
        </main>
    );
}

