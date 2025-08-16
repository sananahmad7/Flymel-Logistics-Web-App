import React from 'react';
import { Truck, Plane, Ship } from 'lucide-react';

function FreightServices() {
    const services = [
        {
            id: 1,
            title: 'LAND FREIGHT',
            icon: Truck,
            image: '/land.jpg', // Replace with your truck image path
            description: 'Reliable ground transportation for your cargo'
        },
        {
            id: 2,
            title: 'AIR FREIGHT',
            icon: Plane,
            image: '/air.jpg', // Replace with your plane image path
            description: 'Fast air delivery worldwide'
        },
        {
            id: 3,
            title: 'SEA FREIGHT',
            icon: Ship,
            image: '/sea.jpg', // Replace with your ship image path
            description: 'Cost-effective ocean shipping solutions'
        }
    ];

    return (
        <div className="py-16 md:py-20 lg:py-10 px-6 md:px-8 lg:px-12 bg-gray-50">
            <div className="max-w-none mx-auto">

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                        >
                            {/* Background Image */}
                            <div className="relative h-96 md:h-[500px] lg:h-[600px]">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                                {/* Content Overlay */}
                                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 text-white">
                                    {/* Icon */}
                                    <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110">
                                        <service.icon className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-white" strokeWidth={1.5} />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold uppercase mb-2 md:mb-3 tracking-wide">
                                        {service.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm md:text-base lg:text-lg text-gray-200 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                                        {service.description}
                                    </p>
                                </div>

                                {/* Hover Effect Border */}
                                <div className="absolute inset-0 border-4 border-transparent group-hover:border-red-600 transition-colors duration-300 rounded-2xl"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FreightServices;