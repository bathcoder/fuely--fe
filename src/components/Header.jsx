import { Link } from "react-router-dom";

//this should contain:
//1. LOGO AND NAME
//2. login/signup button
//3. Cog wheel (options)?

const Header = () => {
    return (
        <div className="header">
        <h1>
        Fuely
        </h1>
        <p>
            <Link to={"/login"}>Log in / Sign up</Link>
        </p>
        </div>
    );
};

export default Header;