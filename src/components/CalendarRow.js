import {
  FaPlusCircle,
  FaCheckCircle,
  FaRegTimesCircle,
  FaTimes,
} from "react-icons/fa";
import $ from "jquery";

export default function CalendarRow({ time, openPopup }) {
  function handleClick(event) {
    event.preventDefault();
    openPopup();
    event.target.classList.toggle("booked");
  }

  return (
    <div className="row main-row">
      <div className="col-1 time-header">{time}</div>
      <div
        className="col border-top border-right book-slot"
        onClick={handleClick}
      >
        <a href="">
          <FaPlusCircle className="plus-icon" />
        </a>
      </div>
      <div
        className="col border-top border-right book-slot"
        onClick={openPopup}
      >
        <a href="">
          <FaPlusCircle className="plus-icon" />
        </a>
      </div>
      <div
        className="col border-top border-right book-slot"
        onClick={openPopup}
      >
        <a href="">
          <FaPlusCircle className="plus-icon" />
        </a>
      </div>
      <div
        className="col border-top border-right book-slot"
        onClick={openPopup}
      >
        <a href="">
          <FaPlusCircle className="plus-icon" />
        </a>
      </div>
      <div
        className="col border-top border-right book-slot"
        onClick={openPopup}
      >
        <a href="">
          <FaPlusCircle className="plus-icon" />
        </a>
      </div>
      <div
        className="col border-top border-right book-slot"
        onClick={openPopup}
      >
        <a href="">
          <FaPlusCircle className="plus-icon" />
        </a>
      </div>
      <div className="col border-top book-slot" onClick={openPopup}>
        <a href="">
          <FaPlusCircle className="plus-icon" />
        </a>
      </div>
    </div>
  );
}
