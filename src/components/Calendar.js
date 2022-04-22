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

export default function Calendar() {
  const [open, setOpen] = useState(false);

  function openPopup(event) {
    event.preventDefault();
    setOpen(true);
  }

  function closePopup() {
    setOpen(false);
  }

  return (
    <div>
      {open && <BookedMeeow closePopup={closePopup} />}

      <div className="week-picker">
        <MdArrowBackIosNew />
        <MdArrowForwardIos />
        <h4>April 2022</h4>
      </div>
      <div className="calendar container">
        <div className="row date-header">
          <div className="col-1"></div>
          <div className="col-1">SUN 11</div>
          <div className="col-1">MON 12</div>
          <div className="col-1">TUE 13</div>
          <div className="col-1">WED 14</div>
          <div className="col-1">THU 15</div>
          <div className="col-1">FRI 16</div>
          <div className="col-1">SAT 17</div>
        </div>
        <div className="row main-row">
          <div className="col-1 time-header">7am</div>
          <div className="col-1 book-slot" onClick={openPopup}>
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1 book-slot">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1 book-slot">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1 book-slot">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1 book-slot">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1 book-slot">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1 book-slot">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
        </div>
        <div className="row main-row">
          <div className="col-1 time-header">8am</div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
        </div>
        <div className="row main-row">
          <div className="col-1 time-header">9am</div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
        </div>
        <div className="row main-row">
          <div className="col-1 time-header">10am</div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
        </div>
        <div className="row main-row">
          <div className="col-1 time-header">11am</div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
        </div>
        <div className="row main-row">
          <div className="col-1 time-header">12pm</div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
        </div>
        <div className="row main-row">
          <div className="col-1 time-header">1pm</div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
        </div>
        <div className="row main-row">
          <div className="col-1 time-header">2pm</div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
        </div>
        <div className="row main-row">
          <div className="col-1 time-header">3pm</div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
        </div>
        <div className="row main-row">
          <div className="col-1 time-header">4pm</div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
        </div>
        <div className="row main-row">
          <div className="col-1 time-header">5pm</div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
        </div>
        <div className="row main-row">
          <div className="col-1 time-header">6pm</div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
        </div>
        <div className="row main-row">
          <div className="col-1 time-header">7pm</div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
        </div>
        <div className="row main-row">
          <div className="col-1 time-header">8pm</div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
        </div>
        <div className="row main-row">
          <div className="col-1 time-header">9pm</div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
        </div>
        <div className="row main-row">
          <div className="col-1 time-header">10pm</div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
        </div>
        <div className="row main-row">
          <div className="col-1 time-header">11pm</div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
        </div>
        <div className="row main-row">
          <div className="col-1 time-header">12am</div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
          <div className="col-1">
            <a href="">
              <FaPlusCircle className="plus-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
