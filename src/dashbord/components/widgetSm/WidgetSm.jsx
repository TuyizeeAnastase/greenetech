import React from 'react';
import './widgetSm.css';
import profile from '../../../images/profile.jpg';
import { Visibility } from '@material-ui/icons';

export default function WidgetSm() {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Joined Users</span>
            <ul className="widgetSmList">
                <li className="widgetListItems">
                    <img src={profile} alt="userProfile" className="widgetSmImg"/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Peter NTWALI</span>
                        <span className="widgetSmSer">RAC 553 M</span>
                    </div>
                    <button className="widgetSmBtn">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetListItems">
                    <img src={profile} alt="userProfile" className="widgetSmImg"/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Peter NTWALI</span>
                        <span className="widgetSmSer">RAC 553 M</span>
                    </div>
                    <button className="widgetSmBtn">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetListItems">
                    <img src={profile} alt="userProfile" className="widgetSmImg"/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Peter NTWALI</span>
                        <span className="widgetSmSer">RAC 553 M</span>
                    </div>
                    <button className="widgetSmBtn">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetListItems">
                    <img src={profile} alt="userProfile" className="widgetSmImg"/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Peter NTWALI</span>
                        <span className="widgetSmSer">RAC 553 M</span>
                    </div>
                    <button className="widgetSmBtn">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetListItems">
                    <img src={profile} alt="userProfile" className="widgetSmImg"/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Peter NTWALI</span>
                        <span className="widgetSmSer">RAC 553 M</span>
                    </div>
                    <button className="widgetSmBtn">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}
