import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from "../assets/logo.png";

export function Footer() {
    return (
        <footer className=' w-full'>
            <div className='flex flex-col justify-center items-center bg-periwinkle text-ivory h-[140px] w-full gap-4'>

                <span>
                    <img src={logo} alt="logo" className="h-14 w-auto object-contain rounded-3xl" />
                </span>

                <nav className='flex gap-8'>
                    <NavLink to="/" className={({ isActive }) => isActive ? "font-bold underline" : ""}>Home</NavLink>
                    <NavLink to="/About" className={({ isActive }) => isActive ? "font-bold underline" : ""}>About</NavLink>
                    <NavLink to="/Movie" className={({ isActive }) => isActive ? "font-bold underline" : ""}>Movie</NavLink>
                    <NavLink to="/Monster" className={({ isActive }) => isActive ? "font-bold underline" : ""}>Monster</NavLink>
                    <NavLink to="/Products" className={({ isActive }) => isActive ? "font-bold underline" : ""}>Products</NavLink>
                </nav>

            </div>
            <div className='flex gap-10'>


            </div>
            <div className=' bg-navy text-ivory h-6 text-center'>
                <p>Proyecto creado para Bootcamp React -BIT - &copy; William Apache</p>
            </div>
        </footer>
    )
}
