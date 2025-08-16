import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function FleetGallery() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Fleet images - you'll replace these with your actual image paths
    const fleetImages = [
        { id: 1, src: '../src/assets/1.jpg', alt: 'Fleet Vehicle 1' },
        { id: 2, src: '../src/assets/2.jpg', alt: 'Fleet Vehicle 2' },
        { id: 3, src: '../src/assets/3.jpg', alt: 'Fleet Vehicle 3' },
        { id: 4, src: '../src/assets/4.jpg', alt: 'Fleet Vehicle 4' },
        { id: 5, src: '../src/assets/5.jpg', alt: 'Fleet Vehicle 5' },
        { id: 6, src: '../src/assets/6.jpg', alt: 'Fleet Vehicle 6' }
    ];

    const visibleImages = 3; // Number of images to show at once
    const maxIndex = Math.max(0, fleetImages.length - visibleImages);

    const goToPrevious = () => {
        setCurrentIndex(prev => prev === 0 ? maxIndex : prev - 1);
    };

    const goToNext = () => {
        setCurrentIndex(prev => prev === maxIndex ? 0 : prev + 1);
    };

    return (
        <div className="relative bg-gradient-to-br from-[#2c3e5d] via-[#1e2b47] to-[#0f1729] py-16 md:py-20 lg:py-24 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 800 600" fill="none">
                    <defs>
                        <pattern id="fleet-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-white/20" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#fleet-grid)" />
                </svg>
            </div>

            <div className="relative max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Content Section */}
                    <div className="text-white">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight">
                            FLEET GALLERY
                        </h2>

                        <div className="space-y-4 text-gray-300 text-lg leading-relaxed max-w-lg">
                            <p>
                                Dynamically mesh progressive platforms vis-à-vis state of the art
                                growth strategies. Appropriately redefine prospective results for
                                optimal supply chains.
                            </p>
                        </div>
                    </div>

                    {/* Right Gallery Section */}
                    <div className="relative">
                        {/* Navigation Controls */}
                        <div className="flex justify-center gap-4 mb-8">
                            <button
                                onClick={goToPrevious}
                                className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-white/20"
                                aria-label="Previous images"
                            >
                                <ChevronLeft className="w-6 h-6 text-white" />
                            </button>

                            <button
                                onClick={goToNext}
                                className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-white/20"
                                aria-label="Next images"
                            >
                                <ChevronRight className="w-6 h-6 text-white" />
                            </button>
                        </div>

                        {/* Gallery Grid */}
                        <div className="relative overflow-hidden rounded-lg">
                            <div
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{
                                    transform: `translateX(-${currentIndex * (100 / visibleImages)}%)`,
                                    width: `${(fleetImages.length / visibleImages) * 100}%`
                                }}
                            >
                                {fleetImages.map((image, index) => (
                                    <div
                                        key={image.id}
                                        className="relative group cursor-pointer flex-shrink-0 px-2"
                                        style={{ width: `${100 / fleetImages.length}%` }}
                                    >
                                        {/* Image Container */}
                                        <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                                            <img
                                                src={image.src}
                                                alt={image.alt}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />

                                            {/* Hover Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                            {/* View Details on Hover */}
                                            <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                                <div className="text-white">
                                                    <h3 className="font-semibold text-lg mb-1">Fleet Vehicle {image.id}</h3>
                                                    <p className="text-sm text-gray-200">Professional freight solutions</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-red-500/10 to-red-600/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-tr from-blue-400/10 to-transparent rotate-45 rounded-lg"></div>
        </div>
    );
}

export default FleetGallery;