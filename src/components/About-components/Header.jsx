import React from 'react';

const Header = () => {
    return (
        <div
            className="
            mt-17 w-full overflow-hidden min-h-[350px] flex items-center 
            bg-[#f7f7f7] lg:relative lg:max-w-full lg:h-[480px] lg:mx-auto
        "
        >
            <title>About</title>

            <div className="w-full h-full flex flex-col justify-center">
                <div
                    className="
                    h-auto ml-7 my-15
                    sm:ml-12
                    lg:w-[60%] lg:ml-30 
                "
                >
                    <h1
                        className="
                        text-[27px] font-[800] mb-4 w-[90%]
                        sm:w-[80%]
                        lg:text-[48px]
                    "
                    >
                        We’re passionate about creating outstanding experiences
                        for you.
                    </h1>
                    <p
                        className="text-[18px] w-[86%]
                        sm:w-[70%]
                    "
                    >
                        We are dedicated to delivering quality, innovation, and
                        trust. Our team works tirelessly to create solutions
                        that inspire, empower, and make a lasting impact.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Header;
