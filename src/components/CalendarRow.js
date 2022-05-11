export default function CalendarRow({ time, openPopup }) {
  function handleClick(event) {
    event.preventDefault();
    let timeSlot = event.target;

    if (timeSlot.classList.contains("open-slot")) {
      openPopup("BookedMeeow", "blue");
      timeSlot.classList.replace("open-slot", "booked");
    } else {
      timeSlot.classList.replace("booked", "open-slot");
    }
  }

  return (
    <div className="row main-row">
      <div className="col-1 time-header">{time}</div>
      <div
        className="col border-top border-right book-slot"
        onClick={handleClick}
      >
        <a href="" className="open-slot"></a>
      </div>
      <div
        className="col border-top border-right book-slot"
        onClick={handleClick}
      >
        <a href="" className="open-slot"></a>
      </div>
      <div
        className="col border-top border-right book-slot"
        onClick={handleClick}
      >
        <a href="" className="open-slot"></a>
      </div>
      <div
        className="col border-top border-right book-slot"
        onClick={handleClick}
      >
        <a href="" className="open-slot"></a>
      </div>
      <div
        className="col border-top border-right book-slot"
        onClick={handleClick}
      >
        <a href="" className="open-slot"></a>
      </div>
      <div
        className="col border-top border-right book-slot"
        onClick={handleClick}
      >
        <a href="" className="open-slot"></a>
      </div>
      <div className="col border-top book-slot" onClick={handleClick}>
        <a href="" className="open-slot"></a>
      </div>
    </div>
  );
}
