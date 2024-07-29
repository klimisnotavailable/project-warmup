import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";

const Header = () => {
    return (
    <header className="bg-indigo-600 flex justify-between p-10">
        <Logo>{"AUCODE"}</Logo>
        <Navigation/>
    </header>
    )
};
export default Header;
