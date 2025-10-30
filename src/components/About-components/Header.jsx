import React from 'react';
import bg from '../../assets/images/about-us/bg.jpg';

const Header = () => {
    return (
        <div
            className="
            mt-17 w-full overflow-hidden min-h-[350px] flex flex-col items-center bg-[#f7f7f7]
            md:flex-row
            lg:relative lg:max-w-full lg:h-[480px] lg:mx-auto
        "
        >
            <title>About</title>

            <div className="w-full h-[350px] flex flex-col justify-center ">
                <div
                    className="
                    h-auto ml-7 my-15
                    sm:ml-12 
                    lg:w-[100%] lg:ml-30 
                "
                >
                    <h1
                        className="
                        text-[27px] font-[800] mb-4 w-[90%] text-center
                        sm:w-[80%] sm:text-left
                        md:w-[100%]
                        lg:text-[48px]
                    "
                    >
                        We’re passionate about creating outstanding experiences
                        for you.
                    </h1>
                    <p
                        className="text-[18px] w-[86%] text-center
                        sm:w-[70%] sm:text-left
                    "
                    >
                        We are dedicated to delivering quality, innovation, and
                        trust. Our team works tirelessly to create solutions
                        that inspire, empower, and make a lasting impact.
                    </p>
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <img src={bg} alt="" className='
                    sm:w-[60%] md:w-[100%]
                '/>
            </div>
        </div>
    );
};

export default Header;
