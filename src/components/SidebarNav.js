import React from "react";
import meeowLogo from "../imgs/meeow-logo.png";
import "../styles/SidebarNav.css";

export default function SidebarNav() {
  return (
    <nav className="sidebar-nav">
      <img src={meeowLogo} className="logo"></img>
      <ul className="nav-list">
        <li>calendar</li>
        <li>messages</li>
        <li>connections</li>
        <li>meeowniversity</li>
      </ul>
      <div className="sidebar-footer">
        <button className="tool-tips-btn button">tool tips tour</button>
        <button className="cam-mic-test-btn button">camera/mic test</button>

        <ul className="nav-list">
          <li>terms & conditions</li>
          <li>privacy & data policies</li>
          <li>contact support</li>
        </ul>
      </div>
    </nav>
  );
}
