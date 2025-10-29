import { IoChatboxOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { IoCallOutline } from "react-icons/io5";

const quickHelp = [
    {
        id: 'id1',
        icon: IoChatboxOutline,
        title: 'Chat with us',
        description: `We've got live Social Experts waiting to help you Monday to Friday from 9am to 5pm EST.`,
        link: 'Chat With Us',
    },
    {
        id: 'id2',
        icon: TfiEmail,
        title: 'Email Us',
        description: `Drop us an email at info@beyondtechnepal.com and you'll receive a reply within 24 hours.`,
        link: 'Email',
    },
    {
        id: 'id3',
        icon: IoCallOutline,
        title: 'Give us a call',
        description: `Call our experts Monday to Friday from 9am to 5pm EST.`,
        link: '01-4500062',
    },
];

export default quickHelp;
