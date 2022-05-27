import clappingEmoji from "../../imgs/clapping-emoji.png";

// When user books a slot in the calendar

export default function BookedMeeow({ closePopup }) {
  return (
    <div className="popup-text">
      <img src={clappingEmoji} alt="clapping emoji" className="emoji" />
      <h2 className="popup-title">you booked a Meeow!</h2>
      <h4 className="popup-subtitle booked-subtitle">
        We've sent you a confirmation email to prove it.
      </h4>
      <p className="booked-footer">
        careful... entry to every Meeow closes at 3 mins past the hour
      </p>
    </div>
  );
}
