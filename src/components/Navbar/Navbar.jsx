import React from 'react';
import { Link } from 'react-router-dom';
import rofiqul from "../../assets/image/Resume-Rofiqul.pdf"
const Navbar = () => {
    const navbar = <>
      
        <li className=' text-base text-white'><a href="/" className=' hover:bg-transparent hover:text-[#FFA500]'>HOME</a> </li>
        <li className=' text-base text-white'><a href="/" className=' hover:bg-transparent hover:text-[#FFA500] '>ABOUT</a> </li>
        <li className=' text-base text-white'><a href="#skills" className=' hover:text-[#FFA500] hover:bg-transparent' >SKILLS</a> </li>
        <li className=' text-base text-white'><a href="#projects" className=' hover:text-[#FFA500] hover:bg-transparent'>PORTFOLIO</a> </li>
        <li className=' text-base text-white'><a href="#services" className=' hover:text-[#FFA500] hover:bg-transparent'>SERVICES</a> </li>
        <li className=' text-base text-white'><a  href="#contact" className=' hover:text-[#FFA500] hover:bg-transparent'>CONTACT US</a> </li>
      
    </>

    return (
        <div className='py-2 fixed w-full bg-[#0d1e3a] border-b-2 border-[#02112a] z-50'>
        <div className="navbar container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FFA500]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#0d1e3a] rounded-box w-52">

                    {navbar}
                    </ul>
                </div>
                <a href='#' className=" flex items-center content-center w-full text-[#FFA500] text-2xl md:text-3xl italic"> 
       Rofiqul 
      </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">

                    {navbar}
                </ul>
            </div>
            <div className="navbar-end">
                <a className=' p-2 md:p-3 rounded-md hover:bg-transparent hover:border-2 border-2 border-[#FFA500] bg-[#FFA500] text-white' href={rofiqul} download={true}>My Resume</a>
            </div>
        </div>
        </div>
    );
};

export default Navbar;