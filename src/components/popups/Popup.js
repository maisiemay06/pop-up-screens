import { motion } from "framer-motion";
import BookedMeeow from "./BookedMeeow";
import BookedStarting from "./BookedStarting";
import MeeowStarting from "./MeeowStarting";
import NoOneThere from "./NoOneThere";
import ShareLinkedinBooked from "./ShareLinkedInBooked";
import ShareLinkedinJoined from "./ShareLinkedInJoined";
import SomeoneJoined from "./SomeoneJoined";
import PreparingLIPost from "./PreparingLIPost";
import PostedLI from "./PostedLI";

export default function popup({ closePopup, content, color, openPopup }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        ease: "easeIn",
        duration: 0.8,
      }}
      className="popup-bkgrnd"
      onClick={closePopup}
    >
      <motion.div
        initial={{
          scale: 0.5,
        }}
        animate={{
          scale: 1,
        }}
        transition={{
          ease: "easeInOut",
          duration: 0.8,
        }}
        className={`popup ${color === "white" ? "popup-wht" : ""}  ${
          content === "ShareLinkedInBooked" || content === "ShareLinkedInJoined"
            ? "share-linkedin"
            : ""
        }
        ${
          content === "PreparingLIPost" || content === "PostedLI"
            ? "posting-linkedin"
            : ""
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="popup-container">
          <p id="close-btn" onClick={closePopup}>
            &times;
          </p>
          {content === "BookedMeeow" && <BookedMeeow />}
          {content === "BookedStarting" && <BookedStarting />}
          {content === "MeeowStarting" && <MeeowStarting />}
          {content === "NoOneThere" && <NoOneThere />}
          {content === "SomeoneJoined" && <SomeoneJoined />}

          {content === "ShareLinkedInBooked" && (
            <ShareLinkedinBooked
              closePopup={closePopup}
              openPopup={openPopup}
            />
          )}
          {content === "ShareLinkedInJoined" && (
            <ShareLinkedinJoined
              closePopup={closePopup}
              openPopup={openPopup}
            />
          )}
          {content === "PreparingLIPost" && (
            <PreparingLIPost closePopup={closePopup} openPopup={openPopup} />
          )}
          {content === "PostedLI" && <PostedLI />}
        </div>
      </motion.div>
    </motion.div>
  );
}
