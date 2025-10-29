import React, { useState } from 'react';
import faqData from '../../data/faqData';
import { FaPlus, FaMinus } from 'react-icons/fa';

const Body = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div
            className="
            min-h-[500px] mt-[45px]
        "
        >
            <div
                className="

            "
            >
                <div className="w-full bg-[#f9fafb] py-10 px-5 sm:px-10 md:px-20">
                    <div className="max-w-1xl mx-auto">
                        <h2
                            className="
                            text-3xl sm:text-4xl font-semibold text-center mb-10
                        "
                        >
                            Frequently Asked Questions
                        </h2>

                        <div
                            className="
                            space-y-5
                        "
                        >
                            {faqData.map((faq, index) => (
                                <div
                                    key={faq.id}
                                    className="bg-white shadow-md rounded-lg p-5 transition-all duration-300"
                                >
                                    <button
                                        className="w-full flex justify-between items-center text-left"
                                        onClick={() => toggleFAQ(index)}
                                    >
                                        <span className="text-lg sm:text-xl font-medium text-gray-800">
                                            {faq.question}
                                        </span>
                                        <span className="text-red-500 text-lg sm:text-xl">
                                            {activeIndex === index ? (
                                                <FaMinus />
                                            ) : (
                                                <FaPlus />
                                            )}
                                        </span>
                                    </button>

                                    <div
                                        className={`overflow-hidden transition-all duration-300 ${
                                            activeIndex === index
                                                ? 'max-h-40 mt-3'
                                                : 'max-h-0'
                                        }`}
                                    >
                                        <p className="text-gray-700 text-base sm:text-[17px] leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Body;
