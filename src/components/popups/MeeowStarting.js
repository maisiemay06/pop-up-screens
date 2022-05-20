// MeeowStarting popup is linked to button for demo purposes only
// This should be rendered when a user has the next Meeow is about to start and the user doesn't have it booked

export default function MeeowStarting({ closePopup }) {
  return (
    <div className="popup-text">
      <h2 className="popup-title">
        the next Meeow <span className="mob-underline">is </span>
        <span className="underline">about to start</span>
      </h2>
      <h4 className="popup-subtitle">
        Click before 2 mins past the hour to be included
      </h4>
      <button onClick={closePopup} id="join-meeow-btn">
        join this Meeow now
      </button>
    </div>
  );
}
