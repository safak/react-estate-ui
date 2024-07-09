import "./layout.scss";
import Navbar from "../../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";


const layout = () => {
  return (
    <div className="layout">
      <div className="nav">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default layout ;
