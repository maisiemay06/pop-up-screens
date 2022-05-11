// BookedStarting popup is linked to button for demo purposes only
// This should be rendered when a user has the next Meeow is about to start and the user has it booked

export default function BookedStarting({ closePopup }) {
  return (
    <div className="popup-text">
      <h2 className="popup-title">
        your booked Meeow is <span className="underline">starting now!</span>
      </h2>
      <h4 className="popup-subtitle">
        Click before 2 mins past the hour to be included
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
