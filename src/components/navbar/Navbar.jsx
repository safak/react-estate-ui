import React from 'react'
import "./navbar.scss"

const Navbar = () => {
  return (
    <nav>
      <div className='left'>
        <a href="/" className='logo'>
          <img src="/logo.png" alt="" />
          <span>RealEstate</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
      </div>
      <div className='right'>
        <a href="/">Sign in</a>
        <a href="/" className='register'>Sign up</a>
        <div className="menuIcon">
          <img src="./menu.png" alt="" />
        </div>
        <div className="menu">
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
