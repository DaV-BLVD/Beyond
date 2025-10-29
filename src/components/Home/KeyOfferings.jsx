import React, { useEffect, useRef } from 'react';
import { midCardData } from '../../data/keyOfferings';

const KeyOfferings = () => {
    const scrollRef = useRef(null);

    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        // Duplicate child nodes for seamless looping
        container.innerHTML += container.innerHTML;

        let scrollPos = 0;
        const speed = 1;
        let paused = false;

        const handleHover = (state) => (paused = state);
        container.addEventListener('mouseenter', () => handleHover(true));
        container.addEventListener('mouseleave', () => handleHover(false));

        const loop = () => {
            if (!paused) {
                scrollPos += speed;
                if (scrollPos >= container.scrollWidth / 2) scrollPos = 0;
                container.scrollLeft = scrollPos;
            }
            requestAnimationFrame(loop);
        };

        const animation = requestAnimationFrame(loop);
        return () => cancelAnimationFrame(animation);
    }, []);

    return (
        <section className="w-[95%] mx-auto md:py-15 overflow-hidden">
            {/* Title Section */}
            <div className="text-center mb-12 px-4">
                <h2 className="text-3xl md:text-4xl font-extrabold text-red-500 tracking-tight">
                    Key Offerings
                </h2>
                <p className="text-gray-600 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
                    Discover innovative, future-ready solutions designed to
                    empower your business and drive digital growth.
                </p>
            </div>

            {/* Scrolling Cards */}
            <div
                ref={scrollRef}
                className="flex gap-3 sm:gap-8 md:gap-10 overflow-x-hidden px-6 py-2 md:px-12"
            >
                {midCardData.map((card, index) => (
                    <article
                        key={index}
                        className="group min-w-[260px] sm:min-w-[300px] md:min-w-[340px] lg:min-w-[380px]
                       bg-white rounded-2xl shadow-md hover:shadow-2xl
                       transition-all duration-300 hover:-translate-y-1 sm:pb-2"
                    >
                        {/* Image */}
                        <div className="overflow-hidden rounded-t-2xl">
                            <img
                                src={card.url}
                                alt={card.title}
                                loading="lazy"
                                className="w-full h-48 sm:h-56 md:h-60 object-cover 
                           transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>

                        {/* Content */}
                        <div className="p-5 md:p-6 flex flex-col justify-between h-auto sm:h-[280px]">
                            <div
                                className="
                                min-h-[220px]
                                sm:min-h-[200px]
                            "
                            >
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 text-center lg:text-[23px] min-h-[50px]">
                                    {card.title}
                                </h3>
                                <p className="text-sm text-gray-500 mt-1 lg:text-[18px] text-center min-h-[30px]">
                                    {card.subTitle}
                                </p>
                                <p className="text-gray-600 text-sm mt-3 text-justify leading-relaxed lg:text-[15px]">
                                    {card.description}
                                </p>
                            </div>

                            <button
                                className="
                                mt-4 px-5 py-2 bg-blue-600 text-white text-sm font-semibold rounded-md hover:bg-[rgb(57,43,255)] transition-colors duration-300 self-center sm:self-start 
                            "
                            >
                                {card.button}
                            </button>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default KeyOfferings;
