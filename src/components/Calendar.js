import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import BookedMeeow from "./BookedMeeow";
import { useState } from "react";
import CalendarRow from "./CalendarRow";
import CalendarHeader from "./CalendarHeader";

export default function Calendar() {
  const [bookedOpen, setBookedOpen] = useState(false);

  function openBookedPopup() {
    setBookedOpen(true);
  }

  function closeBookedPopup() {
    setBookedOpen(false);
  }

  return (
    <div>
      {bookedOpen && <BookedMeeow closeBookedPopup={closeBookedPopup} />}

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
      </div>
    </div>
  );
}
