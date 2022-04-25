import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

// MeeowStarting popup is linked to book this Meeow button at top of page for demo purposes

export default function MeeowStarting({ closeMeeowStarting }) {
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
        <FaTimes id="close-btn" onClick={closeMeeowStarting} />
        <motion.div className="popup-text">
          <h2 className="popup-title">
            the next <span className="underline">Meeow</span> is about to start
          </h2>
          <h4 className="popup-subtitle">
            Click before 2 mins past the hour to be included
          </h4>
          <button onClick={closeMeeowStarting} id="join-meeow-btn">
            join this Meeow now
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
