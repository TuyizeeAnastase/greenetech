import React from 'react';
import './sideBar.css';
import { LineStyle, PermIdentity, DynamicFeed,ChatBubble,MonetizationOn,Equalizer,Storefront,MailOutline} from '@material-ui/icons';
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
                        <li className="sidebarlistItems">
                            <MailOutline className="sidebarIcon"/>
                            Mail
                        </li>
                        <li className="sidebarlistItems ">
                            <DynamicFeed className="sidebarIcon"/>
                            feedback
                        </li>
                        <li className="sidebarlistItems">
                            <ChatBubble className="sidebarIcon"/>
                            Messages
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                    <Link to="/dashbord/subscribers">
                       <li className="sidebarlistItems ">
                            <MonetizationOn className="sidebarIcon"/>
                            Subscribers
                        </li>
                    </Link>
                        <Link to="/dashbord/admins">
                        <li className="sidebarlistItems">
                            <Equalizer className="sidebarIcon"/>
                              Admins
                        </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}
