import Image436 from "../../../imgs/Image436.png";

export default function Welcome2({ closePopup }) {
  return (
    <>
      <img src={Image436} alt="" />
      <div className="popup-text">
        <h2 className="popup-title">
          Welcome back <br />
          Benedit!
        </h2>

        <h4 className="popup-subtitle">
          It's great to see you back, we missed you ;&#41;
        </h4>
        <h4 className="popup-subtitle">
          The Meeow community is waiting to see you, so get yourself booked into
          lots of lovely Meeows over the next couple of weeks.
        </h4>
        <button onClick={closePopup} id="join-meeow-btn">
          let's book some Meeows
        </button>
      </div>
    </>
  );
}
