import React from 'react';
import "./topbar.css" ;
import Profile from "./profile.jpeg";

import { NotificationsNone, Language, Settings } from '@material-ui/icons';

export default function Topbar() {
  return (
    <div>
      <div className="topbar">
        <div className="topbarWrapper">
            <div className="topLeft">
                {/* LOGO */}
                <span className="logo">Admin</span>
            </div>
            {/* ICONS */}
            <div className="topRight">
                {/* NOTIFICATION-ICONS */}
                <div className="topbarIconContainer">
                    <NotificationsNone/>
                    <span className="topIconBadge">2</span>
                </div>
                {/* LANGUAGE-ICON */}
                <div className="topbarIconContainer">
                    <Language/>
                    <span className="topIconBadge">2</span>
                </div>
                {/* SETTINGS-ICON */}
                <div className="topbarIconContainer">
                    <Settings/>
                </div>
                {/* PROFILE-IMAGE */}
                <img src={Profile}  className="profileImage" />
            </div>
        </div>
      </div>
    </div>
  )
}
