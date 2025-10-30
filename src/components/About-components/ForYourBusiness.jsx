import React from 'react';

const ForYourBusiness = () => {
    const stats = [
        {
            count: '2.7K',
            label: 'Downloads',
            icon: 'M8 17l4 4 4-4m-4-5v9 M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29',
        },
        {
            count: '1.3K',
            label: 'Users',
            icon: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2 M9 7a4 4 0 110-8 4 4 0 010 8 M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75',
        },
        {
            count: '74',
            label: 'Files',
            icon: 'M3 18v-6a9 9 0 0118 0v6 M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z',
        },
        {
            count: '46',
            label: 'Places',
            icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
        },
    ];

    return (
        <div className="border-b-2 border-gray-200 py-12 px-4 sm:px-8 md:px-16 lg:px-24 bg-gray-100">
            <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-[32px] sm:text-[40px] text-red-600 font-semibold mb-4">
                    For A Service for All
                </h2>

                <p className="text-gray-600 text-[16px] sm:text-[18px] mb-4">
                    At <span className="font-semibold">Beyond Tech Nepal</span>,
                    we specialize in crafting innovative software solutions
                    tailored to meet the unique needs of every business. Our
                    team of passionate developers, designers, and strategists
                    work together to turn complex challenges into seamless
                    digital experiences. From custom web applications to
                    enterprise-grade systems, we blend creativity with
                    cutting-edge technology to help organizations grow, adapt,
                    and lead in the digital era.
                </p>

                <p className="text-gray-600 text-[16px] sm:text-[18px] mb-6">
                    We believe that great software isn’t just about code—it’s
                    about impact. That’s why we focus on delivering solutions
                    that are not only functional but also scalable, secure, and
                    user-friendly. With a deep commitment to quality and
                    collaboration, Beyond Tech Nepal continues to empower
                    businesses across industries to achieve their goals through
                    technology that truly makes a difference.
                </p>

                <p className="text-[15px] text-red-600 font-semibold cursor-pointer hover:underline transition">
                    EXPLORE BEYOND BUSINESS &gt;
                </p>
            </div>

            {/* Stats Section */}
            <section className="text-white body-font mt-10">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-4">
                        {stats.map((item, index) => (
                            <div
                                key={index}
                                className="w-full sm:w-[48%] md:w-[22%] bg-[#ff3333] border-2 border-transparent rounded-xl p-5 text-center transition-transform hover:scale-105 duration-300"
                            >
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-10 h-10 mb-2 inline-block"
                                    viewBox="0 0 24 24"
                                >
                                    <path d={item.icon}></path>
                                </svg>
                                <h2 className="text-2xl font-bold">
                                    {item.count}
                                </h2>
                                <p className="text-white text-sm">
                                    {item.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ForYourBusiness;
