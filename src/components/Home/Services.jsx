import React from 'react';
import featuresBg from '../../assets/images/features-bg/features-bg.jpg';
import services from '../../data/services.js';
import Slider from 'react-slick';

const Services = () => {
    return (
        <div className="w-full min-h-[550px] pt-10 pb-10">
            {/* background image for features */}
            <div
                className="w-full min-h-[420px] bg-cover bg-center flex justify-center"
                style={{ backgroundImage: `url(${featuresBg})` }}
            >
                {/* features + images */}
                <section className="text-black body-font pb-10">
                    <div className="container pt-7 mx-auto">
                        {/* Section header */}
                        <div className="flex flex-col items-center text-center w-full px-2 mb-5">
                            <h1 className="sm:text-3xl text-2xl font-semibold title-font mb-2 text-white">
                                Find the Best Service for your Business
                            </h1>
                            <p className="lg:w-1/2 w-full leading-relaxed text-white px-4">
                                Explore our range of services designed to help
                                your business grow and scale with confidence.
                            </p>
                        </div>

                        {/* Cards grid */}
                        <div
                            className="
                            flex flex-wrap justify-center gap-5
                        "
                        >
                            {services.map((service) => (
                                <div
                                    key={service.id}
                                    className="
                                    w-[80%] 
                                    sm:w-[80%] 
                                    lg:w-1/5 lg:mx-1
                                    
                                "
                                >
                                    <div className="flex flex-col items-center bg-white rounded-xl shadow min-h-[360px]">
                                        <div className="w-auto">
                                            <img
                                                src={service.image}
                                                alt={service.title}
                                                className="rounded-t-xl w-full object-cover"
                                            />
                                        </div>
                                        <h3 className="text-lg font-semibold my-3 text-center">
                                            {service.title}
                                        </h3>
                                        <p
                                            className="
                                            text-gray-700 mx-7 text-justify pb-6 
                                            lg:min-h-39
                                        "
                                        >
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Services;
