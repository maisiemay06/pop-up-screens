import Image439 from "../../../imgs/Image439.png";

export default function Welcome3Week({ closePopup }) {
  return (
    <>
      <img src={Image439} alt="" />
      <div className="popup-text">
        <h2 className="popup-title">
          Getting your 3 a week
          <br />
          Jeremy Anthony?
        </h2>
        <h4 className="popup-subtitle">
          The best way to keep the opportunities flowing for your business is to
          make sure you have at least 3 networking sessions a week.
        </h4>
        <button onClick={closePopup} id="join-meeow-btn">
          let's book some Meeows
        </button>
      </div>
    </>
  );
}
