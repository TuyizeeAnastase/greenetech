import React,{Component} from 'react';
import './style.css';

class SideBar extends Component{
    render(){
        return(
            <div className="sidebar">
            <div className="sidebar-brand">
                <h2><span className="lab la-accusoft"></span>GreeneTech</h2>
            </div>
            <div className="sidebar-menu">
                <ul>
                    <li >
                        <a href="/#" className="active"><span className="las la-igloo"></span>
                        <span>Dashbord</span></a>
                    </li>
                    <li>
                        <a href="/dashbord/users"><span className="las la-users"></span>
                        <span>Customers</span></a>
                    </li>
                    <li>
                        <a href="/dashbord/products/"><span className="las la-list"></span>
                        <span>Products</span></a>
                    </li>
                    <li>
                        <a href="/dashbord/charts"><span className="las la-user-circle"></span>
                        <span>Charts</span></a>
                    </li>
                    <li>
                        <a href="/#"><span className="las la-list"></span>
                        <span>Messages</span></a>
                    </li>
                    <li>
                        <a href="/#"><span className="las la-receipt"></span>
                        <span>Subscribers</span></a>
                    </li>
                    <li>
                        <a href="/#"><span className="las la-user-circle"></span>
                        <span>Account</span></a>
                    </li>
                </ul>
            </div>
        </div>
        )
    }
}

export default SideBar;

