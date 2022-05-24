// When a Meeow is starting an duser has already booked it

export default function BookedStarting({ closePopup }) {
  return (
    <div className="popup-text">
      <h2 className="popup-title wider-title">
        your booked Meeow is starting now!
      </h2>
      <span className="desk-only">
        <h4 className="popup-subtitle">
          Click before 2 mins past the hour to be included
        </h4>
        <button onClick={closePopup} id="join-meeow-btn">
          join this Meeow now
        </button>
        <a href="" onClick={closePopup}>
          Thanks... I'm not Meeowing this hour
        </a>
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
