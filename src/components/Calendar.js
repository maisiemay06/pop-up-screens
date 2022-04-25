import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import BookedMeeow from "./BookedMeeow";
import { useState } from "react";
import CalendarRow from "./CalendarRow";
import CalendarHeader from "./CalendarHeader";
import MeeowStarting from "./MeeowStarting";
import BookedStarting from "./BookedStarting";

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

  return (
    <div>
      {popupBooked && <BookedMeeow closeBookedPopup={closeBookedPopup} />}
      {popupNextMeeow && (
        <MeeowStarting closeMeeowStarting={closeMeeowStarting} />
      )}
      {popupBookedStarting && (
        <BookedStarting closeBookedStarting={closeBookedStarting} />
      )}

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
          <button onClick={openBookedStarting}>Booked Meeow Starting</button>
          <button onClick={openMeeowStarting}>Next Meeow Starting</button>
          <button>Noone there</button>
        </div>
      </div>
    </div>
  );
}
