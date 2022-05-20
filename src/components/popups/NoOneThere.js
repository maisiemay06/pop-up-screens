import sorryEmoji from "../../imgs/sorry-emoji.png";
import blueUser from "../../imgs/blue-user-icon.png";
import orangeUser from "../../imgs/orange-user-icon.png";

// When user clicks to join Meeow but no one else does

export default function NoOneThere({ closePopup }) {
  return (
    <div className="popup-text" id="noone-popup">
      <h2 className="popup-title">sorry</h2>
      <img src={sorryEmoji} alt="sorry emoji" className="emoji" />

      <h4 className="popup-subtitle">
        There's no one else to Meeow with at the moment.
      </h4>
      <h4 className="popup-subtitle">
        Choose a busier time slot by looking for the Book Buddies, or even book
        a slot to attract people to network when you want to.
      </h4>
      <div className="book-buddies">
        <img src={blueUser} alt="blue user icon" className="user-icon" />
        <img src={orangeUser} alt="orange user icon" className="user-icon" />
      </div>
      <button onClick={closePopup} id="book-meeow-btn">
        book more Meeows
      </button>
    </div>
  );
}
