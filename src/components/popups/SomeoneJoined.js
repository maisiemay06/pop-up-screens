// SomeoneJoined popup is linked to button for demo purposes only
// This should be rendered when a user another user clicks to join and is waiting for the next Meeow

export default function SomeoneJoined({ closePopup }) {
  return (
    <div className="popup-text someone-joined">
      <h2 className="popup-title">
        there's someone waiting to network right now!
      </h2>
      <h4 className="popup-subtitle">
        Don't delay! Click now to discover who's waiting to meet you.
      </h4>
      <button onClick={closePopup} id="join-meeow-btn">
        join this Meeow now
      </button>
      <a href="" onClick={closePopup}>
        Thanks... I'm not Meeowing this hour
      </a>
    </div>
  );
}
