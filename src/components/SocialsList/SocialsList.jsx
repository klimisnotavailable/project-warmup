import { BsFacebook,BsTwitter,BsInstagram,BsPinterest } from "react-icons/bs";

const SocialsList = () => {
    return (
        <ul className="flex gap-3 ">
            <li><a  href=""><BsFacebook className="border-4 border-white rounded-full hover:border-indigo-800 text-white" size={40}/></a></li>
            <li><a  href=""><BsTwitter className="border-4 border-white rounded-full hover:border-indigo-800 text-white" size={40}/></a></li>
            <li><a  href=""><BsInstagram className="border-4 border-white rounded-full hover:border-indigo-800 text-white" size={40}/></a></li>
            <li><a  href=""><BsPinterest className="border-4 border-white rounded-full hover:border-indigo-800 text-white" size={40}/></a></li>
        </ul>
    )
};

export default SocialsList;