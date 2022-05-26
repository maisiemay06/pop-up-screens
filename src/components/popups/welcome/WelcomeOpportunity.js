import Image443 from "../../../imgs/Image443.png";

export default function WelcomeFirst({ closePopup }) {
  return (
    <>
      <img src={Image443} alt="" />
      <div className="popup-text">
        <h2 className="popup-title">
          How many opportunities do you want for your business <br />
          Jeremy Anthony?
        </h2>
        <h4 className="popup-subtitle">
          The more networking you do, the more opportunities will come your way!
        </h4>
        <button onClick={closePopup} id="join-meeow-btn">
          let's book some Meeows
        </button>
      </div>
    </>
  );
}
