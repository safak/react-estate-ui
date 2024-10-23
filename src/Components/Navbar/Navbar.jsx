import { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
  const { userr, loginWithRedirect } = useAuth0();

  const [open, setOpen] = useState(false);
  const user = false;

  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="Logo" />
          <span>Alokik</span>
        </a>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/agents">Agents</a>
      </div>
      <div className="right">
        {user ? (
          <div className="user">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
              alt=""
            />
            <span>John Doe</span>
            <Link className="profile" to="/profile">
              <div className="notify">5</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            {" "}
            <a
              className="aa"
              href="/signin"
              onClick={(e) => loginWithRedirect()}
            >
              Sign In
            </a>
            <a href="/signup" className="register">
              Sign Up
            </a>
          </>
        )}
        {/* Menu Icon with onClick */}
        <div className="menuIcon" onClick={() => setOpen(!open)}>
          <img src="/menu.png" alt="Menu Icon" />
        </div>

        {/* Toggling class based on the open state */}
        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/agents">Agents</a>
          <a href="/signin">Sign In</a>
          <a href="/signup">Sign Up</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
