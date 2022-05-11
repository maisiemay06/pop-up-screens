import sorryEmoji from "../../imgs/sorry-emoji.png";
import blueUser from "../../imgs/blue-user-icon.png";
import orangeUser from "../../imgs/orange-user-icon.png";

// NoOneThere popup is linked to button for demo purposes only
// This should be rendered when a user joins a Meeow but no others users are available

export default function NoOneThere({ closePopup }) {
  return (
    <div className="popup-text" id="noone-popup">
      <h2 className="popup-title">
        <span className="underline">sorr</span>y
      </h2>
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
        book more Meeows now
      </button>
    </div>
  );
}
