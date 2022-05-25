import Image434 from "../../../imgs/Image434.png";

export default function WelcomeSeasonal({ closePopup }) {
  return (
    <>
      <img src={Image434} alt="" />
      <div className="popup-text">
        <h2 className="popup-title">
          Happy Christmas <br />
          Antonella Jane <br />
          from everyone at Meeow!
        </h2>

        <h4 className="popup-subtitle">
          How about a little Christmas networking to get you in the festive
          spirit?
        </h4>
        <h4 className="popup-subtitle">Click on the calendar slots to book.</h4>
        <button onClick={closePopup} id="join-meeow-btn">
          let's book some Meeows
        </button>
      </div>
    </>
  );
}
