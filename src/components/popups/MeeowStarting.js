// When a Meeow is starting but not booked yet

export default function MeeowStarting({ closePopup }) {
  return (
    <div className="popup-text">
      <h2 className="popup-title">the next Meeow is about to start</h2>

      <span className="desk-only">
        <h4 className="popup-subtitle">
          Click before 2 mins past the hour to be included
        </h4>
        <button onClick={closePopup} id="join-meeow-btn">
          join this Meeow now
        </button>
      </span>

      <span className="mob-only">
        <h4 className="popup-subtitle">
          Jump onto your computer or tablet to join this Meeow!
        </h4>
        <button onClick={closePopup} id="close-mob-btn">
          close
        </button>
      </span>
    </div>
  );
}
