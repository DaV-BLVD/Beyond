import React from 'react';
import whychooseus from '../../assets/images/header/whychooseus1.jpg';

const WhyChooseUs = () => {
    return (
        <div
            className="
            flex items-center justify-center
        "
        >
            <div
                className="
                w-[90%]
                lg:flex lg:flex-row lg:items-center lg:justify-center lg:w-full lg:h-[700px] lg:pt-3
            "
            >
                {/* 
                    this div shown only when in small screens [phone] 
                    not shown in sm, md, and lg.
                */}
                <div
                    className="
                    text-center mt-8
                    lg:hidden
                "
                >
                    <p
                        className="
                        text-[33px] mx-3 font-bold my-3
                        sm:block sm:text-[30.4px] sm:mx-5 sm:font-bold sm:my-3 
                        md:block md:text-[40.4px] md:mx-5 md:font-bold md:my-3
                    "
                    >
                        What Makes Us the
                        <br />
                        <span
                            className="
                            bg-[rgb(248,34,63)] text-white px-2 py-1
                        "
                        >
                            Ideal Partner?
                        </span>
                    </p>
                </div>
                {/* Why Choose Us Image container*/}
                <div
                    className="
                    flex items-center justify-center my-4
                    lg:w-[38%] lg:h-[90%] lg:ml-5 lg:flex lg:items-center lg:justify-center"
                >
                    <img
                        src={whychooseus}
                        alt=""
                        className="
                        w-75 rounded-[15px]
                        sm:w-100
                        lg:w-130 lg:rounded-[20px]
                        "
                    />
                </div>

                {/* Why Choose Us Text container */}
                <div
                    className="
                    flex flex-col items-centers
                    lg:w-[35%] lg:h-[70%] lg:ml-[25px]
                    "
                >
                    <p
                        className="
                        hidden 
                        lg:block lg:text-[50.4px] lg:mx-5 lg:font-bold lg:my-3
                    "
                    >
                        What Makes Us the{' '}
                        <span
                            className="
                        lg:bg-[rgb(248,34,63)] lg:text-white lg:px-3 lg:py-1 lg:text-[45.5px]
                        "
                        >
                            Ideal Partner?
                        </span>
                    </p>

                    <p
                        className="
                        text-[23px] font-semibold text-center mb-2
                        lg:text-[23px] lg:mx-5 lg:my-4 lg:font-semibold lg:text-left
                    "
                    >
                        We are working with{' '}
                        <span
                            className="
                            bg-[#1850ff] text-white px-2 py-1
                    "
                        >
                            15+
                        </span>{' '}
                        years experience.
                    </p>

                    <p
                        className="
                        text-justify text-[17px] mb-4
                        sm:w-[85%] sm:text-justify sm:self-center
                        lg:w-[85%] lg:my-4 lg:text-[17px] lg:text-gray-600 lg:self-start lg:mx-5
                    "
                    >
                        Our wide range of services and carefully crafted
                        solutions are designed to support your growth, increase
                        efficiency, and give you the confidence to take your
                        business to the next level. Dive in and see how we can
                        make your vision a reality.
                    </p>

                    <span
                        className="
                        flex self-center
                        lg:self-start
                    "
                    >
                        <button
                            className="
                            px-6 py-2 border-3 font-bold border-blue hover:bg-blue-600 hover:text-white hover:border-white  
                            lg:ml-5 lg:px-5 lg:py-2 lg:border-3 lg:font-bold lg:border-blue lg:hover:bg-blue-600 lg:hover:text-white lg:hover:border-white lg:my-4
                        "
                        >
                            Learn More
                        </button>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
