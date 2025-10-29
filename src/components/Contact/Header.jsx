import React from 'react';

const header = () => {
    return (
        <div
            className="
            bg-[#f6f6f6] min-h-[450px] mt-[70px] shadow-lg
            sm:min-h-[400px] 
        "
        >
            <div
                className="
                pt-10 pl-13
                lg:pt-25 lg:pl-33
            "
            >
                <h1
                    className="
                    text-[30px] font-semibold text-red-600
                    lg:text-[50px]
                 "
                >
                    Contact Us
                </h1>
                <p
                    className="
                    text-[17px] w-[200px] my-3
                    lg:w-[400px]
                "
                >
                    Get all the Help & Support from us!
                </p>
                <button
                    className="
                    bg-red-500 px-[15px] py-[8px] my-4 rounded-[6px] text-white font-semibold"
                >
                    Ask Us Now {`>`}
                </button>
            </div>
        </div>
    );
};

export default header;
