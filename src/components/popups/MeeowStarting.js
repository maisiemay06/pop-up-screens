import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

// MeeowStarting popup is linked to button for demo purposes only
// This should be rendered when a user has the next Meeow is about to start and the user doesn't have it booked

export default function MeeowStarting({ closePopup }) {
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
          scale: [0.9, 1, 1, 0.9],
        }}
        transition={{
          ease: "easeIn",
          duration: 0.6,
        }}
        className="popup"
      >
        <FaTimes id="close-btn" onClick={closePopup} />
        <motion.div className="popup-text">
          <h2 className="popup-title">
            the next <span className="underline">Meeow</span> is about to start
          </h2>
          <h4 className="popup-subtitle">
            Click before 2 mins past the hour to be included
          </h4>
          <button onClick={closePopup} id="join-meeow-btn">
            join this Meeow now
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
