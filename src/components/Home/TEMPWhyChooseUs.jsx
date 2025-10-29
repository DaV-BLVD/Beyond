import React from 'react';
import whychooseus from '../../assets/images/header/whychooseus1.jpg';

const WhyChooseUs = () => {
    return (
        <div className="flex items-center justify-center w-full h-[700px] pt-3">
            {/* Why Choose Us Image container*/}
            <div className="w-[38%] h-[90%] ml-5 flex items-center justify-center">
                <img
                    src={whychooseus}
                    alt=""
                    className="w-130 rounded-[20px]"
                />
            </div>

            {/* Why Choose Us Text container */}
            <div className="w-[35%] h-[60%] ml-[25px]">
                <p className="text-[50.4px] mx-5 font-bold my-3">
                    What Makes Us the{' '}
                    <span className="bg-[rgb(248,34,63)] text-white px-3 py-1 text-[45.5px]">
                        Ideal Partner?
                    </span>
                </p>

                <p className="text-[23px] mx-5 my-4 font-semibold">
                    We are working with{' '}
                    <span className="bg-[#1850ff] text-white px-2">15+</span>{' '}
                    years experience.
                </p>

                <p className="w-[65%] mx-5 my-4 text-[17px] text-gray-600">
                    Our wide range of services and carefully crafted solutions
                    are designed to support your growth, increase efficiency,
                    and give you the confidence to take your business to the
                    next level. Dive in and see how we can make your vision a
                    reality.
                </p>

                <button className="ml-5 px-5 py-2 border-3 font-bold border-blue hover:bg-blue-600 hover:text-white hover:border-white my-4">
                    Learn More
                </button>
            </div>
        </div>
    );
};

export default WhyChooseUs;
