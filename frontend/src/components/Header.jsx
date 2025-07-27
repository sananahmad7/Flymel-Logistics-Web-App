import React, { useState } from 'react'
import { Link, useLocation } from "react-router-dom";

function Header() {
    const location = useLocation();
    const currentPath = location.pathname;
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const linkClasses = (path) =>
        `text-sm lg:text-base font-medium hover:scale-102 tracking-wide uppercase transition duration-200 ease-in-out ${currentPath === path
            ? 'text-white border-b-2 border-red-500 pb-1'
            : 'text-white hover:text-red-400'
        }`;

    return (
        <div className='bg-[#13365f] shadow-lg'>
            <div className='flex justify-between items-center mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3'>
                {/* Logo Section */}
                <div className='flex items-center space-x-3 flex-shrink-0'>
                    <div className='flex items-center space-x-2'>
                        {/* Icon */}
                        <div className='bg-gradient-to-br from-red-500 to-red-600 p-2 rounded-lg shadow-lg'>
                            <svg className='w-6 h-6 text-white' fill='currentColor' viewBox='0 0 24 24'>
                                <path d='M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z' />
                            </svg>
                        </div>
                        {/* Company Name */}
                        <div className='flex flex-col'>
                            <span className='text-white font-bold text-xl sm:text-2xl tracking-tight'>
                                Flymel
                            </span>
                            <span className='text-gray-200 font-medium text-xs sm:text-sm tracking-widest uppercase -mt-1'>
                                Freight
                            </span>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className='md:hidden'>
                    <button className='text-white hover:text-red-400 transition duration-200' onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
                        </svg>
                    </button>
                </div>

                {/* Navigation Links - Desktop */}
                <div className='hidden md:flex items-center space-x-8 lg:space-x-12'>
                    <Link className={linkClasses('/')} to="/">Home</Link>
                    <Link className={linkClasses('/global')} to="/global">Global Coverage</Link>
                    <Link className={linkClasses('/about')} to="/about">About</Link>
                    <Link className={linkClasses('/news')} to="/news">News</Link>
                </div>

                {/* CTA Button - Desktop */}
                <div className='hidden md:block'>
                    <button className='bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 px-5 lg:py-3 lg:px-5 rounded-sm transition duration-200 ease-in-out transform hover:scale-105 shadow-lg uppercase tracking-wider text-xs lg:text-sm'>
                        Request a Quote
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {mobileMenuOpen &&
                <div className='md:hidden bg-[#1a1629] border-t border-gray-700'>
                    <div className='px-4 py-3 space-y-2'>
                        <Link className='block text-gray-300 hover:text-white py-2 text-base font-medium transition duration-200' to="/">Home</Link>
                        <Link className='block text-gray-300 hover:text-white py-2 text-base font-medium transition duration-200' to="/global">Global Coverage</Link>
                        <Link className='block text-gray-300 hover:text-white py-2 text-base font-medium transition duration-200' to="/about">About</Link>
                        <Link className='block text-gray-300 hover:text-white py-2 text-base font-medium transition duration-200' to="/news">News</Link>
                        <button className='w-full mt-3 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-md transition duration-200 uppercase tracking-wider text-sm'>
                            Request a Quote
                        </button>
                    </div>
                </div>
            }
        </div>
    );
}

export default Header;