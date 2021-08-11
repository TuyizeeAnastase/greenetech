import React from 'react';
import './sideBar.css';
import { LineStyle, PermIdentity,Subscriptions,Storefront,MailOutline,SupervisorAccount} from '@material-ui/icons';
import { Link } from 'react-router-dom';

export default function SideBar() {
    return (
        <div className="sideBar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashbord</h3>
                    <ul className="sidebarList">
                        <Link to="/dashbord">  
                        <li className="sidebarlistItems active">
                            <LineStyle className="sidebarIcon"/>
                            Home
                        </li>
                        </Link>
                        <Link to="/dashbord/products">
                        <li className="sidebarlistItems">
                            <Storefront className="sidebarIcon"/>
                            Products
                        </li>
                        </Link>
                    <Link to="/dashbord/users">
                         <li className="sidebarlistItems">
                            <PermIdentity className="sidebarIcon"/>
                            Users
                        </li>
                    </Link>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Nofications</h3>
                    <ul className="sidebarList">
                    <Link to="/dashbord/subscribers">
                        <li className="sidebarlistItems">
                            <Subscriptions className="sidebarIcon"/>
                            Subscribe
                        </li>
                    </Link>    
                        <li className="sidebarlistItems">
                            <MailOutline className="sidebarIcon"/>
                            Messages
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <Link to="/dashbord/admins">
                        <li className="sidebarlistItems">
                            <SupervisorAccount className="sidebarIcon"/>
                              Admins
                        </li>
                        </Link>
                        <li>
                         <button className="logoutS">Logout</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
