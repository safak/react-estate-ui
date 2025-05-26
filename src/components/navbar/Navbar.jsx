// Creating a function navbar
import { useState } from "react";
import "./Navbar.scss"
import { Link } from "react-router-dom";

function Navbar(){
    const [open, setOpen] = useState(false);
    return(
        <nav>
            {/* In this we have two component left and right */}
            {/* This is our left section */}
            <div className="left">
                {/* Our Links */}
                <Link to="/" className="logo">
                   <img src="/logo.png" alt="" />
                   <span>Real Estate</span>
                </Link>
                <Link to="/">Home</Link>
                <Link to="/">About</Link>
                <Link to="/">Contact Us</Link>
                <Link to="/">Agents</Link>

            </div>

            {/* This is our right section */}
            <div className="right">
                <Link to="/">Sign In</Link>
                <Link to="/" className="register">Sign Up</Link>
                <div className="menuIcon">
                    <img src="/menu.png" alt="" onClick={() => setOpen((prev) => !prev)}/>
                </div>
                {/* This is a div for our smaller screen */}
                {/* iF IT IS OPEN GIVE IT A CLASSNAME MENU ACTIVE OTHERWISE GIVE IT MENU */}
                <div className={open ? "menu active" : "menu"}>
                    <Link to="/">Home</Link>
                    <Link to="/">About</Link>
                    <Link to="/">Contact Us</Link>
                    <Link to="/">Agents</Link>
                    <Link to="/">Sign In</Link>
                    <Link to="/">Sign Up</Link>
                </div>
            </div>
        </nav>

    )
}

export default Navbar;