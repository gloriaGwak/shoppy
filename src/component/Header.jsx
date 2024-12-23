import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PiDressLight, PiShoppingCartSimple, PiUser } from "react-icons/pi";
import { GoPencil } from "react-icons/go";
import { login, logout, onUserStateChange } from '../api/firebase';


export default function Header() {
    const [ user, setUser ] = useState();
    useEffect(() => {
        // onUserStateChange((user) => {
        //     console.log(user);
        //     setUser(user);
        // })
        onUserStateChange(setUser);
    },[]);

    const handleLogin = () => {
        login().then(setUser);
    }

    const handleLogout = () => {
        logout().then(setUser);
    }
    
    return (
        <header className='py-4 border'>
            <div className="inner flex items-center justify-between">
                <Link to='/'>
                    <PiDressLight className='inline-block w-[40px] h-[40px] md:w-[30px] md:h-[30px]' />
                    <h1 className='inline-block align-middle font-bebas font-bold text-3xl md:text-2xl tracking-wide'>Shoppy</h1>
                </Link>
                <nav className='flex items-center justify-between gap-10 md:gap-5 font-medium text-xl md:text-base'>
                    <ul className=' flex items-center justify-between gap-10 md:gap-5'>
                        <li><Link to='/products'>Products</Link></li>
                        <li><Link to='/carts'>My Cart <PiShoppingCartSimple className='inline-block align-sub w-[25px] h-[25px] md:w-[20px] md:h-[20px]' /></Link></li>
                        <li><Link to='/admin'><GoPencil className='inline-block align-sub w-[25px] h-[25px] md:w-[20px] md:h-[20px]' /> Admin</Link></li>
                    </ul>
                    {!user &&
                        <button onClick={handleLogin}>
                            <PiUser className='inline-block align-sub w-[25px] h-[25px] md:w-[20px] md:h-[20px]' /> 
                            Login
                        </button>
                    }
                    {user &&
                        <>
                            <p>Welcome, {user.displayName}!</p>
                            <button onClick={handleLogout}>
                                {/* <img src={user.photoURL} alt={user.displayName} className='inline-block align-sub w-[25px] h-[25px] md:w-[20px] md:h-[20px] rounded-full' /> */}
                                {/* <img src={user.photoURL} alt={user.displayName} className='inline-block align-sub w-[25px] h-[25px] md:w-[20px] md:h-[20px] rounded-full' /> */}
                                LogOut
                            </button>
                        </>
                    }
                </nav>
            </div>
        </header>
    );
}


// { index: true, element:<Home /> },
// { path: '/products', element:<AllProducts /> },
// { path: '/products/new', element:<NewProduct /> },
// { path: '/products/:id', element:<ProductDetail /> },
// { path: '/carts', element:<MyCart /> }

