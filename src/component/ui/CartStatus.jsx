import React from 'react';
import Svg from './Svg';
import { useQuery } from '@tanstack/react-query';
import { getCarts } from '../../api/firebase';
import { useAuthContext } from '../../context/AuthContext';

export default function CartStatus() {
    const {uid} = useAuthContext();
    const { data: products } = useQuery({
        queryKey: ['carts'],
        queryFn: () => getCarts(uid),
        // staleTime: 1000 * 60 *5
    });
    
// queryClient.invalidateQueries({ queryKey: ['carts'] })

    return <>
        <Svg name={'PiShoppingCartSimple'} text={'My Cart'} />
        {products && 
            <span 
                className='
                    absolute md:-top-2 md:-right-2 md:w-5 md:h-5 rounded-full bg-mint text-linen md:text-sm text-center
                    -top-1 -right-1 w-4 h-4 text-xs
                '
            >
                {products.length}
            </span>
        }
    </>
}

