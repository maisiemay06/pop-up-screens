import Ambassador from "../../../imgs/ambassador.png";
import SuperAmbassador from "../../../imgs/superAmbassador.png";

export default function WelcomeAmbassador({ closePopup }) {
  return (
    <>
      <div className="images">
        <img src={Ambassador} alt="" />
        <img src={SuperAmbassador} alt="" />
      </div>
      <div className="popup-text">
        <h2 className="popup-title smaller-title">
          Apply to be an Ambassador and earn shares in Meeow
          <br /> Jeremy Anthony!
        </h2>
        <h4 className="popup-subtitle">
          Would you like to be a shareholder in the fastest growing, global
          networking startup in the world?
        </h4>
        <button onClick={closePopup} id="join-meeow-btn">
          find out more
        </button>
      </div>
    </>
  );
}
