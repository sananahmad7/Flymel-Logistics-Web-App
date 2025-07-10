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
            <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-9/10 z-10 w-full px-4'>
                <div className='max-w-7xl mx-auto'>
                    <div className='bg-[#181834] rounded-2xl p-6 md:p-8 lg:p-10 shadow-2xl'>
                        <div className='flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8'>
                            {/* Contact Info Items */}
                            <div className='flex flex-col lg:flex-row gap-6 lg:gap-8 xl:gap-12 flex-1 w-full'>
                                {contactInfo.map((element, index) => (
                                    <div key={index} className='flex items-start gap-4 lg:flex-1'>
                                        <div className='flex-shrink-0'>
                                            <element.icon className='w-8 h-8 md:w-10 md:h-10 text-white' />
                                        </div>
                                        <div className='space-y-2 flex-1'>
                                            <h3 className='text-lg md:text-xl lg:text-2xl font-bold text-white uppercase'>{element.title}</h3>
                                            <p className='text-sm md:text-base lg:text-lg text-gray-400'>{element.one}</p>
                                            {element.two && (
                                                <p className='text-sm md:text-base lg:text-lg text-gray-400'>{element.two}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Button */}
                            <div className='flex-shrink-0 w-full lg:w-auto mt-4 lg:mt-0'>
                                <button className='w-full lg:w-auto text-lg md:text-xl lg:text-2xl font-bold py-4 px-8 md:py-6 md:px-12 lg:py-8 lg:px-16 text-white bg-red-600 hover:bg-red-700 transition-colors duration-300 rounded-2xl whitespace-nowrap uppercase'>
                                    Buy Cargo Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Welcome Section with Animation */}
            <div className='flex flex-col justify-center items-center py-16 md:py-20 lg:py-24 px-4 mt-62 md:mt-70 lg:mt-48'>
                <div
                    className='text-center opacity-0 animate-fade-in-up'
                    style={{
                        animation: 'fadeInUp 1s ease-out 0.5s forwards'
                    }}
                >
                    <h2 className='text-2xl md:text-3xl text-gray-500 font-bold mb-4'>Welcome to</h2>
                    <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-[#181834]'>Flymel Freight</h1>
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