import React, { useState, useEffect } from 'react';
import { Clock, Users, Globe, Award, CheckCircle, TrendingUp, Shield, Target } from 'lucide-react';

function AboutPage() {
    const [visibleSections, setVisibleSections] = useState(new Set());

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleSections(prev => new Set([...prev, entry.target.id]));
                    }
                });
            },
            { threshold: 0.1, rootMargin: '50px' }
        );

        const sections = document.querySelectorAll('[data-animate]');
        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    const timelineEvents = [
        {
            year: "2015",
            title: "Company Founded",
            description: "Started as a small freight forwarding business with a vision to revolutionize logistics in Australia.",
            icon: Target
        },
        {
            year: "2017",
            title: "International Expansion",
            description: "Established partnerships with major shipping lines and airlines to offer global freight solutions.",
            icon: Globe
        },
        {
            year: "2019",
            title: "Technology Integration",
            description: "Launched our digital tracking platform and automated logistics management system.",
            icon: TrendingUp
        },
        {
            year: "2021",
            title: "ISO Certification",
            description: "Achieved ISO 9001:2015 certification for quality management systems and processes.",
            icon: Award
        },
        {
            year: "2023",
            title: "Carbon Neutral Fleet",
            description: "Committed to sustainability by achieving carbon neutrality across our delivery fleet.",
            icon: Shield
        },
        {
            year: "2025",
            title: "AI-Powered Logistics",
            description: "Implementing artificial intelligence to optimize routes and predict delivery times with 99% accuracy.",
            icon: CheckCircle
        }
    ];

    const stats = [
        { number: "10,000+", label: "Shipments Delivered", icon: CheckCircle },
        { number: "50+", label: "Countries Served", icon: Globe },
        { number: "24/7", label: "Customer Support", icon: Clock },
        { number: "98%", label: "On-Time Delivery", icon: TrendingUp }
    ];

    const values = [
        {
            icon: Shield,
            title: "Reliability",
            description: "We ensure your cargo reaches its destination safely and on time, every time. Our track record speaks for itself with industry-leading delivery success rates."
        },
        {
            icon: Globe,
            title: "Global Reach",
            description: "With partnerships spanning across continents, we provide seamless logistics solutions from Australia to anywhere in the world."
        },
        {
            icon: Users,
            title: "Customer First",
            description: "Our dedicated team works around the clock to provide personalized service and support for all your freight needs."
        },
        {
            icon: TrendingUp,
            title: "Innovation",
            description: "We leverage cutting-edge technology and data analytics to optimize routes, reduce costs, and improve delivery times."
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative h-[70vh] bg-gradient-to-br from-[#03152a] via-[#08203c] to-[#06162a] overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full" viewBox="0 0 800 600" fill="none">
                        <defs>
                            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-red-400/30" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-red-400/20 to-red-600/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-tr from-red-300/15 to-transparent rotate-45 rounded-lg"></div>

                <div className="relative h-full flex items-center justify-center px-4">
                    <div className="text-center text-white max-w-4xl">
                        <div
                            className={`transition-all duration-1000 ${visibleSections.has('hero')
                                    ? 'opacity-100 transform translate-y-0'
                                    : 'opacity-0 transform translate-y-8'
                                }`}
                            id="hero"
                            data-animate
                        >
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight">
                                About <span className="text-red-400 font-semibold">Flymel Freight</span>
                            </h1>
                            <p className="text-lg md:text-xl font-light text-gray-300 leading-relaxed">
                                Connecting the world through innovative logistics solutions
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Company Overview */}
            <div className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div
                            className={`transition-all duration-1000 delay-200 ${visibleSections.has('overview')
                                    ? 'opacity-100 transform translate-x-0'
                                    : 'opacity-0 transform -translate-x-12'
                                }`}
                            id="overview"
                            data-animate
                        >
                            <h2 className="text-4xl font-bold text-[#08203c] mb-6">
                                Delivering Excellence Since 2015
                            </h2>
                            <div className="space-y-6 text-gray-600 leading-relaxed">
                                <p className="text-lg">
                                    At Flymel Freight, we've been revolutionizing the logistics industry with our commitment to
                                    exceptional service and innovative solutions. What started as a vision to simplify global
                                    trade has grown into a trusted partner for businesses worldwide.
                                </p>
                                <p>
                                    Our comprehensive approach combines cutting-edge technology with personalized service,
                                    ensuring that every shipment receives the attention it deserves. From small packages to
                                    large cargo consignments, we handle each delivery with the same level of care and precision.
                                </p>
                                <p>
                                    With a network spanning over 50 countries and a team of dedicated logistics experts,
                                    we're not just moving cargo – we're moving your business forward.
                                </p>
                            </div>
                        </div>

                        <div
                            className={`transition-all duration-1000 delay-400 ${visibleSections.has('overview')
                                    ? 'opacity-100 transform translate-x-0'
                                    : 'opacity-0 transform translate-x-12'
                                }`}
                        >
                            <div className="relative">
                                <div className="bg-gradient-to-br from-[#03152a] to-[#08203c] rounded-2xl p-8 text-white">
                                    <h3 className="text-2xl font-semibold mb-6 text-red-400">Our Mission</h3>
                                    <p className="text-lg leading-relaxed mb-6">
                                        To provide seamless, reliable, and innovative logistics solutions that connect
                                        businesses globally while maintaining the highest standards of service and sustainability.
                                    </p>
                                    <div className="grid grid-cols-2 gap-4">
                                        {stats.map((stat, index) => (
                                            <div key={index} className="text-center p-4 bg-white/5 rounded-lg">
                                                <stat.icon className="w-6 h-6 text-red-400 mx-auto mb-2" />
                                                <div className="text-2xl font-bold">{stat.number}</div>
                                                <div className="text-sm text-gray-300">{stat.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Timeline Section */}
            <div className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <div
                        className={`text-center mb-16 transition-all duration-1000 ${visibleSections.has('timeline-header')
                                ? 'opacity-100 transform translate-y-0'
                                : 'opacity-0 transform translate-y-8'
                            }`}
                        id="timeline-header"
                        data-animate
                    >
                        <h2 className="text-4xl font-bold text-[#08203c] mb-4">Our Journey</h2>
                        <p className="text-xl text-gray-600">A decade of growth, innovation, and excellence</p>
                    </div>

                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-0.5 bg-gradient-to-b from-red-400 via-red-500 to-red-600"></div>

                        {timelineEvents.map((event, index) => (
                            <div
                                key={index}
                                className={`relative mb-16 transition-all duration-1000 delay-${(index + 1) * 200} ${visibleSections.has(`timeline-${index}`)
                                        ? `opacity-100 transform ${index % 2 === 0 ? 'translate-x-0' : 'translate-x-0'}`
                                        : `opacity-0 transform ${index % 2 === 0 ? '-translate-x-12' : 'translate-x-12'}`
                                    }`}
                                id={`timeline-${index}`}
                                data-animate
                            >
                                <div className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                                    <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}>
                                        <div className={`bg-gradient-to-br from-[#03152a] to-[#08203c] rounded-2xl p-6 text-white shadow-lg ${index % 2 === 0 ? 'text-right' : 'text-left'
                                            }`}>
                                            <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                                                <event.icon className="w-6 h-6 text-red-400" />
                                                <h3 className="text-xl font-semibold">{event.title}</h3>
                                            </div>
                                            <p className="text-gray-300 leading-relaxed">{event.description}</p>
                                        </div>
                                    </div>

                                    {/* Timeline Dot */}
                                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full border-4 border-white shadow-lg z-10"></div>

                                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                                        <div className={`${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                                            <div className="text-3xl font-bold text-red-500 mb-2">{event.year}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Values Section */}
            <div className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    <div
                        className={`text-center mb-16 transition-all duration-1000 ${visibleSections.has('values-header')
                                ? 'opacity-100 transform translate-y-0'
                                : 'opacity-0 transform translate-y-8'
                            }`}
                        id="values-header"
                        data-animate
                    >
                        <h2 className="text-4xl font-bold text-[#08203c] mb-4">Our Core Values</h2>
                        <p className="text-xl text-gray-600">The principles that guide everything we do</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className={`transition-all duration-1000 delay-${(index + 1) * 200} ${visibleSections.has(`value-${index}`)
                                        ? 'opacity-100 transform translate-y-0'
                                        : 'opacity-0 transform translate-y-8'
                                    }`}
                                id={`value-${index}`}
                                data-animate
                            >
                                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-red-600 rounded-xl flex items-center justify-center">
                                                <value.icon className="w-6 h-6 text-white" />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-[#08203c] mb-3">{value.title}</h3>
                                            <p className="text-gray-600 leading-relaxed">{value.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Contact CTA Section */}
            <div className="py-20 bg-gradient-to-br from-[#03152a] via-[#08203c] to-[#06162a]">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <div
                        className={`transition-all duration-1000 ${visibleSections.has('cta')
                                ? 'opacity-100 transform translate-y-0'
                                : 'opacity-0 transform translate-y-8'
                            }`}
                        id="cta"
                        data-animate
                    >
                        <h2 className="text-4xl font-bold text-white mb-6">
                            Ready to Ship with <span className="text-red-400">Flymel Freight</span>?
                        </h2>
                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            Join thousands of satisfied customers who trust us with their most important shipments.
                            Let's discuss how we can help your business reach new heights.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
                                Get a Quote Today
                            </button>
                            <button className="border border-red-400 text-red-400 hover:bg-red-400 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300">
                                Contact Our Team
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;