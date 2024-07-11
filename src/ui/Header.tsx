import React, { useEffect, useState } from 'react'
import { logo } from '../assets'
import { CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { TbShoppingBagExclamation } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";
import Container from './Container';
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from 'react-router-dom';
import { config } from '../config';
import { getdata } from '../lib';



export default function Header() {
    const [searchtext,Setsearchtext]=useState("")
    const [Categories,setCategories]=useState([])
    useEffect(()=>{
      const fetchdata=async()=>{
        const endpoint=`${config?.baseurl}/Categories`;
        try{
          const data=await getdata(endpoint)
          setCategories(data); // set the fetched categories

          console.log(data,"data")
        }
        catch(error){
          console.error("error fetching data",error)
        }
      }
      fetchdata()
    })
    const handelsearch=(e: { target: { value: React.SetStateAction<string>; }; })=>{
        Setsearchtext(e.target.value)
    }
   
  return (
    <div className='w-full bg-whiteText '>
        <div className='flex  items-center justify-between h-20 px-4 lg:px-0 mx-auto max-w-screen-xl'>
          <Link to="/"><img src={logo} alt='logo' className='w-40 object-contain' /></Link>
        
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
        <Link to="/profile">
        <FaRegUser className='hover:text-sky-500 duration-200 cursor-pointer' />
        </Link>
      
      <div className='relative'>
        <Link to="/favorite">
        <FaRegStar className='hover:text-sky-500 duration-200 cursor-pointer'/>
        </Link>
      
      <span className=' absolute w-4 h-4 bg-red-600 flex justify-center items-center  text-whiteText text-sm font-bold top-[-7px] left-3 rounded-full'>0</span>
      </div>
      <div  className='relative'>
        <Link to="/cart">
        <TbShoppingBagExclamation className='hover:text-sky-500 duration-200 cursor-pointer'/>
        </Link>
      <span className=' absolute w-4 h-4 bg-red-600 flex justify-center items-center  text-whiteText text-sm font-bold top-[-7px] left-3 rounded-full'>0</span>
      </div>
     
      </div>
        </div>
      <div className='w-full bg-darkText'>
        <div className='text-whiteText'>
            <Container className='py-2 max-w-4xl flex items-center justify-center gap-20'>
            <p className='flex items-center gap-1'>select catagory <IoMdArrowDropdown/></p>
            <ul className='hidden md:inline-flex gap-10 justify-between items-center uppercase  '>
        <li className=' text-white/80 hover:text-whiteText opacity-100 duration-200 group font-semibold cursor-pointer relative overflow-hidden'>
            <Link to='/' smooth={true} duration={200}>Home</Link>
            <span className='absolute top-[23px] left-0 bg-white w-full h-[1px] translate-x-[-105%] group-hover:translate-x-0 duration-200'></span>
            </li>
            <li className=' text-white/80 hover:text-whiteText opacity-100 duration-200 group font-semibold cursor-pointer relative overflow-hidden'>
            <Link to='/product' smooth={true} duration={200}>Shop</Link>
            <span className='absolute top-[23px] left-0 bg-white w-full h-[1px] translate-x-[-105%] group-hover:translate-x-0 duration-200'></span>

            </li>
            <li className=' text-white/80 hover:text-whiteText opacity-100 duration-200 group font-semibold cursor-pointer relative overflow-hidden'>
            <Link to='/cart' smooth={true} duration={200}>Cart</Link>
            <span className='absolute top-[23px] left-0 bg-white w-full h-[1px] translate-x-[-105%] group-hover:translate-x-0 duration-200'></span>

            </li>
            <li className=' text-white/80 hover:text-whiteText opacity-100 duration-200 group font-semibold cursor-pointer relative overflow-hidden'>
            <Link to='/orders' smooth={true} duration={200}>Orders</Link>
            <span className='absolute top-[23px] left-0 bg-white w-full h-[1px] translate-x-[-105%] group-hover:translate-x-0 duration-200'></span>

            </li>
            <li className='text-white/80 hover:text-white opacity-100 duration-200 font-semibold cursor-pointer relative overflow-hidden group'>
        <Link to='/myaccount' smooth={true} duration={200}>Myaccount</Link>
        <span className='absolute top-[23px] left-0 bg-white w-full h-[1px] translate-x-[-105%] group-hover:translate-x-0 duration-200'></span>
      </li>
            <li className=' text-white/80  hover:text-whiteText opacity-100 duration-200 group font-semibold cursor-pointer relative overflow-hidden'>
            <Link to='/blog' smooth={true} duration={200}>Blog</Link>
            <span className='absolute top-[23px] left-0 bg-white w-full h-[1px] translate-x-[-105%] group-hover:translate-x-0 duration-200'></span>

            </li>
            
           
            
            
            
        
     </ul>
            </Container>
            
        </div>
     
      </div>
    </div>
  )
}
