import React from 'react';
import { Link } from 'react-router-dom';
import { PiDressLight } from "react-icons/pi";
import User from './User';
// import Button from './ui/Button';
import Svg from './ui/Svg';
import { useAuthContext } from '../context/AuthContext';
import CartStatus from './ui/CartStatus';

export default function Header() {
    const {user, login, logout} = useAuthContext();

    return (
        <header className='relative border-b text-navy'>
            <div className='border-b'>
                <div className="header_inner flex items-center justify-between ">
                    <Link to='/' className='logo'>
                        <PiDressLight className='inline-block md:w-[40px] md:h-[40px] w-[30px] h-[30px]' /> 
                        <h1 className='inline-block align-middle font-bebas font-bold md:text-3xl text-2xl'>Shoppy</h1>
                    </Link>
                    <div className="w-2/3">
                        <form className='flex items-center justify-center m-auto gap-2'>
                            <input 
                                type='text' 
                                id='' 
                                placeholder='Search Item'
                                className='w-full md:h-10 h-8 px-4 rounded border '
                            />
                            <button 
                                type='button' 
                                className='md:w-10 md:h-10 w-8 h-8 rounded border bg-navy text-white shrink-0 hover:text-white hover:bg-mint duration-200'
                            >
                                <Svg name={'IoSearchOutline'} text={'Search'} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="header_inner">
                <div className='font-medium lg:text-lg text-base'>
                    <nav className='flex items-center justify-end md:gap-8 gap-3'>
                        <ul className='flex items-center justify-start md:gap-9 gap-3'>
                            <li><Link to='/products' >Products</Link></li>
                            {/* <li><Link to='/carts'><Svg name={'PiShoppingCartSimple'} text={'My Cart'} /></Link></li> */}
                            <li><Link to='/carts' className='relative'><CartStatus /></Link></li>
                            {user && user.isAdmin && (
                                <li>
                                    <Link to='/admin/product'><Svg name={'GoPencil'} text={'Admin'} /></Link>
                                </li>
                            )}
                        </ul>
                        {user && <User user={user} />}
                        {/* {!user && <Button onClick={login} text={'Login'} />}
                        {user && <Button onClick={logout} text={'Logout'} />} */}
                        {!user && <button onClick={login}>Login</button>}
                        {user && <button onClick={logout}>Logout</button>}
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

