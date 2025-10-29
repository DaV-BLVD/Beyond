import quickHelp from '../../data/quickHelp';

const Body = () => {
    return (
        <div
            className="
            min-h-[870px] mt-[30px]
            sm:mt-0 sm:min-h-[350px]
        "
        >
            <div
                className="
            "
            >
                <div
                    className="
                    mx-7
                    lg:pt-[50px] lg:px-[50px]
                "
                >
                    <div
                        className="
                        mb-5   
                    "
                    >
                        <h1
                            className="
                            text-[33px] my-[24px]
                            sm:my-[18px] sm:font-semibold
                    "
                        >
                            Want Quick Help?
                        </h1>
                        <p
                            className="
                            text-[18px]
                    "
                        >
                            Here are a few Way to reach us:
                        </p>
                    </div>

                    <div
                        className="
                        grid grid-cols-1 gap-5
                        sm:grid-cols-3
                    "
                    >
                        {quickHelp.map((e) => {
                            const Icon = e.icon;
                            return (
                                <div
                                    key={e.id}
                                    className="
                                    flex flex-col items-center text-center bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition-shadow
                                    
                                    "
                                >
                                    {/* icon here */}
                                    <Icon
                                        className="
                                        text-red-500 text-4xl mb-3
                                        lg:w-14 lg:h-14
                                    "
                                    />{' '}
                                    
                                    <h3
                                        className="
                                        text-lg font-semibold mb-2
                                        lg:text-[23px]
                                    "
                                    >
                                        {e.title}
                                    </h3>
                                    <p
                                        className="
                                        text-gray-600 text-md mb-4
                                        sm:min-h-[120px] sm:h-auto 
                                        lg:text-[20px] lg:w-[90%]
                                        "
                                    >
                                        {e.description}
                                    </p>
                                    <a
                                        href="#"
                                        className="
                                        bg-red-500 py-2 px-5 rounded text-white font-medium hover:underline 
                                        lg:font-semibold
                                        "
                                    >
                                        {e.link}
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Body;
