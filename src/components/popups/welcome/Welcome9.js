import Image442 from "../../../imgs/Image442.png";

export default function Welcome9({ closePopup }) {
  return (
    <>
      <img src={Image442} alt="" className="smaller-img" />
      <div className="popup-text">
        <h2 className="popup-title smaller-title">
          Apply to be an Ambassador and earn shares in Meeow
          <br /> Jeremy Anthony!
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
