import React from 'react';

const Form = () => {
    return (
        <div>
            <div
                className="w-full flex justify-center px-5 md:px-10 py-10 bg-gray-50"
                data-aos="fade-right"
            >
                <form
                    className="w-full max-w-2xl bg-white shadow-md rounded-lg p-8"
                    onSubmit={(e) => e.preventDefault()}
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
            </div>
        </div>
    );
};

export default Form;
