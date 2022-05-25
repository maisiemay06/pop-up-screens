import Image441 from "../../../imgs/Image441.png";

export default function Welcome6({ closePopup }) {
  return (
    <>
      <img src={Image441} alt="" />
      <div className="popup-text">
        <h2 className="popup-title">
          Hey! how's it going
          <br />
          Jeremy Anthony!
        </h2>
        <h4 className="popup-subtitle">
          We love regular feedback on how Meeow is helping you drive your
          business forward. Feel free to click on the speech bubble in the
          bottom right hand corner and tell us what you think.
        </h4>
        <button onClick={closePopup} id="join-meeow-btn">
          let's book some Meeows
        </button>
      </div>
    </>
  );
}
