import React from 'react';
import './topBar.css'
import profile from '../../../images/profile.jpg';
import { NotificationsNone, Language, Settings } from '@material-ui/icons/';

export default function TopBar(){
    return (
        <div className="topBar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">GreenTech</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                    <NotificationsNone/>
                    <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                    <Language/>
                    <span className="topIconBadge">3</span>
                    </div>
                    <div className="topbarIconContainer">
                    <Settings/>
                    </div>
                    <img src={profile} alt="profile" className="topAvatar"></img>
                </div>
            </div>
        </div>
    )
}
