import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <ul className="nav">
            <li className="nav-item">
                <NavLink className={({isActive}) => (isActive ? "nav-link text-light fw-bold" : "nav-link text-light")} aria-current="page" to="/">
                    Home
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className={({isActive}) => (isActive ? "nav-link text-light fw-bold" : "nav-link text-light")} aria-current="page" to="/blogs">
                    Blogs
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className={({isActive}) => (isActive ? "nav-link text-light fw-bold" : "nav-link text-light")} to="/about">
                    About
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className={({isActive}) => (isActive ? "nav-link text-light fw-bold" : "nav-link text-light")} to="/contacts">
                    Contacts
                </NavLink>
            </li>
        </ul>
    );
};

export default Menu;
