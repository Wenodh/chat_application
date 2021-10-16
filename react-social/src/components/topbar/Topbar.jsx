import React from 'react';
import './topbar.css';
import { Search, Person, Chat, Notifications } from "@mui/icons-material"

export default function Topbar() {
    return (<div
        className="topbarContainer">
        <div className="topbarLeft">
            <span className="logo">social</span>
       </div>
        <div className="topbarCenter">
            <Search />
            <input placeholder="Search for friends, post or video" className="searchInput"></input>
       </div>
        <div className="topbarRight">
            <div className="topbarLinks">
                <span className="topbarLink">HomePage</span>
                <span className="topbarLink">Timeline</span>
            </div>
            <div className="topbarIcon">
                <div className="topbarIconItem">
                    <Person />
                    <span className="topbarIconBadge">1</span>
                </div>
                <div className="topbarIconItem">
                    <Chat/>
                    <span className="topbarIconBadge">2</span>
                </div>
                <div className="topbarIconItem">
                    <Notifications />
                    <span className="topbarIconBadge">3</span>
                </div>
            </div>
            <img src="/assets/person/1.jpeg" alt="profile pic" className="topbarImg"/>
       </div>
    </div>)
}
