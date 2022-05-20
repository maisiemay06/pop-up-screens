// When a Meeow is starting but not booked yet

export default function MeeowStarting({ closePopup }) {
  return (
    <div className="popup-text">
      <h2 className="popup-title">the next Meeow is about to start</h2>
      <h4 className="popup-subtitle">
        Click before 2 mins past the hour to be included
      </h4>
      <button onClick={closePopup} id="join-meeow-btn">
        join this Meeow now
      </button>
    </div>
  );
}
