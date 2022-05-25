import Image442 from "../../../imgs/Image442.png";

export default function Welcome5({ closePopup }) {
  return (
    <>
      <img src={Image442} alt="" />
      <div className="popup-text">
        <h2 className="popup-title">
          Tell a friend about Meeow <br />
          Jeremy Anthony?
        </h2>
        <h4 className="popup-subtitle">
          Don't keep Meeow a secret... the best way of making sure there's
          always someone new and interesting for you to meet is by spreading the
          word.
        </h4>
        <button onClick={closePopup} id="join-meeow-btn">
          tell a friend about Meeow
        </button>
      </div>
    </>
  );
}
