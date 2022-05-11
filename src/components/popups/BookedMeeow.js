import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import clappingEmoji from "../../imgs/clapping-emoji.png";

export default function BookedMeeow({ closePopup }) {
  return (
    <div className="popup-text">
      <img src={clappingEmoji} alt="clapping emoji" className="emoji" />
      <h2 className="popup-title">
        y<span className="underline">ou booked</span> a Meeow!
      </h2>
      <h3>come back to the calendar at the time of your booking</h3>
      <h4 className="popup-subtitle">
        &#40;entry to every Meeow closes at 3 mins past the hour&#41;
      </h4>
    </div>
  );
}
