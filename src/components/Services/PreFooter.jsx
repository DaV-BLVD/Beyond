import React from 'react';
import { CiClock1 } from 'react-icons/ci';
{
    /* <CiClock1 /> */
}

import { LuFileSearch } from 'react-icons/lu';
{
    /* <LuFileSearch /> */
}

import { GiStumpRegrowth } from 'react-icons/gi';
{
    /* <GiStumpRegrowth /> */
}

const SecondHeader = () => {
    return (
        <div
            className="
                flex justify-center
        "
        >
            <div
                className="
            pb-15
            md:grid md:grid-cols-3
            lg:grid lg:grid-cols-3 lg:w-[93%] lg:place-items-center
        "
            >
                <div
                    className="
                flex flex-col items-center text-center pt-10
            "
                >
                    {/* icon Starts [from blue Clock] */}
                    <CiClock1
                        className="
                    w-[70px] h-[70px] bg-red-500 text-white rounded-full p-1 
                    sm:w-[85px] sm:h-[85px]
                    md:w-[60px] md:h-[60px]
                "
                    />
                    <div
                        className="
                    flex flex-col items-center mt-4"
                    >
                        <p
                            className="
                        text-[20px] font-semibold py-2
                        sm:text-[25px]
                        md:text-[22px]
                        "
                        >
                            Get your Product in Time
                        </p>
                        <p
                            className="
                        text-[18px] text-justify w-[75%]
                        sm:text-[20px] sm:w-[70%]
                        md:text-[17px]
                        lg:text-[16px] lg:w-[90%]
                        "
                        >
                            Launch your ideas faster with our dedicated team,
                            keeping your projects on track every step of the
                            way. Launch your ideas faster with our dedicated
                            team.
                        </p>
                    </div>
                </div>
                <div
                    className="
                flex flex-col items-center text-center mt-10
            "
                >
                    {/* icon Starts [from blue Clock] */}
                    <LuFileSearch
                        className="
                    w-[70px] h-[70px] bg-red-500 text-white rounded-full p-1
                    sm:w-[85px] sm:h-[85px]
                    md:w-[60px] md:h-[60px]
                "
                    />
                    <div
                        className="
                flex flex-col items-center mt-4"
                    >
                        <p
                            className="
                        text-[20px] font-semibold py-2
                        sm:text-[25px]
                        md:text-[22px]
                        "
                        >
                            Get your Product in Time
                        </p>
                        <p
                            className="
                        text-[18px] text-justify w-[75%]
                        sm:text-[20px] sm:w-[70%]
                        md:text-[17px]
                        lg:text-[16px] lg:w-[90%]
                        "
                        >
                            Launch your ideas faster with our dedicated team,
                            keeping your projects on track every step of the
                            way. Launch your ideas faster with our dedicated
                            team.
                        </p>
                    </div>
                </div>
                <div
                    className="
                flex flex-col items-center text-center mt-10
            "
                >
                    {/* icon Starts [from blue Clock] */}
                    <GiStumpRegrowth
                        className="
                    w-[70px] h-[70px] bg-red-500 text-white rounded-full p-1
                    sm:w-[85px] sm:h-[85px]
                    md:w-[60px] md:h-[60px]
                "
                    />
                    <div
                        className="
                flex flex-col items-center mt-4"
                    >
                        <p
                            className="
                        text-[20px] font-semibold py-2
                        sm:text-[25px]
                        md:text-[22px]
                        "
                        >
                            Get your Product in Time
                        </p>
                        <p
                            className="
                        text-[18px] text-justify w-[75%]
                        sm:text-[20px] sm:w-[70%]
                        md:text-[17px]
                        lg:text-[16px] lg:w-[90%]
                        "
                        >
                            Launch your ideas faster with our dedicated team,
                            keeping your projects on track every step of the
                            way. Launch your ideas faster with our dedicated
                            team.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecondHeader;
