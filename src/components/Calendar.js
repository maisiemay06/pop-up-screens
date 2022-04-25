import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import {
  FaPlusCircle,
  FaCheckCircle,
  FaRegTimesCircle,
  FaTimes,
} from "react-icons/fa";
import { IoTriangleSharp } from "react-icons/io5";
import $ from "jquery";
import BookedMeeow from "./BookedMeeow";
import { useState } from "react";
import CalendarRow from "./CalendarRow";
import CalendarHeader from "./CalendarHeader";

export default function Calendar() {
  const [open, setOpen] = useState(false);

  function openPopup() {
    setOpen(true);
  }

  function closePopup() {
    setOpen(false);
  }

  return (
    <div>
      {open && <BookedMeeow closePopup={closePopup} />}

      <div className="week-picker">
        <MdArrowBackIosNew id="prev-week" />
        <MdArrowForwardIos id="next-week" />
        <h4>April 2022</h4>
      </div>
      <div className="calendar container-fluid">
        <CalendarHeader />

        <CalendarRow time="7am" openPopup={openPopup} />
        <CalendarRow time="8am" openPopup={openPopup} />
        <CalendarRow time="9am" openPopup={openPopup} />
        <CalendarRow time="10am" openPopup={openPopup} />
        <CalendarRow time="11am" openPopup={openPopup} />
        <CalendarRow time="12pm" openPopup={openPopup} />
        <CalendarRow time="1pm" openPopup={openPopup} />
        <CalendarRow time="2pm" openPopup={openPopup} />
        <CalendarRow time="3pm" openPopup={openPopup} />
        <CalendarRow time="4pm" openPopup={openPopup} />
        <CalendarRow time="5pm" openPopup={openPopup} />
        <CalendarRow time="6pm" openPopup={openPopup} />
        <CalendarRow time="7pm" openPopup={openPopup} />
        <CalendarRow time="8pm" openPopup={openPopup} />
        <CalendarRow time="9pm" openPopup={openPopup} />
        <CalendarRow time="10pm" openPopup={openPopup} />
        <CalendarRow time="11pm" openPopup={openPopup} />
        <CalendarRow time="12pm" openPopup={openPopup} />
      </div>
    </div>
  );
}
