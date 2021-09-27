import React from 'react';
import './style.css';
import { NavLink,Link } from 'react-router-dom';

function   SideBar (){
        return(
            <div className="sidebar">
            <div className="sidebar-brand">
                <Link  style={{textDecoration:'none',color:'white'}}><h2><span className="lab la-accusoft" style={{color:'white'}}></span>GreeneTech</h2></Link>
            </div>
            <div className="sidebar-menu">
                <ul>
                    <li>
                        <NavLink exact to="/dashbord" activeClassName="active"><span className="las la-igloo"></span>
                        <span>Dashbord</span></NavLink>
                    </li>
                    <li >
                        <NavLink to="/dashbord/users" activeClassName="active"><span className="las la-users"></span>
                        <span>Customers</span></NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashbord/products/" activeClassName="active"><span className="las la-list"></span>
                        <span>Products</span></NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashbord/charts" activeClassName="active"><span className="fa fa-line-chart"></span>
                        <span>Charts</span></NavLink>
                    </li>
                    <li>
                        <NavLink to="/message" activeClassName="active"><span className="fa fa-commenting-o"></span>
                        <span>Messages</span></NavLink>
                    </li>
                    <li>
                        <NavLink to="/subscribers" activeClassName="active"><span className="fa fa-newspaper-o"></span>
                        <span>Subscribers</span></NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashbord/account" activeClassName="active"><span className="las la-user-circle"></span>
                        <span>Account</span></NavLink>
                    </li>
                </ul>
            </div>
        </div>
        )
    }

export default SideBar;

