import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";
import { CgNametag } from "react-icons/cg";

const Header = () => {
    return (
    <header className="bg-indigo-600 flex justify-between p-10">
        <Logo><CgNametag/> AUCODE</Logo>
        <Navigation/>
    </header>
    )
};
export default Header;
