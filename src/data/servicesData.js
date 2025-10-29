import cloud from '../assets/images/totalServiceList/cloud.png';
import consult from '../assets/images/totalServiceList/consult.png';
import security from '../assets/images/totalServiceList/security.png';
import network from '../assets/images/totalServiceList/network.png';
import custom from '../assets/images/totalServiceList/custom.png';

export const servicesData = [
    {
        id: 1,
        title: 'Cloud Transformation Solutions',
        description:
            'Empowering businesses with scalable, secure, and flexible cloud infrastructures that enable agility and innovation across industries.',
        image: cloud, // Recommended size: 800x500
        icon: '☁️',
    },
    {
        id: 2,
        title: 'Digital Transformation Services',
        description:
            'Guiding organizations to embrace next-generation technology, streamline operations, and accelerate digital adoption.',
        image: consult, // 800x500
        icon: '💡',
    },
    {
        id: 3,
        title: 'Cyber Defense & Compliance',
        description:
            'Providing advanced protection strategies to safeguard critical assets, ensure compliance, and maintain customer trust.',
        image: security, // 800x500
        icon: '🔒',
    },
    {
        id: 4,
        title: 'IT Infrastructure & Connectivity',
        description:
            'Building high-performance networks and scalable infrastructures that enhance reliability, speed, and uptime.',
        image: network, // 800x500
        icon: '🌐',
    },
    {
        id: 5,
        title: 'Custom Software Engineering',
        description:
            'Creating powerful, tailored software solutions to solve complex business challenges and deliver measurable impact.',
        image: custom, // 800x500
        icon: '⚙️',
    },
];
