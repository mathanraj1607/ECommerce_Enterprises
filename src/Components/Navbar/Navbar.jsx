import React, { useState, useContext } from 'react'
import logo from '../Assests/logo.png'
import login_cart from '../Assests/cart_icon.png'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

export const Navbar = () => {
    const [menu, setMenu]=useState('Shop')
    const { getTotalCartItems } = useContext(ShopContext)

    const totalItems = getTotalCartItems()
  return (
    <div className='navbar flex justify-around p-8 shadow-t-md border border-b-gray-300'>
        <div className='nav-logo flex items-center gap-4'>
            <img src={logo} alt=''></img>
            <p className='text-4xl font-'>SHOPPER</p>
        </div>
        <ul className='nav-menu flex items-center list-none gap-10 text-gray-500 text-xl font-medium font-500'>
            <li className='flex flex-col items-center justify-center gap-2 cursor-pointer' onClick={() => setMenu("Shop")}><Link to='/'>Shop</Link> <hr className='hr-line' style={{opacity: menu==='Shop' ? 1 : 0}}/></li>
            <li className='flex flex-col items-center justify-center gap-2 cursor-pointer' onClick={() => setMenu("Mens")}><Link to='/mens'>Mens</Link> <hr className='hr-line' style={{opacity: menu==='Mens' ? 1 : 0}}/></li>
            <li className='flex flex-col items-center justify-center gap-2 cursor-pointer' onClick={() => setMenu("Womens")}><Link to='/womens'>Womens</Link> <hr className='hr-line' style={{opacity: menu==='Womens' ? 1 : 0}}/></li>
            <li className='flex flex-col items-center justify-center gap-2 cursor-pointer' onClick={() => setMenu("Kids")}><Link to='/kids'>Kids</Link> <hr className='hr-line' style={{opacity: menu==='Kids' ? 1 : 0}}/></li>
        </ul>
        <div className='nav-login-cart flex items-center gap-7'>
            <Link to='/login'><button className='px-6 py-2 w-32 outline-none border border-gray-300 text-lg text-gray-500 font-medium cursor-pointer rounded-4xl active:bg-white'>Login</button></Link>
            <Link to='/cart' className='relative inline-block'>
                <img src={login_cart} alt=''></img>
                <div className='nav-cart-count absolute -top-2 -right-2 flex items-center justify-center w-6 h-6 font-bold bg-red-500 text-white rounded-full text-xs'>
                    {totalItems}
                </div>
            </Link>
        </div>
    </div>
  )
}
