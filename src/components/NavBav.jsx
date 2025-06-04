import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from "../assets/logo.png";
import { Icon } from '@iconify/react';

export function NavBav() {
  return (
    <>
      <div className='bg-navy text-ivory h-[35px] w-full text-center pt-1'>Lorem ipsum dolor sit amet.</div>
      <nav className={"bg-periwinkle text-ivory  h-[80px] w-full flex gap-12 justify-between items-center px-8 shadow-lg"}>
        <Link to={"/"}>
          <div> <img src={logo} alt="logo" className="h-14 w-auto object-contain rounded-3xl" /></div>
        </Link>




        <div className='flex gap-10'>
          <NavLink to="/" className={({ isActive }) => isActive ? "font-bold underline" : ""}>Home</NavLink>
          <NavLink to="/About" className={({ isActive }) => isActive ? "font-bold underline" : ""}>About</NavLink>
          <NavLink to="/Movie" className={({ isActive }) => isActive ? "font-bold underline" : ""}>Movie</NavLink>
          <NavLink to="/Monster" className={({ isActive }) => isActive ? "font-bold underline" : ""}>Monster</NavLink>
          <NavLink to="/Products" className={({ isActive }) => isActive ? "font-bold underline" : ""}>Products</NavLink>

        </div>

        <div className='flex'>
          <Icon icon={"bxs:bell-ring"} width={30} hanging={30} />
        </div>
      </nav>

    </>
  )
}
