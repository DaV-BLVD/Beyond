import React from 'react';
import projects from '../../data/projects.js';

const Projects = () => {
    return (
        <div className="mt-[40px] w-full mx-auto h-auto pb-3 bg-[rgb(245,245,245)]">
            <div className="flex flex-col justify-center items-center">
                <p className="text-center pt-8 text-[40px] font-semibold pb-4">
                    Our
                    <span className="text-red-500"> Projects Highlights</span>
                </p>

                <div className="flex flex-wrap justify-center gap-10 w-[90%] mx-auto py-5">
                    {projects.map((item, index) => (
                        <div
                            key={index}
                            className="
                            bg-white rounded-2xl shadow-md 
                            hover:shadow-2xl hover:scale-105 
                            transition-all duration-500 ease-out 
                            w-[300px] sm:w-[280px] md:w-[260px] lg:w-[300px]
                        "
                        >
                            {/* Image Section */}
                            <div className="relative h-52 overflow-hidden rounded-t-2xl">
                                <img
                                    alt={item.title}
                                    src={item.img}
                                    className="object-cover object-center w-full h-full transform hover:scale-110 transition-transform duration-700"
                                />
                                {/* Optional overlay effect */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
                            </div>

                            {/* Text Section */}
                            <div className="p-5 text-center">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center mt-1">
                <button
                    className="
                    group
                    flex items-center gap-2
                    px-6 py-3
                    bg-gradient-to-r from-red-500 to-red-600
                    text-white font-semibold
                    rounded-full
                    shadow-md
                    hover:from-red-600 hover:to-red-700
                    transition-all duration-300
                    hover:shadow-lg
                    focus:outline-none
                    focus:ring-2 focus:ring-red-400 focus:ring-offset-2
                "
                >
                    View More
                    <span className="transform transition-transform duration-300 group-hover:translate-x-1">
                        →
                    </span>
                </button>
            </div>
        </div>
    );
};

export default Projects;
