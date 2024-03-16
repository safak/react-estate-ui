import './navbar.scss'
import logo from '../../assets/logo.png'
import menu from '../../assets/menu.png'
import { useState } from 'react'
import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
    const [open, setOpen] = useState(false);

  return (
    <nav>
        <div className="left">
            <a href="/" className='logo'> 
                <img src={logo} alt="" width={28} /> <span>EmpireEstate</span>
            </a>
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
            <a href="/">Agents</a>
        </div> 

        <div className="right">
            <a href="/">Sign in</a>
            <a href="/" className='register'>Sign up</a>
            <div className='menuIcon' onClick={() => setOpen((prev) => !prev)}>
              <HiMenuAlt3  color='#E59866' size={35} cursor='pointer'/>
            </div>
            <div className={open ? "menu active" : "menu"}>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
                <a href="/">Agents</a>
                <a href="/">Sign in</a>
                <a href="/">Sign up</a>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
