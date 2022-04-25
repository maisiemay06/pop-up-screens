import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import clappingEmoji from "../../imgs/clapping-emoji.png";

export default function BookedMeeow({ closeBookedPopup }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      className="popup-bkgrnd"
    >
      <motion.div
        initial={{
          scale: 0,
        }}
        animate={{
          scale: [1, 0.9],
        }}
        transition={{
          ease: "easeIn",
          duration: 0.3,
        }}
        className="popup"
      >
        <FaTimes id="close-btn" onClick={closeBookedPopup} />
        <motion.div className="popup-text">
          <img src={clappingEmoji} alt="clapping emoji" className="emoji" />
          <h2 className="popup-title">
            you <span className="underline">booked</span> a Meeow!
          </h2>
          <h4 className="popup-subtitle">time to book another ;&#41;</h4>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
