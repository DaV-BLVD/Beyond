import React from 'react';

const FindMore = () => {
    const cards = [
        {
            title: 'Shooting Stars',
            desc: 'Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.',
            icon: (
                <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-10 h-10"
                    viewBox="0 0 24 24"
                >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
            ),
        },
        {
            title: 'The Catalyzer',
            desc: 'Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.',
            icon: (
                <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-10 h-10"
                    viewBox="0 0 24 24"
                >
                    <circle cx="6" cy="6" r="3" />
                    <circle cx="6" cy="18" r="3" />
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
                </svg>
            ),
        },
        {
            title: 'Neptune',
            desc: 'Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.',
            icon: (
                <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-10 h-10"
                    viewBox="0 0 24 24"
                >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                </svg>
            ),
        },
    ];

    return (
        <section
            className="
            min-h-[350px]
            bg-[linear-gradient(28deg,_rgba(48,48,48,1)_0%,_rgba(150,41,41,1)_51%,_rgba(191,84,84,1)_63%,_rgba(247,37,37,1)_100%)] flex flex-col items-center justify-center text-white px-6 py-12
      "
        >
            <h2 className="text-3xl md:text-[35px] font-semibold mb-10 text-center">
                Find More About Beyond Tech
            </h2>

            <div className="container mx-auto flex flex-wrap justify-center gap-6">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="p-6 md:w-4/5 bg-transparent text-center flex flex-col items-center max-w-sm"
                    >
                        <div className="w-20 h-20 inline-flex items-center justify-center border-2 rounded-full text-white mb-5">
                            {card.icon}
                        </div>

                        <h3 className="text-lg font-medium mb-3">
                            {card.title}
                        </h3>

                        <p className="text-sm leading-relaxed text-justify mb-4">
                            {card.desc}
                        </p>

                        <a
                            href="#"
                            className="inline-flex items-center text-white hover:underline"
                        >
                            Learn More
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-4 h-4 ml-2"
                                viewBox="0 0 24 24"
                            >
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FindMore;
