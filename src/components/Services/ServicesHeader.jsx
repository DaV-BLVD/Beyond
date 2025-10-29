import React from 'react';
import background from '../../assets/images/services-1/1.jpg';

const ServicesHeader = () => {
    return (
        <div
            style={{ backgroundImage: `url(${background})` }}
            className="
            bg-cover bg-center mt-[67px] py-[40px] pb-8 pl-[35px] pr-[70px] flex items-center text-white shadow-lg

            sm:pr-[290px] min-h-[290px] 
            lg:min-h-[400px] 
            "
        >
            <title>Services</title>

            <div
                className="
                    lg:px-[70px]
            "
            >
                <h1
                    className="
                    text-[28px] font-semibold pb-3 
                    
                    md:text-[30px]
                    lg:text-[40px]
                "
                >
                    Build, Manage, and Grow your Business
                </h1>

                <p
                    className="
                    text-justify pb-4 text-[17px] w-[90%]

                    md:text-[18px] md:w-[95%]
                    lg:text-[18px] lg:w-[90%]
                "
                >
                    Seamlessly actualize client-based users after out-of-the-box
                    value. Globally embrace strategic data through frictionless
                    expertise.
                </p>

                <div
                    className="
                    
                "
                >
                    <button
                        className="
                        bg-red-500 px-[17px] py-[11px] rounded-[5px] text-white font-bold
                    "
                    >
                        See Plans
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServicesHeader;
