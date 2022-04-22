import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

export default function BookedMeeow({ closePopup }) {
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
          scale: [0, 1, 0.9],
        }}
        transition={{
          ease: "easeIn",
          duration: 0.05,
        }}
        className="popup"
      >
        <FaTimes id="close-btn" onClick={closePopup} />
        <motion.div className="popup-text">
          <h1 className="emoji">&#x1F44F;</h1>
          <h2 className="popup-title">
            you <span className="underline">booked</span> a Meeow!
          </h2>
          <h4 className="popup-subtitle">time to book another ;&#41;</h4>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
