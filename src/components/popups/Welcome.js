import Image434 from "../../imgs/Image-434.png";

export default function Welcome({ closePopup }) {
  return (
    <>
      <img src={Image434} alt="" />
      <div className="popup-text">
        <h2 className="popup-title">Happy Christmas from everyone at Meeow!</h2>

        <h4 className="popup-subtitle">
          How about a little Christmas networking to get you in the festive
          spirit?
        </h4>
        <button onClick={closePopup} id="join-meeow-btn">
          click on the calendar to book
        </button>
      </div>
    </>
  );
}
