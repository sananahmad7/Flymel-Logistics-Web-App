import React from 'react'
import { Link, useLocation } from "react-router-dom";

function Header() {
    const location = useLocation();
    const currentPath = location.pathname;

    const linkClasses = (path) =>
        `text-2xl font-bold transition duration-200 ease-in-out ${currentPath === path
            ? 'text-[#181834] border-b-4 border-indigo-900 pb-1.5'
            : 'text-[#181834] hover:text-red-700'
        }`;

    return (
        <div className='flex justify-between items-center bg-white  3xl:mx-10 4xl:mx-15'>
            <div className='flex items-center space-x-2'>
                <img className='h-[40px] w-[55px]' src='src/assets/Logo.png' alt='logo' />
                <img src='src/assets/Name.png' alt='name' />
            </div>

            <div className='flex space-x-10 p-10'>
                <Link className={linkClasses('/')} to="/">Home</Link>
                <Link className={linkClasses('/global')} to="/global">Global Coverage</Link>
                <Link className={linkClasses('/about')} to="/about">About</Link>
                <Link className={linkClasses('/news')} to="/news">News</Link>
            </div>
        </div>
    );
}

export default Header;
