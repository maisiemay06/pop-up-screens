import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import BookedMeeow from "./BookedMeeow";
import BookedStarting from "./BookedStarting";
import MeeowStarting from "./MeeowStarting";
import NoOneThere from "./NoOneThere";
import ShareLinkedinBooked from "./ShareLinkedInBooked";
import ShareLinkedinJoined from "./ShareLinkedInJoined";
import SomeoneJoined from "./SomeoneJoined";

export default function popup({ closePopup, content, color }) {
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
          scale: [1, 1.2, 1.2, 1],
        }}
        transition={{
          ease: "easeIn",
          duration: 0.6,
        }}
        className={`popup ${color === "white" ? "popup-wht" : ""} ${
          color === "accent" ? "popup-accent" : ""
        } ${
          content === "ShareLinkedInBooked" || content === "ShareLinkedInJoined"
            ? "share-linkedin"
            : ""
        }`}
      >
        <FaTimes id="close-btn" onClick={closePopup} />
        {content === "BookedMeeow" && <BookedMeeow />}
        {content === "BookedStarting" && <BookedStarting />}
        {content === "MeeowStarting" && <MeeowStarting />}
        {content === "NoOneThere" && <NoOneThere />}
        {content === "ShareLinkedInBooked" && (
          <ShareLinkedinBooked closePopup={closePopup} />
        )}
        {content === "ShareLinkedInJoined" && (
          <ShareLinkedinJoined closePopup={closePopup} />
        )}
        {content === "SomeoneJoined" && <SomeoneJoined />}
      </motion.div>
    </motion.div>
  );
}
