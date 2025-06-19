import React from 'react'
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className='flex  justify-between bg-white border' >
            <div className='border flex-row ml-10'>
                <img className='h-25 w-40' src='src/assets/Logo.png' alt='idk' />
                <img src='src/assets/Name.png' alt='idk' />
            </div>
            <div className='border p-10 space-x-10 mr-10' >
                <Link className='text-2xl font-bold text-indigo-800 hover:text-red-600 transition duration-200
					 ease-in-out' to="/">Home</Link>
                <Link className='text-2xl font-bold text-indigo-800 hover:text-red-600 transition duration-200' to="/global">Global Coverage</Link>
                <Link className='text-2xl font-bold text-indigo-800 hover:text-red-600 transition duration-200' to="/about">About</Link>
                <Link className='text-2xl font-bold text-indigo-800 hover:text-red-600 transition duration-200' to="/news">News</Link>
            </div>
        </div>
    )
}

export default Header