import React from 'react'
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className='flex  justify-between items-center bg-white border mx-15' >
            <div className='border flex-row'>
                <img className='h-30 w-45' src='src/assets/Logo.png' alt='idk' />
                <img src='src/assets/Name.png' alt='idk' />
            </div>
            <div className='border p-10 space-x-10' >
                <Link className='text-3xl font-bold text-indigo-800 hover:text-red-600 transition duration-200
					 ease-in-out' to="/">Home</Link>
                <Link className='text-3xl font-bold text-indigo-800 hover:text-red-600 transition duration-200' to="/global">Global Coverage</Link>
                <Link className='text-3xl font-bold text-indigo-800 hover:text-red-600 transition duration-200' to="/about">About</Link>
                <Link className='text-3xl font-bold text-indigo-800 hover:text-red-600 transition duration-200' to="/news">News</Link>
            </div>
        </div>
    )
}

export default Header