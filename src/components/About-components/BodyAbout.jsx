import React from 'react';

const BodyAbout = () => {
    return (
        <div
            className="min-h-[190px]
            lg:flex lg:items-center 
        "
        >
            {/* main body of the About us Page */}
            <div
                className="
                py-10 h-full mx-7 text-center
                lg:w-full lg:mx-25
                
            "
            >
                <p className="text-[42px] font-bold my-1">
                    Welcome to <span className="text-red-500">Beyond</span>{' '}
                    <span className="text-blue-600">Tech -
                        <span className='text-black'> Delivering</span> Excellence & Innovation
                    </span>
                </p>
                <p></p>
                <p className="text-[20px] text-center my-2 text-gray-600">
                    We are committed to providing world-class solutions that
                    empower businesses to thrive in the digital age. Our team of
                    experts crafts technologies tailored to your business needs.
                </p>
            </div>
        </div>
    );
};

export default BodyAbout;
