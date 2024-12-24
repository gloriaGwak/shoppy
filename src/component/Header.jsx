import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PiDressLight, PiShoppingCartSimple } from "react-icons/pi";
import User from './User';
import Button from './ui/Button';
import Svg from './ui/Svg';
import { UseAuthContext } from '../context/AuthContext';

export default function Header() {
    const {user, login, logout} = UseAuthContext();

    return (
        <header className='relative border-b'>
            <div className='border-b'>
                <div className="header_inner flex items-center justify-between ">
                    <Link to='/' className='logo'>
                        <PiDressLight className='inline-block w-[40px] h-[40px] md:w-[30px] md:h-[30px]' /> 
                        <h1 className='inline-block align-middle font-bebas font-bold text-3xl md:text-2xl'>Shoppy</h1>
                    </Link>
                    <div className="w-2/3">
                        <form className='flex items-center justify-center m-auto gap-2'>
                            <input 
                                type='text' 
                                id='' 
                                placeholder='Search Item'
                                className='w-full h-10 md:h-8 px-4 rounded border '
                            />
                            <button className='w-10 h-10 md:w-8 md:h-8 rounded border bg-mint text-white shrink-0 hover:text-white hover:bg-navy duration-200'>
                                <Svg name={'IoSearchOutline'} text={'Search'} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="header_inner">
                <div className='font-medium text-lg md:text-base'>
                    <nav className='flex items-center justify-end gap-8 md:gap-3'>
                        <ul className='flex items-center justify-start gap-8 md:gap-3'>
                            <li><Link to='/products' >Products</Link></li>
                            <li><Link to='/carts'><Svg name={'PiShoppingCartSimple'} text={'My Cart'} /></Link></li>
                            {user && user.isAdmin && 
                                (<li><Link to='/admin'><Svg name={'GoPencil'} text={'Admin'} /></Link>
                                </li>)
                            }
                        </ul>
                        {user && <User user={user} />}
                        {!user && <Button onClick={login} text={'Login'} />}
                        {user && <Button onClick={logout} text={'Logout'} />}
                    </nav>
                </div>
            </div>
        </header>
    );
}


// { index: true, element:<Home /> },
// { path: '/products', element:<AllProducts /> },
// { path: '/products/new', element:<NewProduct /> },
// { path: '/products/:id', element:<ProductDetail /> },
// { path: '/carts', element:<MyCart /> }

