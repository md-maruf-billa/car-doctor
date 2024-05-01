import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import Button from '../../Utils/Button/Button';
import { SlHandbag } from "react-icons/sl";
import { IoSearchOutline } from "react-icons/io5";

const NavBar = () => {
    const navItems = <>
        <NavLink to={"/"}><li><a>Home</a></li></NavLink>
        <NavLink to={"/about"}><li><a>About</a></li></NavLink>
        <NavLink to={"/services"}><li><a>Services</a></li></NavLink>
        <NavLink to={"/blogs"}><li><a>Blogs</a></li></NavLink>
        <NavLink to={"/contacts"}><li><a>Contacts</a></li></NavLink>
    </>
    return (
        <div className="navbar mt-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to={"/"} className='hidden md:block'>
                    <img className='w-[100px]' src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}

                </ul>
            </div>
            <div className="navbar-end">
                <div className='flex items-center text-2xl gap-3 mr-4'>
                    <SlHandbag />
                    <IoSearchOutline />
                </div>
                <Button btnName={"Appointment"} />
            </div>
        </div>
    );
};

export default NavBar;