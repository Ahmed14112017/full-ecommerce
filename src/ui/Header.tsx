import React, { useState } from 'react'
import { logo } from '../assets'
import { CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { TbShoppingBagExclamation } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-scroll';
import Container from './Container';
import { IoMdArrowDropdown } from "react-icons/io";



export default function Header() {
    const [searchtext,Setsearchtext]=useState("")
    const handelsearch=(e)=>{
        Setsearchtext(e.target.value)
    }
   
  return (
    <div className='w-full bg-whiteText '>
        <div className='flex  items-center justify-between h-20 px-4 lg:px-0 mx-auto max-w-screen-xl'>
        <img src={logo} alt='logo' className='w-40 object-contain' />
      <div className='hidden md:inline-flex w-full relative max-w-3xl'>
      <input type='text' onChange={handelsearch} placeholder='search products' className='text-gray-900 w-full py-2 rounded-full 
       placeholder:px-3 placeholder:text-base placeholder:tracking-wide shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-darkText sm:text-sm px-4'/>
     {searchtext?(
<IoMdClose  onClick={()=>{Setsearchtext("")}} values='searchtext' className='absolute top-2 right-1 text-xl hover:text-red-600 cursor-pointer duration-200'/>
     ):(
        <CiSearch className='absolute top-2 right-1 text-xl hover:text-red-600 '/>
     ) }
      </div>
      <div className='flex justify-between items-center gap-x-6 text-xl '>
      <FaRegUser className='hover:text-sky-500 duration-200 cursor-pointer' />
      <div className='relative'>
      <FaRegStar className='hover:text-sky-500 duration-200 cursor-pointer'/>
      <span className=' absolute w-4 h-4 bg-red-600 flex justify-center items-center  text-whiteText text-sm font-bold top-[-7px] left-3 rounded-full'>0</span>
      </div>
      <div  className='relative'>
      <TbShoppingBagExclamation className='hover:text-sky-500 duration-200 cursor-pointer'/>
      <span className=' absolute w-4 h-4 bg-red-600 flex justify-center items-center  text-whiteText text-sm font-bold top-[-7px] left-3 rounded-full'>0</span>
      </div>
     
      </div>
        </div>
      <div className='w-full bg-darkText'>
        <div className='text-whiteText'>
            <Container className='py-2 max-w-4xl flex items-center justify-center gap-20'>
            <p className='flex items-center gap-1'>select catagory <IoMdArrowDropdown/></p>
            <ul className='hidden md:inline-flex items-center '>
        <li className='flex items-center justify-center gap-20 font-semibold'>
            <Link to='/' smooth={true} duration={200}>Home</Link>
            <Link to='/product' smooth={true} duration={200}>Shop</Link>
            <Link to='/cart' smooth={true} duration={200}>Cart</Link>
            <Link to='/orders' smooth={true} duration={200}>Orders</Link>
            <Link to='/myaccount' smooth={true} duration={200}>Myaccount</Link>
            <Link to='/blog' smooth={true} duration={200}>Blog</Link>
        </li>
     </ul>
            </Container>
            
        </div>
     
      </div>
    </div>
  )
}
