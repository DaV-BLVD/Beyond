import React from 'react';

const BodyAbout = () => {
    return (
        <div
            className="min-h-[450px]
            lg:flex lg:items-center 
        "
        >
            {/* main body of the About us Page */}
            <div
                className="
                py-10 h-full mx-7 text-center
                lg:w-[45%] lg:ml-35 lg:text-left
            "
            >
                <p className="text-[42px] font-bold my-1">
                    Welcome to <span className="text-red-500">Beyond</span>{' '}
                    <span className="text-blue-600">Tech</span>
                </p>
                <p className="text-[25px] text-blue-600 font-semibold my-2">
                    Delivering Excellence & Innovation
                </p>
                <p className="text-[20px] text-justify my-2 text-gray-600">
                    We are committed to providing world-class solutions that
                    empower businesses to thrive in the digital age. Our team of
                    experts crafts technologies tailored to your business needs.
                </p>
                <ul className="ml-4 my-2 text-[20px] text-gray-600 text-left">
                    <li>Tailored IT Solutions</li>
                    <li>Experienced Professionals</li>
                    <li>Reliable Customer Support</li>
                </ul>
                <button className="w-full bg-black h-10 text-white text-[20px] rounded-2xl">
                    Get a Quote
                </button>
            </div>
        </div>
    );
};

export default BodyAbout;
