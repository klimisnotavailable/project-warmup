import NavLink from "../NavLink/NavLink";

const Navigation = () => {
    return(
        <ul className="flex space-x-4">
            <li><NavLink>Skills</NavLink></li>
            <li><NavLink>Projects</NavLink></li>
            <li><NavLink>Testimonials</NavLink></li>
        </ul>
    )
};

export default Navigation