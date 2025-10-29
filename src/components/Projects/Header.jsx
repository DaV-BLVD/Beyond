import React from 'react';

const Header = () => {
    return (
        <div
            className="
            bg-[#f6f6f6] min-h-[450px] mt-[70px] shadow-lg
            sm:min-h-[400px] 
            lg:min-h-[450px] 
        "
        >
            <div
                className="
                pt-10 pl-13
                sm:ml-5
                lg:pt-25 lg:pl-33
            "
            >
                <h1
                    className="
                    text-[30px] font-semibold text-red-600
                    md:mt-3
                    lg:text-[50px] 
                 "
                >
                    Our Projects
                </h1>
                <p
                    className="
                    text-[17px] w-[250px] my-3
                    md:w-[400px]
                    lg:w-[500px]
                "
                >
                    From advanced networking solutions to intelligent systems,
                    our projects are engineered for performance, security, and
                    innovation. We combine deep technical expertise with
                    future-focused strategies to deliver robust infrastructure.
                </p>
                <button
                    className="
                    bg-red-500 px-[15px] py-[8px] my-4 rounded-[6px] text-white font-semibold"
                >
                    Explore {`>`}
                </button>
            </div>
        </div>
    );
};

export default Header;
