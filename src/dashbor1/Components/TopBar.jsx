import React  from "react";
import "./style.css";
import profile from "./profile.jpg";
const TopBar = () => {
  const user = localStorage.getItem("user");
  const handleLogout = () => {
    localStorage.clear();
    window.location.pathname = "/login";
  };
  return (
    <div class="header">
      <h2>
        <label for="">
          <span className="las la-bars"></span>
        </label>
      </h2>
      <div className="user-wrapper">
        <img src={profile} alt="" style={{ width: "40px", height: "40px" }} />
        <div className="user">
          <h4>{user}</h4>
          <input type="button" onClick={handleLogout} value="logout" />
        </div>
      </div>
    </div>
  );
};
export default TopBar;
