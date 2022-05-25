import Image440 from "../../../imgs/Image440.png";

export default function Welcome2({ closePopup }) {
  return (
    <>
      <img src={Image440} alt="" />
      <div className="popup-text">
        <h2 className="popup-title">
          Don't forget the Book Buddies
          <br />
          Jeremy Anthony!
        </h2>
        <h4 className="popup-subtitle">
          You can see when other Meeowists have booked to network by looking for
          the 'Book Buddies' on the calendar.
        </h4>
        <button onClick={closePopup} id="join-meeow-btn">
          let's book some Meeows
        </button>
      </div>
    </>
  );
}
