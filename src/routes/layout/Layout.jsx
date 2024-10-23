import React from "react";
import { Outlet } from "react-router-dom";
import "./layout.scss";
import { listData } from "../../Lib/dummydata";
import Card from "../../Components/Card/Card";
import Navbar from "../../Components/Navbar/Navbar";
import CardGrid from "../../Components/Cardgrid/Cardgrid";
import HomePagee from "../../Components/NewHome";

const Layout = () => {
  const data = listData;
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>

      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
