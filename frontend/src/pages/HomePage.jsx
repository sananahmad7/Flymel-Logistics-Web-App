import React, { useState } from 'react'
import { Clock, Phone, Mail } from 'lucide-react';
import FreightServices from '../components/FreightServices'; // Import the new component

function HomePage() {
    const [currentImage, setCurrentImage] = useState(0);

    // You can easily change this color by modifying the bg-blue-500/30 class
    const overlayColor = 'bg-black/40';

    const slides = [
        {
            image: '../src/assets/Truck.jpg',
            title: 'Ground, Air or Sea',
            subtitle: 'WE DELIVER YOUR PACKAGE IN NO-TIME',
        },
        {
            image: '../src/assets/ok.jpg',
            title: 'Fast, safe and accurate',
            subtitle: 'ANYWHERE IN THIS WORLD',
        }
    ];

    const contactInfo = [
        {
            icon: Clock,
            title: "Opening Hours",
            one: "Monday - Friday 09.00 - 18.00",
            two: "Saturday 09.00 - 14.00",
        },
        {
            icon: Phone,
            title: "Call Us Anytime",
            one: "+61 470 687 907",
            two: "+61 478 787 671",
        },
        {
            icon: Mail,
            title: "Email Us",
            one: "info@flymel.com.au"
        }
    ];

    const goToImage = (index) => {
        setCurrentImage(index);
    };

    const nextSlide = () => {
        setCurrentImage((prev) => (prev + 1) % slides.length);
    };

    return (
        <div className='min-h-screen'>
            {/* Hero Section */}
            <div className='relative h-screen'>
                {/* Image Display */}
                <img
                    className='w-full h-full object-cover'
                    src={slides[currentImage].image}
                    alt={`Slide ${currentImage + 1}`}
                />

                {/* Overlay */}
                <div className={`absolute inset-0 ${overlayColor}`}></div>

                {/* Content Overlay */}
                <div className='absolute inset-0 flex items-center justify-center'>
                    <div className='text-center text-white px-4 max-w-4xl'>
                        {/* Main Title */}
                        <h1 className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light mb-6 leading-tight'>
                            {slides[currentImage].title}
                        </h1>

                        {/* Subtitle */}
                        <p className='text-sm md:text-base lg:text-lg xl:text-xl font-semibold tracking-wider uppercase mb-8'>
                            {slides[currentImage].subtitle}
                        </p>
                    </div>
                </div>

                {/* Side Navigation Arrows */}
                <button
                    onClick={() => goToImage(currentImage === 0 ? slides.length - 1 : currentImage - 1)}
                    className='absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm'
                    aria-label="Previous slide"
                >
                    <svg className='w-6 h-6 md:w-8 md:h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
                    </svg>
                </button>

                <button
                    onClick={() => goToImage((currentImage + 1) % slides.length)}
                    className='absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm'
                    aria-label="Next slide"
                >
                    <svg className='w-6 h-6 md:w-8 md:h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                    </svg>
                </button>
            </div>

            {/* Contact Info Section - Positioned like in the image */}
            <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4/5 z-10 w-full px-3'>
                <div className='max-w-[95vw] xl:max-w-[85vw] 2xl:max-w-[80vw] mx-auto'>
                    <div className='relative bg-gradient-to-br from-[#03152a] via-[#08203c] to-[#06162a] rounded-2xl overflow-hidden shadow-2xl border border-red-500/20'>
                        {/* Fresh, glossy overlay */}
                        <div className='absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-blue-600/5'></div>
                        <div className='absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/5 to-transparent'></div>

                        {/* Dynamic background pattern with fresh look */}
                        <div className='absolute inset-0 opacity-8'>
                            <svg className='w-full h-full' viewBox='0 0 800 300' fill='none'>
                                <defs>
                                    <pattern id='fresh-grid' width='50' height='50' patternUnits='userSpaceOnUse'>
                                        <path d='M 50 0 L 0 0 0 50' fill='none' stroke='currentColor' strokeWidth='0.5' className='text-red-400/30' />
                                    </pattern>
                                </defs>
                                <rect width='100%' height='100%' fill='url(#fresh-grid)' />
                            </svg>
                        </div>

                        {/* Fresh floating elements */}
                        <div className='absolute top-6 right-16 w-24 h-24 bg-gradient-to-br from-red-400/15 to-red-600/5 rounded-full blur-2xl'></div>
                        <div className='absolute bottom-6 left-20 w-18 h-18 bg-gradient-to-tr from-red-300/10 to-transparent rotate-45 rounded-lg'></div>
                        <div className='absolute top-1/2 right-1/4 w-12 h-12 border border-red-400/15 rotate-12 rounded-lg'></div>

                        {/* Fresh top accent */}
                        <div className='h-1.5 bg-gradient-to-r from-red-400 via-red-500 to-red-600 shadow-lg shadow-red-500/20'></div>

                        <div className='relative px-6 py-8 md:px-10 md:py-10'>
                            {/* Compact Header */}
                            <div className='text-center mb-8'>
                                <div className='inline-flex items-center gap-3 mb-3'>
                                    <span className='text-red-400 font-medium text-sm uppercase tracking-[0.15em]'>Flymel Freight</span>
                                    <div className='w-6 h-px bg-gradient-to-r from-red-400 to-transparent'></div>
                                    <span className='text-gray-300 font-light text-sm uppercase tracking-[0.15em]'>Global Solutions</span>
                                </div>
                                <h2 className='text-xl md:text-2xl font-bold text-white mb-2'>
                                    Ready to Ship Your Cargo?
                                </h2>
                                <p className='text-gray-300 font-light text-sm leading-relaxed max-w-3xl mx-auto'>
                                    Connect with our logistics experts for seamless freight solutions worldwide.
                                    <span className='text-red-400 font-medium'> We deliver excellence.</span>
                                </p>
                            </div>

                            <div className='grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 items-center'>

                                {/* Contact Info Grid - Wider spread */}
                                <div className='lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
                                    {contactInfo.map((element, index) => (
                                        <div key={index} className='group text-center lg:text-left relative'>
                                            {/* Subtle separator line */}
                                            {index < contactInfo.length - 1 && index < 2 && (
                                                <div className='hidden lg:block absolute right-0 top-4 h-12 w-px bg-gradient-to-b from-transparent via-slate-500/20 to-transparent'></div>
                                            )}

                                            {/* Icon Container with fresh styling */}
                                            <div className='relative inline-flex items-center justify-center w-12 h-12 mb-4 group-hover:scale-105 transition-transform duration-300'>
                                                <div className='absolute inset-0 bg-gradient-to-br from-red-400/20 to-red-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                                                <div className='relative flex items-center justify-center w-11 h-11 bg-gray-800/40 rounded-xl border border-gray-700/50 group-hover:border-red-500/40 transition-colors duration-300'>
                                                    <element.icon className='w-5 h-5 text-gray-200 group-hover:text-red-400 transition-colors duration-300' />
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <h3 className='text-white font-semibold text-base mb-2 uppercase tracking-wide'>
                                                {element.title}
                                            </h3>
                                            <div className='space-y-0.5'>
                                                <p className='text-gray-300 text-sm font-light leading-relaxed'>
                                                    {element.one}
                                                </p>
                                                {element.two && (
                                                    <p className='text-gray-300 text-sm font-light leading-relaxed'>
                                                        {element.two}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* CTA Button - Compact */}
                                <div className='lg:col-span-1 flex justify-center lg:justify-end'>
                                    <div className='relative group'>
                                        {/* Fresh glossy button effect */}
                                        <div className='absolute -inset-0.5 bg-gradient-to-r from-red-500 to-red-600 rounded-xl blur opacity-40 group-hover:opacity-70 transition duration-300'></div>

                                        <button className='relative bg-gradient-to-br from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold px-6 py-4 rounded-xl transition-all duration-300 shadow-xl border border-red-500/30 group overflow-hidden'>
                                            <span className='relative z-10 text-sm uppercase tracking-wider flex items-center gap-2'>
                                                Buy Cargo Now
                                                <svg className='w-4 h-4 transform group-hover:translate-x-0.5 transition-transform duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7l5 5m0 0l-5 5m5-5H6' />
                                                </svg>
                                            </span>

                                            {/* Fresh shine effect */}
                                            <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-30'></div>
                                            <div className='absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent transform translate-x-full group-hover:translate-x-[-100%] transition-transform duration-500'></div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Welcome Section with Animation */}
            <div className='flex flex-col justify-center items-center py-16 md:py-20 lg:py-24 px-4 mt-99 md:mt-105 lg:mt-48'>
                <div
                    className='text-center opacity-0 animate-fade-in-up'
                    style={{
                        animation: 'fadeInUp 1s ease-out 0.5s forwards'
                    }}
                >
                    <h2 className='text-2xl md:text-3xl text-gray-500 font-bold mb-4'>Welcome to</h2>
                    <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-[#06162a]'>Flymel Freight</h1>
                </div>
            </div>

            {/* Freight Services Section */}
            <FreightServices />

            {/* Additional spacing */}
            <div className='h-32'></div>

            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .animate-fade-in-up {
                    opacity: 0;
                }
            `}</style>
        </div>
    )
}

export default HomePage;