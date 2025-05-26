import React from 'react'
import "./layout.scss"
import Navbar from '../../components/navbar/Navbar'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <div className="layout">
            <div className="navbar">
                {/* //Mounting our Navbar */}
                <Navbar />
            </div>
            <div className="content">

                <Outlet />
            </div>
        </div>

        // layout file is created once and can be applied to various file by simply importing it
    )
}

export default Layout