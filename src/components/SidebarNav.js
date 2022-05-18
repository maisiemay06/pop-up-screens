import React, { useState } from "react";
import meeowLogo from "../imgs/meeow-logo.png";
import "../styles/SidebarNav.css";
import Popup from "./popups/Popup";

export default function SidebarNav() {
  const [openInviteModal, setOpenInviteModal] = useState(false);

  function openPopup() {
    setOpenInviteModal(true);
  }

  function closePopup() {
    setOpenInviteModal(false);
  }

  return (
    <nav className="sidebar-nav">
      {openInviteModal && (
        <Popup
          closePopup={closePopup}
          content={"InviteFriends"}
          color={"white"}
          openPopup={openPopup}
        />
      )}
      <img src={meeowLogo} className="logo"></img>
      <ul className="nav-list">
        <li>calendar</li>
        <li>messages</li>
        <li>connections</li>
        <li>meeowniversity</li>
      </ul>
      <div className="sidebar-footer">
        <button className="tell-friend-btn button" onClick={openPopup}>
          tell a friend
        </button>
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
