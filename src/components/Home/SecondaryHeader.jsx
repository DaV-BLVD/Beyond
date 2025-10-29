import React from 'react';
import icons from './secondaryHeaderData.js';

const SecondaryHeader = () => {
    return (
        <section className="flex w-full items-center justify-center bg-[rgb(247,247,250)] py-10">
            <div className="w-[90%] max-w-[1256px] text-center">
                <h2 className="text-[26px] sm:text-[30px] font-semibold">
                    Get Started with your{' '}
                    <span className="text-red-500">Business</span>
                </h2>

                <div
                    className="
                    mt-8 grid grid-cols-2 gap-8
                    sm:grid-cols-3
                    md:grid-cols-4
                    lg:grid-cols-5
                    xl:grid-cols-6
                    justify-items-center
                "
                >
                    {icons.map((item, index) => (
                        <div
                            key={index}
                            className="
                            flex flex-col items-center text-center
                            relative text-gray-800 font-semibold
                                    after:content-[''] after:absolute after:left-1/2 after:bottom-0
                                    after:-translate-x-1/2 after:w-0 after:h-[2px]
                                    after:bg-red-500 after:transition-all after:duration-300
                                    hover:after:w-full hover:text-red-500
                        "
                        >
                            <div className="text-[45px] sm:text-[55px] text-red-500 mb-2">
                                {<item.icon />}
                            </div>
                            <p className="mt-2 text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px]">
                                {item.title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SecondaryHeader;
