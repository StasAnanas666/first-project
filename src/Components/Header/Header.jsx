import logo from "../../logo.svg";
import Menu from "./Menu/Menu";

const Header = () => {
    return (
        <header className="py-2 fixed-top mb-5 bg-secondary">
            <div className="container d-flex justify-content-between align-items-center">
                <img src={logo} alt="logo" width="60" />
                <Menu />
            </div>
        </header>
    );
};

export default Header;
