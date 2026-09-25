"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import logo from '../../assets/logo.png'
import { WorkOutContext } from '@/Context/WorkOutContext';
import { WorksOutType } from '@/types/WorksOutType';

interface ContextStateProp{
  addPlan:WorksOutType[]
  savelater:WorksOutType[]

}
const Navbar = () => {
  const {addPlan,savelater}=useContext(WorkOutContext)as ContextStateProp

    const links =<>
         <li><Link href="/">Worksout</Link></li> 
         <li><Link href='/myplan'>My Plan</Link></li>
    </>
    return (
        <div className=' bg-[#1a2312]  shadow-sm text-[#ffffff]  sticky top-0 z-50 border-b-2 border-gray-300 '>
            <div className="navbar container mx-auto">
       <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-xm  font-medium">
       {links}
      </ul>
    </div>
    <div className='flex gap-2 items-center'>
        <Image src={logo} alt='logo' ></Image>
        <Link href='/myplan' className=" font-bold text-xl uppercase text-[#ffffff]">Fitlog</Link>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-xm  font-medium">
      {links}
    </ul>
  </div>
  <div className="navbar-end gap-4">
    <div className='flex gap-3 items-center'>
       
        <h2 className='text-xm  font-medium' >Plan</h2>
         <span className="rounded-full bg-[#ccff00] px-3 py-1 text-sm font-semibold text-black">{addPlan.length}</span>
    </div>
    <div className='flex gap-3 items-center'>
       
        <h2 className='text-xm font-medium' >Saved</h2>
        <span  className="rounded-full border border-[#ccff00] px-3 py-1 text-sm font-semibold text-[#ccff00]" >{savelater.length}</span>
    </div>
  </div>
</div>
        </div>
    );
};

export default Navbar;