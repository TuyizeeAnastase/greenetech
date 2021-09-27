import React from "react";
import "./pages/userDash.css";
import { Link } from "react-router-dom";
import logo from "../images/logo1.png";
import user1 from "../images/profile.jpg";

const SideBar = () => {
  const user = localStorage.getItem("user");
  const email = localStorage.getItem("email");
  return (
    <div>
      <input type="checkbox" name="" id="sidebar-toggle" />
      <div className="sidebarD">
        <div className="sidebar-brandD">
          <div className="brand-flexD">
            <img src={logo} style={{ width: "100px" }} alt="" />
            <div className="brand-iconsD">
              <span class="las la-bell"></span>
              <span class="las la-user-circle"></span>
            </div>
          </div>
        </div>

        <div className="sidebar-menuD">
          <div className="sidebar-userD">
            <img src={user1} alt="" />
          </div>
          <div>
            <h3>{user}</h3>
            <span>{email}</span>
          </div>
        </div>

        <div className="sidebar-menuD">
          <div className="menu-headD">
            <span>Dashbord</span>
          </div>
          <ul>
            <li>
              <a href="/userDashbord">
                <span className="las la-igloo"></span>
                Overview
              </a>
            </li>
            <li>
              <Link to="/userDashbord/charts">
                <span className="las la-chart-area"></span>
                Analytics
              </Link>
            </li>
            <li>
              <Link to="/userDashbord/gases">
                <span className="las la-book"></span>
                Info
              </Link>
            </li>
          </ul>

          <div className="menu-headD">
            <span>Applications</span>
          </div>
          <ul>
            <li>
              <a href="/userDashbord/user">
                <span className="las la-user"></span>
                Contact
              </a>
            </li>
            <li>
              <a href="/userDashbord/map">
                <span className="las la-globe"></span>
                Maps
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
