import React, { useState } from 'react';
import beyondtechnepallogo from '../../assets/beyondtechnepallogoBrightened.png';
import userIcon from '../../assets/images/nav/user.png';
import { NavLink, useNavigate } from 'react-router';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navigate = useNavigate();

    const links = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Projects', path: '/projects' },
        { name: 'Contact', path: '/contact' },
    ];

    const handleClick = () => {
    navigate('/contact#quote');
  };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
            <div className="flex items-center justify-between px-4 py-4 md:px-10 lg:px-22">
                {/* Logo */}
                <img
                    src={beyondtechnepallogo}
                    alt="Beyond Tech Nepal"
                    className="w-35 md:w-37 lg:w-45"
                />

                {/* Desktop Menu */}
                <ul className="hidden text-base font-[500] gap-4 md:flex md:text-[16px] lg:gap-8 lg:text-lg">
                    {links.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) =>
                                `relative text-gray-800 font-semibold
                                after:content-[''] after:absolute after:left-1/2 after:bottom-0
                                after:-translate-x-1/2 after:w-0 after:h-[2px]
                                after:bg-red-500 after:transition-all after:duration-300
                                hover:after:w-full hover:text-red-500
                                ${isActive ? 'text-red-500 after:w-full' : ''}`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </ul>

                {/* Desktop Account Button */}
                <button className="hidden items-center text-lg rounded-lg px-4 py-2 text-white bg-red-500 font-[500] gap-2 md:flex hover:bg-red-400" onClick={handleClick}>
                    Get Quote
                </button>

                {/* Hamburger Menu Button */}
                <button
                    className="md:hidden focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={3}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center space-y-3 pb-3 font-[500]">
                    {links.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) =>
                                `hover:text-red-500 ${
                                    isActive ? 'text-red-500 font-semibold' : ''
                                }`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}

                    {/* Mobile Account Button */}
                    <button className="flex items-center gap-2 text-black mt-0 px-4 py-2 bg-gray-100 rounded">
                        Get Quote
                    </button>
                </div>
            )}
        </nav>
    );
}
