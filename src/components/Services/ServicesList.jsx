import React from 'react';
import { servicesData } from '../../data/servicesData';
import { motion } from 'framer-motion';
import { Cloud, Shield, Network, Code, Layers } from 'lucide-react';

const ServicesList = () => {
    return (
        <section className="relative py-20 bg-gradient-to-b from-gray-50 via-white to-gray-100 overflow-hidden">
            <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
                    Our Core <span className="text-red-600">Services</span>
                </h2>
                <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
                    Empowering businesses through innovation, strategy, and
                    cutting-edge technology.
                </p>
            </div>

            {/* Grid of services */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-12">
                {servicesData.map((service, index) => (
                    <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="relative group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
                    >
                        {/* Image Section */}
                        <div className="relative w-full h-52 overflow-hidden">
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                            <div className="absolute top-4 left-4 text-3xl">
                                {service.icon}
                            </div>
                        </div>

                        {/* Text Section */}
                        <div className="p-6 flex flex-col justify-between h-[200px]">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-red-600 transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ServicesList;
