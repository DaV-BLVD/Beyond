import React from 'react';
import first from '../../assets/images/about-us/first.png';

const ServiceRange = () => {
    return (
        <div
            className="
            h-auto w-full pb-[30px] 
            md:flex md:flex-col md:items-center md:gap-10
        "
        >
            <div className="bg-[#ececec] pb-[30px] ">
                <h1 className="text-[40px] my-8 text-red-600 font-bold text-center pt-5 mx-3">
                    An Extensive Selection of Services
                </h1>

                {/* first selection of service */}
                <h1
                    className="
                        text-[30px] font-bold w-auto my-2 tracking-wide text-center
                        md:hidden
                        lg:hidden
                        "
                >
                    Software Development
                </h1>
                <div
                    className="
                    
                    flex flex-col 
                    
                    h-auto justify-center items-center 

                    md:gap-10 md:flex-row
                    lg:gap-40
                "
                >
                    <div>
                        <img
                            src={first}
                            alt=""
                            className="
                            rounded-3xl w-[300px] pb-5
                            sm:w-[350px]    
                            md:w-[400px]
                        "
                        />
                    </div>
                    <div
                        className="
                    flex flex-col items-center
                    md:w-[30%]
                    lg:w-[30%] lg:block
                    "
                    >
                        <h1
                            className="
                        
                        hidden
                        
                        md:block text-[30px] font-bold w-auto my-2 tracking-wide"
                        >
                            Software Development
                        </h1>
                        <p
                            className="md:w-auto w-[80%] text-justify text-[18px] 
                        "
                        >
                            Custom Software Development – building tailored apps
                            for specific business needs. Web Application
                            Development – creating interactive websites and
                            web-based systems. Mobile App Development –
                            developing apps for Android and iOS platforms.
                        </p>
                        <button className="py-3 bg-red-700 px-5 my-5 text-white text-[17px] rounded-[5px]">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

            {/* only shown in smaller screens; [ sm, and slammer than sm ] */}

            <div className="pb-[30px] md:hidden">
                {/* first selection of service */}
                <h1
                    className="
                        text-[30px] font-bold w-auto my-2 tracking-wide text-center pt-8 mb-5
                        md:hidden
                        lg:hidden
                        "
                >
                    Cloud & Infrastructure Services
                </h1>
                <div
                    className="
                    
                    flex flex-col 
                    
                    h-auto justify-center items-center 

                    md:gap-10 md:flex-row
                    lg:gap-40
                "
                >
                    <div>
                        <img
                            src={first}
                            alt=""
                            className="
                            rounded-3xl w-[300px] pb-5
                            sm:w-[350px]    
                            md:w-[400px]
                        "
                        />
                    </div>
                    <div
                        className="
                    flex flex-col items-center
                    md:w-[30%]
                    lg:w-[30%]
                    "
                    >
                        <h1
                            className="
                        
                        hidden
                        
                        md:block text-[30px] font-bold w-auto my-2 tracking-wide"
                        >
                            Software Development
                        </h1>
                        <p
                            className="md:w-auto w-[80%] text-justify text-[18px] 
                        "
                        >
                            Cloud Migration & Deployment – moving systems to
                            AWS, Azure, or Google Cloud. DevOps & Automation –
                            improving deployment speed and system reliability.
                            Server & Database Management – setting up and
                            maintaining secure backend systems.
                        </p>
                        <button className="py-3 bg-red-700 px-5 my-5 text-white text-[17px] rounded-[5px]">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
            <div className="bg-[#ececec] pb-[30px] md:hidden">
                {/* first selection of service */}
                <h1
                    className="
                        text-[30px] font-bold w-auto my-2 tracking-wide text-center pt-8 mb-5 
                        md:hidden
                        lg:hidden
                        "
                >
                    UI/UX Designss
                </h1>
                <div
                    className="
                    
                    flex flex-col 
                    
                    h-auto justify-center items-center 

                    md:gap-10 md:flex-row
                    lg:gap-40
                "
                >
                    <div>
                        <img
                            src={first}
                            alt=""
                            className="
                            rounded-3xl w-[300px] pb-5
                            sm:w-[350px]    
                            md:w-[400px]
                        "
                        />
                    </div>
                    <div
                        className="
                    flex flex-col items-center
                    md:w-[30%]
                    lg:w-[30%]
                    "
                    >
                        <p
                            className="md:w-auto w-[80%] text-justify text-[18px] 
                        "
                        >
                            User Interface Design – designing visually appealing
                            layouts and dashboards. User Experience Design –
                            ensuring apps are easy, intuitive, and enjoyable to
                            use. Prototyping & Wireframing – creating app
                            mockups before development.
                        </p>
                        <button className="py-3 bg-red-700 px-5 my-5 text-white text-[17px] rounded-[5px]">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
            <div className="pb-[30px] md:hidden">
                {/* first selection of service */}
                <h1
                    className="
                        text-[30px] font-bold w-auto my-2 tracking-wide text-center pt-8 mb-5
                        md:hidden
                        lg:hidden
                        "
                >
                    IT & Security Solutions
                </h1>
                <div
                    className="
                    
                    flex flex-col 
                    
                    h-auto justify-center items-center 

                    md:gap-10 md:flex-row
                    lg:gap-40
                "
                >
                    <div>
                        <img
                            src={first}
                            alt=""
                            className="
                            rounded-3xl w-[300px] pb-5
                            sm:w-[350px]    
                            md:w-[400px]
                        "
                        />
                    </div>
                    <div
                        className="
                    flex flex-col items-center
                    md:w-[30%]
                    lg:w-[30%]
                    "
                    >
                        <p
                            className="md:w-auto w-[80%] text-justify text-[18px] 
                        "
                        >
                            Cybersecurity Services – protecting systems from
                            threats and data breaches. Network Setup &
                            Monitoring – maintaining stable and secure IT
                            networks. Data Backup & Recovery – safeguarding
                            against data loss.
                        </p>
                        <button className="py-3 bg-red-700 px-5 my-5 text-white text-[17px] rounded-[5px]">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

            {/* same content shown in larger screens = [ md, lg ] */}

            <div
                className="
            pb-[30px]
            hidden
            md:block
            sm:hidden
            "
            >
                {/* second selection of service */}
                <div
                    className="flex h-auto justify-center items-center gap-40 md:gap-10
                    lg:gap-40"
                >
                    <div className="w-[30%]">
                        <h1 className="text-[30px] font-bold w-auto my-2 tracking-wide">
                            Cloud & Infrastructure Services
                        </h1>
                        <p className="w-auto text-justify text-[18px]">
                            Cloud Migration & Deployment – moving systems to
                            AWS, Azure, or Google Cloud. DevOps & Automation –
                            improving deployment speed and system reliability.
                            Server & Database Management – setting up and
                            maintaining secure backend systems.
                        </p>
                        <button className="py-3 bg-red-700 px-5 my-5 text-white text-[17px] rounded-[5px]">
                            Learn More
                        </button>
                    </div>
                    <div>
                        <img
                            src={first}
                            alt=""
                            className="w-[450px] rounded-3xl"
                        />
                    </div>
                </div>
            </div>
            {/* third selection of service */}
            <div className="bg-[#ececec] pb-[30px] md:block sm:hidden hidden">
                <div
                    className="flex h-auto justify-center items-center gap-40 md:gap-10
                    lg:gap-40"
                >
                    <div>
                        <img
                            src={first}
                            alt=""
                            className="w-[450px] rounded-3xl"
                        />
                    </div>
                    <div className="w-[30%]">
                        <h1 className="text-[30px] font-bold w-auto my-2 tracking-wide">
                            UI/UX Design
                        </h1>
                        <p className="w-auto text-justify text-[18px]">
                            User Interface Design – designing visually appealing
                            layouts and dashboards. User Experience Design –
                            ensuring apps are easy, intuitive, and enjoyable to
                            use. Prototyping & Wireframing – creating app
                            mockups before development.
                        </p>
                        <button className="py-3 bg-red-700 px-5 my-5 text-white text-[17px] rounded-[5px]">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
            <div className="pb-[30px] md:block sm:hidden hidden border-b-1">
                {/* fourth selection of service */}
                <div
                    className="flex h-auto justify-center items-center gap-40 md:gap-10
                    lg:gap-40"
                >
                    <div className="w-[30%]">
                        <h1 className="text-[30px] font-bold w-auto my-2 tracking-wide">
                            IT & Security Solutions
                        </h1>
                        <p className="w-auto text-justify text-[18px]">
                            Cybersecurity Services – protecting systems from
                            threats and data breaches. Network Setup &
                            Monitoring – maintaining stable and secure IT
                            networks. Data Backup & Recovery – safeguarding
                            against data loss.
                        </p>
                        <button className="py-3 bg-red-700 px-5 my-5 text-white text-[17px] rounded-[5px]">
                            Learn More
                        </button>
                    </div>
                    <div>
                        <img
                            src={first}
                            alt=""
                            className="w-[450px] rounded-3xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceRange;
