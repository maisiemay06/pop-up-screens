import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { useState } from "react";
import CalendarRow from "./CalendarRow";
import CalendarHeader from "./CalendarHeader";
import BookedMeeow from "./popups/BookedMeeow";
import MeeowStarting from "./popups/MeeowStarting";
import BookedStarting from "./popups/BookedStarting";
import NoOneThere from "./popups/NoOneThere";
import InviteFriends from "./popups/InviteFriends";
import SomeoneJoined from "./popups/SomeoneJoined";
import ShareLinkedinJoined from "./popups/ShareLinkedInJoined";
import ShareLinkedinBooked from "./popups/ShareLinkedInBooked";

export default function Calendar() {
  // Open popup when Meeow time slot is booked
  const [popupBooked, setPopupBooked] = useState(false);
  function openBookedPopup() {
    setPopupBooked(true);
  }
  function closeBookedPopup() {
    setPopupBooked(false);
  }

  // Open popup when next meeow is starting and not booked
  const [popupNextMeeow, setPopupNextMeeow] = useState(false);
  function openMeeowStarting() {
    setPopupNextMeeow(true);
  }
  function closeMeeowStarting(event) {
    event.preventDefault();
    setPopupNextMeeow(false);
  }

  // Open popup when next Meeow is starting and is booked
  const [popupBookedStarting, setPopupBookedStarting] = useState(false);
  function openBookedStarting() {
    setPopupBookedStarting(true);
  }
  function closeBookedStarting(event) {
    event.preventDefault();
    setPopupBookedStarting(false);
  }

  // Open popup when no other users in Meeow
  const [popupNoOneThere, setPopupNoOneThere] = useState(false);
  function openNoOneThere() {
    setPopupNoOneThere(true);
  }
  function closeNoOneThere(event) {
    event.preventDefault();
    setPopupNoOneThere(false);
  }

  // Open popup to invite friends to Meeow
  const [popupInviteFriends, setPopupInviteFriends] = useState(false);
  function openInviteFriends() {
    setPopupInviteFriends(true);
  }
  function closeInviteFriends(event) {
    event.preventDefault();
    setPopupInviteFriends(false);
  }

  // Open popup to share LinkedIn post when user has just joined Meeow
  const [popupLinkedinJoined, setPopupLinkedinJoined] = useState(false);

  function openLinkedinJoined() {
    setPopupLinkedinJoined(true);
  }
  function closeLinkedinJoined(event) {
    event.preventDefault();
    setPopupLinkedinJoined(false);
  }

  // Open popup to share LinkedIn post when user has booked a Meeow
  const [popupLinkedinBooked, setPopupLinkedinBooked] = useState(false);

  function openLinkedinBooked() {
    setPopupLinkedinBooked(true);
  }
  function closeLinkedinBooked(event) {
    event.preventDefault();
    setPopupLinkedinBooked(false);
  }

  // Open popup to when another user clicks to join the next Meeow
  const [popupSomeoneJoined, setPopupSomeoneJoined] = useState(false);
  function openSomeoneJoined() {
    setPopupSomeoneJoined(true);
  }
  function closeSomeoneJoined(event) {
    event.preventDefault();
    setPopupSomeoneJoined(false);
  }

  return (
    <div>
      {popupBooked && <BookedMeeow closePopup={closeBookedPopup} />}
      {popupNextMeeow && <MeeowStarting closePopup={closeMeeowStarting} />}
      {popupBookedStarting && (
        <BookedStarting closePopup={closeBookedStarting} />
      )}
      {popupNoOneThere && <NoOneThere closePopup={closeNoOneThere} />}
      {popupInviteFriends && <InviteFriends closePopup={closeInviteFriends} />}
      {popupLinkedinJoined && (
        <ShareLinkedinJoined closePopup={closeLinkedinJoined} />
      )}
      {popupLinkedinBooked && (
        <ShareLinkedinBooked closePopup={closeLinkedinBooked} />
      )}
      {popupSomeoneJoined && <SomeoneJoined closePopup={closeSomeoneJoined} />}

      <div className="week-picker">
        <MdArrowBackIosNew id="prev-week" />
        <MdArrowForwardIos id="next-week" />
        <h4>April 2022</h4>
      </div>
      <div className="calendar container-fluid">
        <CalendarHeader />

        <CalendarRow time="7am" openBookedPopup={openBookedPopup} />
        <CalendarRow time="8am" openBookedPopup={openBookedPopup} />
        <CalendarRow time="9am" openBookedPopup={openBookedPopup} />
        <CalendarRow time="10am" openBookedPopup={openBookedPopup} />
        <CalendarRow time="11am" openBookedPopup={openBookedPopup} />
        <CalendarRow time="12pm" openBookedPopup={openBookedPopup} />
        <CalendarRow time="1pm" openBookedPopup={openBookedPopup} />
        <CalendarRow time="2pm" openBookedPopup={openBookedPopup} />
        <CalendarRow time="3pm" openBookedPopup={openBookedPopup} />
        <CalendarRow time="4pm" openBookedPopup={openBookedPopup} />
        <CalendarRow time="5pm" openBookedPopup={openBookedPopup} />
        <CalendarRow time="6pm" openBookedPopup={openBookedPopup} />
        <CalendarRow time="7pm" openBookedPopup={openBookedPopup} />
        <CalendarRow time="8pm" openBookedPopup={openBookedPopup} />
        <CalendarRow time="9pm" openBookedPopup={openBookedPopup} />
        <CalendarRow time="10pm" openBookedPopup={openBookedPopup} />
        <CalendarRow time="11pm" openBookedPopup={openBookedPopup} />
        <CalendarRow time="12pm" openBookedPopup={openBookedPopup} />

        {/* BELOW BUTTONS FOR DEMO PURPOSES ONLY */}
        <div className="demo-buttons">
          <button onClick={openBookedStarting}>booked Meeow starting</button>
          <button onClick={openMeeowStarting}>next Meeow starting</button>
          <button onClick={openSomeoneJoined}>someone else just clicked</button>
          <button onClick={openNoOneThere}>no one there</button>
          <button onClick={openInviteFriends}>tell your friends</button>
          <button onClick={openLinkedinJoined}>i've just joined Meeow</button>
          <button onClick={openLinkedinBooked}>i've just booked a Meeow</button>
        </div>
      </div>
    </div>
  );
}
