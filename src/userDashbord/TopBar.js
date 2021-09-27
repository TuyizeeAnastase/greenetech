import React from 'react';
import './pages/userDash.css';

const TopBar=()=>{
    return(
        <div className="headerD">
          <div className="main-toggle">
            <label for="sidebar-toggle">
              <span className="las la-bars"></span>
            </label>
          </div>
          <div className="headerD-icons">
            <span className="las la-search"></span>
            <span className="las la-bookmark"></span>
            <span className="las la-sms"></span>
          </div>
        </div>
    )
}
export default TopBar;