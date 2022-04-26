import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

// SomeoneJoined popup is linked to button for demo purposes only
// This should be rendered when a user another user clicks to join and is waiting for the next Meeow

export default function SomeoneJoined({ closePopup }) {
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
        className="popup popup-accent"
      >
        <FaTimes id="close-btn" onClick={closePopup} />
        <div className="popup-text">
          <h2 className="popup-title">
            someone else has just clicked to join this Meeow!
          </h2>
          <h4 className="popup-subtitle">
            Click before 2 mins past the hour to meet them
          </h4>
          <button onClick={closePopup} id="join-meeow-btn">
            join this Meeow now
          </button>
          <a href="" onClick={closePopup}>
            Thanks... I'm not Meeowing this hour
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
