import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from "../../components/navbar/Navbar";
import "./layout.scss";
function layout() {
  return (
 <div className="layout">
      <div className="navbar">
    <Navbar></Navbar>
          </div>

      <div className="content">
<Outlet></Outlet>
         </div>
</div> 
    )
}

export default layout;