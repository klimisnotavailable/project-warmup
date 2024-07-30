import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";
import { CgNametag } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";
import { useState } from "react";

const Header = () => {
    const [mobileMenuIsOpen,setMobileMenuIsOpen] = useState(false);

    const openMobileMenu = () => {
        setMobileMenuIsOpen(true)
    };

    const closeMobileMenu = () => {
        setMobileMenuIsOpen(false)
    };

    return (
    <header className="bg-indigo-600 flex justify-between items-baseline p-10">
        <Logo><CgNametag/> AUCODE</Logo>
        <Navigation className="ssm:hidden md:flex space-x-4"/>  
        {mobileMenuIsOpen && <Navigation className="ssm:block md:hidden space-y-4"/>}  
        {mobileMenuIsOpen ? 
        <AiOutlineClose size={30} className="text-white ssm:block md:hidden" onClick={closeMobileMenu}/>:
        <HiMenuAlt1 size={30} className="text-white ssm:block md:hidden"onClick={openMobileMenu} /> }    
    </header>
    )
};
export default Header;
