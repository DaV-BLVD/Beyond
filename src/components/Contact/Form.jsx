import React, { useEffect } from 'react';
import { useLocation } from 'react-router';

const Form = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
        <div>
            <div
                className="w-full flex justify-center px-5 md:px-10 py-10 bg-gray-50 gap-7"
                data-aos="fade-right"
            >
                <form
                    className="w-full max-w-2xl bg-white shadow-md rounded-lg p-8"
                    onSubmit={(e) => e.preventDefault()}
                    id="quote"
                >
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                        Contact Form
                    </h2>

                    {/* First & Last Name */}
                    <div className="flex flex-col md:flex-row md:gap-6 mb-4">
                        <div className="flex flex-col w-full md:w-1/2 mb-4 md:mb-0">
                            <label
                                htmlFor="firstName"
                                className="text-gray-700 font-medium mb-1"
                            >
                                First Name:
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                required
                                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                            />
                        </div>

                        <div className="flex flex-col w-full md:w-1/2">
                            <label
                                htmlFor="lastName"
                                className="text-gray-700 font-medium mb-1"
                            >
                                Last Name:
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                required
                                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col mb-4">
                        <label
                            htmlFor="email"
                            className="text-gray-700 font-medium mb-1"
                        >
                            Email Address:
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                    </div>

                    {/* Question */}
                    <div className="flex flex-col mb-4">
                        <label
                            htmlFor="question"
                            className="text-gray-700 font-medium mb-1"
                        >
                            Your Question:
                        </label>
                        <textarea
                            id="question"
                            name="question"
                            rows="5"
                            required
                            className="border border-gray-300 rounded-md p-2 resize-none focus:outline-none focus:ring-2 focus:ring-red-500"
                        ></textarea>
                    </div>

                    {/* Privacy Note */}
                    <p className="text-sm text-gray-600 mb-5 text-justify">
                        By submitting my data, I consent to Beyond Tech
                        collecting, processing, and storing my information in
                        accordance with the Beyond Tech Privacy Notice.
                    </p>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md font-medium transition-all"
                    >
                        Send
                    </button>
                </form>
                <div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d517.362829766517!2d85.33404383337165!3d27.728082368284316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1957d4429403%3A0x2e8fb4f4cfe35919!2sBeyondtech%20Nepal%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1761733523560!5m2!1sen!2snp"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        className="
                        w-[600px] h-[600px]
                        rounded-2xl
                    "
                        style={{ border: 0 }}
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Form;
