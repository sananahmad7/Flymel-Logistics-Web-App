import React from 'react';

const ServicesComponent = () => {
    const services = [
        {
            icon: (
                <svg className='w-12 h-12' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4' />
                </svg>
            ),
            title: 'FORWARDING SERVICES',
            description: 'Intrinsically drive stand-alone strategic theme areas vis-a-vis unique metrics. Efficiently cultivate empowered e-services whereas orthogonal human capital. Intrinsically evisculate cross functional'
        },
        {
            icon: (
                <svg className='w-12 h-12' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M9 12l6-3' />
                </svg>
            ),
            title: 'TRANSPORT OF PACKAGED GOODS',
            description: 'Providing professional packaging services for your goods using high quality materials that guarantee safe access to your shipments.'
        },
        {
            icon: (
                <svg className='w-12 h-12' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                </svg>
            ),
            title: 'INTERNATIONAL ROAD TRANSPORT',
            description: 'We can process shipments with any airline in the world. In addition, we have the measures in place to transport all types of merchandise:'
        },
        {
            icon: (
                <svg className='w-12 h-12' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' />
                </svg>
            ),
            title: 'WAREHOUSING AND STORAGE',
            description: 'At Cargo Services, we offer you various storage and shrink wrapping services, from the simplest to the most complex, to provide added value to your merchandise:'
        }
    ];

    return (
        <div className='py-16 px-4 bg-gradient-to-br from-[#03152a] to-[#06162a]'>
            <div className='max-w-7xl mx-auto'>
                {/* Header */}
                <div className='text-center mb-16'>
                    <div className='inline-flex items-center gap-3 mb-4'>
                        <div className='w-8 h-px bg-gradient-to-r from-transparent via-red-400 to-transparent'></div>
                        <span className='text-red-400 font-medium text-sm uppercase tracking-[0.25em]'>Our Services</span>
                        <div className='w-8 h-px bg-gradient-to-r from-red-400 via-transparent to-transparent'></div>
                    </div>
                    <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6'>
                        Fresh Solutions for Your
                        <span className='bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent'> Logistics </span>
                        Needs
                    </h2>
                    <p className='text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed'>
                        Experience premium freight services with our innovative approach to global logistics
                    </p>
                </div>

                {/* Services Grid */}
                <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8'>
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className='group relative bg-gradient-to-br from-[#08203c] to-[#06162a] rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-700/30 hover:border-red-500/30 hover:-translate-y-2 overflow-hidden'
                        >
                            {/* Fresh background gradient */}
                            <div className='absolute inset-0 bg-gradient-to-br from-red-500/5 via-[#08203c]/50 to-[#03152a]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>

                            {/* Floating accent */}
                            <div className='absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-red-400/10 to-red-500/5 rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500'></div>

                            {/* Icon Container */}
                            <div className='relative mb-6'>
                                <div className='inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl group-hover:scale-110 transition-transform duration-500 shadow-lg border border-gray-700/50 group-hover:border-red-500/30'>
                                    <div className='text-gray-300 group-hover:text-red-400 transition-colors duration-300'>
                                        {service.icon}
                                    </div>
                                </div>
                                {/* Icon glow effect */}
                                <div className='absolute inset-0 bg-gradient-to-br from-red-400/10 to-red-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                            </div>

                            {/* Content */}
                            <div className='relative z-10'>
                                <h3 className='text-white font-bold text-lg mb-4 uppercase tracking-wide group-hover:text-red-100 transition-colors duration-300'>
                                    {service.title}
                                </h3>
                                <p className='text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300'>
                                    {service.description}
                                </p>
                            </div>

                            {/* Fresh shine effect */}
                            <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none'></div>

                            {/* Bottom accent line */}
                            <div className='absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-red-600 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left'></div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className='text-center mt-16'>
                    <button className='group relative bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-red-500/25 overflow-hidden'>
                        <span className='relative z-10 flex items-center gap-2'>
                            Explore All Services
                            <svg className='w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                            </svg>
                        </span>
                        {/* Button shine */}
                        <div className='absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent transform translate-x-full group-hover:translate-x-[-100%] transition-transform duration-700'></div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServicesComponent;