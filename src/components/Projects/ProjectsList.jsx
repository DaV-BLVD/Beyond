import React from 'react';
import { motion } from 'framer-motion';
import CompletedProjects from '../../data/CompletedProjects';

const cardVariants = {
    offscreen: { opacity: 0, y: 20 },
    onscreen: {
        opacity: 1,
        y: 0,
        transition: { type: 'spring', bounce: 0.2, duration: 0.8 },
    },
};

const MainMentions = () => {

    return (
        <section className="py-14 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                {CompletedProjects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="flex flex-col justify-between bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={cardVariants}
                    >
                        <div className="overflow-hidden rounded-t-2xl">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 sm:h-56 object-cover transition-transform duration-500 hover:scale-105"
                            />
                        </div>

                        <div className="p-5 flex flex-col justify-between h-[260px] sm:h-[280px]">
                            <div>
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 text-center">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 text-sm sm:text-base text-justify leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            <button className="mt-4 self-center sm:self-start px-5 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition-colors duration-300">
                                {' '}
                                View Details &gt;{' '}
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default MainMentions;
