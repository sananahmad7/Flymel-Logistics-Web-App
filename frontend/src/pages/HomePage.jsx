import React, { useState } from 'react'
import { Clock, Phone, Mail } from 'lucide-react';

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
        <div className=' h-screen'>
            <div className='relative '>
                {/* Image Display */}
                <img
                    className='w-full h-[1100px] object-cover'
                    src={slides[currentImage].image}
                    alt={`Slide ${currentImage + 1}`}
                />

                {/* Overlay */}
                <div className={`absolute inset-0 ${overlayColor}`}></div>

                {/* Content Overlay */}
                <div className='absolute inset-0 flex items-center justify-center'>
                    <div className='text-center text-white px-4 max-w-4xl'>
                        {/* Main Title */}
                        <h1 className='text-5xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight'>
                            {slides[currentImage].title}
                        </h1>

                        {/* Subtitle */}
                        <p className=' lg:text-lg 2xl:text-xl font-semibold tracking-wider uppercase mb-8'>
                            {slides[currentImage].subtitle}
                        </p>


                    </div>
                </div>



                {/* Side Navigation Arrows */}
                <button
                    onClick={() => goToImage(currentImage === 0 ? slides.length - 1 : currentImage - 1)}
                    className='absolute left-4 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm'
                    aria-label="Previous slide"
                >
                    <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
                    </svg>
                </button>

                <button
                    onClick={() => goToImage((currentImage + 1) % slides.length)}
                    className='absolute right-4 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm'
                    aria-label="Next slide"
                >
                    <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                    </svg>
                </button>
                <div className='flex 2xl:flex-row sm:flex-col sm:bottom-[-490px] lg:bottom-[-390px] xl:bottom-[-220px] 3xl:bottom-[-180px]  justify-between absolute gap-5 py-10 rounded-2xl   left-1/2   md:w-175 sm:w-160 lg:w-210 xl:w-265 2xl:w-320 3xl:w-440 4xl:w-490 transform -translate-x-1/2 bg-[#181834]'>

                    {contactInfo.map((element, index) => {
                        return (
                            <div key={index} className='  mx-3'>
                                <div className='flex flex-row items-center gap-3 ml-3'>
                                    <div className='flex  '>
                                        <element.icon className='w-10 h-10 text-white' />
                                    </div>
                                    <div className='space-y-5'>
                                        <h1 className='text-2xl font-bold text-white'>{element.title}</h1>
                                        <h1 className='text-xl text-gray-400'>{element.one}</h1>
                                        <h1 className='text-xl text-gray-400'>{element.two}</h1>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    <button className='text-3xl p-8 mx-6 text-white bg-red-600 min-w-[400px] rounded-2xl'>Buy Cargo Now</button>
                </div>
            </div>
            <div className='h-200'></div>
        </div>
    )
}

export default HomePage