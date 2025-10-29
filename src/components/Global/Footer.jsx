import React from 'react';

const Footer = () => {
    return (
        <footer className="text-gray-600 body-font bg-gray-100 border-t">
            {/* Main Footer Section */}
            <div className="container px-6 md:px-10 py-12 mx-auto">
                <div className="flex flex-wrap justify-center md:justify-between text-center md:text-left gap-8">
                    
                    {/* Quick Links */}
                    <div className="w-full sm:w-1/2 md:w-1/4 px-4">
                        <h2 className="border-b-2 border-gray-300 font-semibold text-gray-900 tracking-widest text-lg mb-4">
                            Quick Links
                        </h2>
                        <ul className="space-y-2">
                            {['Home', 'About Us', 'Projects', 'Services'].map(
                                (item) => (
                                    <li key={item}>
                                        <a
                                            href="#"
                                            className="text-gray-600 hover:text-gray-800 transition-colors"
                                        >
                                            {item}
                                        </a>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div className="w-full sm:w-1/2 md:w-1/4 px-4">
                        <h2 className="border-b-2 border-gray-300 font-semibold text-gray-900 tracking-widest text-lg mb-4">
                            Contact Us
                        </h2>
                        <ul className="space-y-2">
                            <li>Baluwatar, Kathmandu</li>
                            <li>
                                <a
                                    href="mailto:info@beyondtechnepal.com"
                                    className="hover:text-gray-800"
                                >
                                    info@beyondtechnepal.com
                                </a>
                            </li>
                            <li>
                                <a
                                    href="tel:014500062"
                                    className="hover:text-gray-800"
                                >
                                    01-4500062
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Let's Connect */}
                    <div className="w-full sm:w-1/2 md:w-1/3 px-6 py-5 bg-white shadow-lg rounded-md">
                        <h2 className="font-bold text-gray-900 tracking-widest text-lg mb-3">
                            Let’s Connect
                        </h2>
                        <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded transition-all">
                            Get in Touch
                        </button>
                        <p className="text-gray-500 text-md mt-3 md:text-justify">
                            We're here to help and answer any question you might
                            have.
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-gray-100 border-t-2 border-gray-200">
                <div className="container px-6 md:px-10 py-6 mx-auto flex flex-col sm:flex-row items-center justify-between">
                    <p className="text-sm text-gray-500 text-center sm:text-left">
                        © 2025 Beyond Tech Nepal —{' '}
                        <span className="text-gray-600">
                            All Rights Reserved
                        </span>
                    </p>

                    <div className="flex justify-center sm:justify-end space-x-4 mt-3 sm:mt-0">
                        {/* Facebook */}
                        <a
                            href="#"
                            className="text-gray-500 hover:text-gray-700"
                        >
                            <svg
                                fill="currentColor"
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </a>

                        {/* Twitter */}
                        <a
                            href="#"
                            className="text-gray-500 hover:text-gray-700"
                        >
                            <svg
                                fill="currentColor"
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                        </a>

                        {/* Instagram */}
                        <a
                            href="#"
                            className="text-gray-500 hover:text-gray-700"
                        >
                            <svg
                                fill="none"
                                stroke="currentColor"
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <rect
                                    width="20"
                                    height="20"
                                    x="2"
                                    y="2"
                                    rx="5"
                                    ry="5"
                                />
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </a>

                        {/* LinkedIn */}
                        <a
                            href="#"
                            className="text-gray-500 hover:text-gray-700"
                        >
                            <svg
                                fill="currentColor"
                                stroke="currentColor"
                                strokeWidth="0"
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="none"
                                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                                ></path>
                                <circle
                                    cx="4"
                                    cy="4"
                                    r="2"
                                    stroke="none"
                                ></circle>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
