import NavLink from "../NavLink/NavLink";

const Navigation = ({className}) => {
    return(
        <ul className={className}>
            <li><NavLink>Skills</NavLink></li>
            <li><NavLink>Projects</NavLink></li>
            <li><NavLink>Testimonials</NavLink></li>
        </ul>
    )
};

export default Navigation