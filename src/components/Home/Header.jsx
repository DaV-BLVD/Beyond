import { useState, useEffect } from 'react';
import { slides } from '../../data/slidesData.js';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

const Header = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    // Auto-slide every 4s
    useEffect(() => {
        const timer = setInterval(nextSlide, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative mt-17 w-full max-w-full h-[450px] mx-auto overflow-hidden shadow-lg">
            {/* Slides Container */}
            <div
                className="flex transition-transform ease-in-out duration-700"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                }}
            >
                {slides.map((slide, index) => (
                    <div key={index} className="w-full flex-shrink-0 relative">
                        {/* Background Image */}
                        <img
                            src={slide.url}
                            alt={slide.title}
                            className="w-full h-[450px] object-cover"
                        />

                        {/* Overlay content */}
                        <div
                            className="
                            absolute inset-0 x flex flex-col mx-6 text-black w-[255px] h-[300px] mt-[50px]
                            sm:w-[380px] sm:h-[340px] sm:ml-11
                            md:ml-15
                            lg:w-[600px] lg:ml-30
                            "
                        >
                            <div
                                className="
                                flex items-center
                            "
                            >
                                <h2
                                    className="
                                    text-[32px] font-semibold h-[140px] 
                                    sm:text-[40px] sm:h-[200px] sm:w-[350px]
                                    md:text-[43px] md:w-[450px]
                                    lg:text-[50px] lg:w-[550px] lg:h-[180px]
                                "
                                >
                                    {slide.title}
                                </h2>
                            </div>

                            <p
                                className="
                                text-[17px] h-[150px] my-5
                                sm:mb-3 sm:h-[80px] sm:my-0 sm:w-[320px]
                                md:w-[360px] md:text-[18px]
                                lg:w-[500px]
                            "
                            >
                                {slide.description}
                            </p>
                            <div
                                className="flex gap-2 text-[10px]
                                sm:text-[12px] 
                                md:text-[13px]
                            "
                            >
                                <button
                                    className="
                                    bg-black font-semibold hover:bg-red-500 hover:border-none text-white px-5 py-3 rounded-lg transition
                                    "
                                >
                                    {slide.buttonText1.toUpperCase()}
                                </button>
                                <button
                                    className="
                                    bg-black font-semibold hover:bg-red-500 hover:border-none text-white px-6 py-3 rounded-lg transition
                                    "
                                >
                                    {slide.buttonText2.toUpperCase()}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Left/Right Arrows */}
            <button
                onClick={prevSlide}
                className="hidden absolute top-1/2 left-5 -translate-y-1/2 text-black p-2 rounded-full hover:bg-black/50 hover:text-white transition"
            >
                <BsChevronCompactLeft size={16} />
            </button>

            <button
                onClick={nextSlide}
                className="hidden absolute top-1/2 right-5 -translate-y-1/2 text-black p-2 rounded-full hover:bg-black/50 hover:text-white transition"
            >
                <BsChevronCompactRight size={16} />
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-1 rounded-full cursor-pointer transition ${
                            index === currentIndex ? 'bg-white' : 'bg-gray-400'
                        }`}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Header;
