import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

// BookedStarting popup is linked to button for demo purposes only
// This should be rendered when a user has the next Meeow is about to start and the user has it booked

export default function BookedStarting({ closePopup }) {
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
        <div className="popup-text">
          <h2 className="popup-title">
            your booked Meeow is{" "}
            <span className="underline">starting now!</span>
          </h2>
          <h4 className="popup-subtitle">
            Click before 2 mins past the hour to be included
          </h4>
          <button onClick={closePopup} id="join-meeow-btn">
            join this Meeow now
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
