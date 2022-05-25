import Image437 from "../../../imgs/Image437.png";

export default function WelcomeBack2({ closePopup }) {
  return (
    <>
      <img src={Image437} alt="" />
      <div className="popup-text">
        <h2 className="popup-title">
          You can't stay away <br />
          Anthony!
        </h2>
        <h4 className="popup-subtitle">
          It's great to see such a dedicated Meeowist coming back time and again
          to network with the world... brings a tear to our collective eye.
        </h4>
        <button onClick={closePopup} id="join-meeow-btn">
          let's book some Meeows
        </button>
      </div>
    </>
  );
}
