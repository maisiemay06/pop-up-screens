import Image438 from "../../../imgs/Image438.png";

export default function Welcome4({ closePopup }) {
  return (
    <>
      <img src={Image438} alt="" className="smaller-img" />
      <div className="popup-text">
        <h2 className="popup-title">
          Welcome to the hottest networking in the world <br />
          Carolina Julia!
        </h2>
        <h4 className="popup-subtitle">
          Don't forget to book your first Meeows right now to make sure you get
          off to a flying networking start!
        </h4>
        <button onClick={closePopup} id="join-meeow-btn">
          let's book some Meeows
        </button>
      </div>
    </>
  );
}
