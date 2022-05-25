import { motion } from "framer-motion";
import BookedMeeow from "./BookedMeeow";
import BookedStarting from "./BookedStarting";
import MeeowStarting from "./MeeowStarting";
import NoOneThere from "./NoOneThere";
import ShareLinkedinJoined from "./ShareLinkedInJoined";
import SomeoneJoined from "./SomeoneJoined";
import PreparingLIPost from "./PreparingLIPost";
import PostedLI from "./PostedLI";
import InviteFriends from "./InviteFriends";
import Christmas from "./Christmas";

export default function popup({
  closePopup,
  content,
  color,
  openPopup,
  image,
}) {
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
        duration: 0.3,
      }}
      className="popup-bkgrnd"
      onClick={closePopup}
    >
      <motion.div
        initial={{
          scale: 0.8,
        }}
        animate={{
          scale: 1,
        }}
        transition={{
          ease: "easeInOut",
          duration: 0.6,
        }}
        className={`popup 
        ${color === "white" ? "popup-wht" : ""}  
        ${content === "ShareLinkedInJoined" ? "share-linkedin" : ""}
        ${
          content === "PreparingLIPost" || content === "PostedLI"
            ? "posting-linkedin"
            : ""
        }
        ${content === "InviteFriends" ? "invite-friends" : ""}
        ${content === "Christmas" ? "christmas" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <p id="close-btn" onClick={closePopup}>
          &times;
        </p>
        <div className="popup-container">
          {content === "BookedMeeow" && <BookedMeeow />}
          {content === "BookedStarting" && (
            <BookedStarting closePopup={closePopup} />
          )}
          {content === "MeeowStarting" && (
            <MeeowStarting closePopup={closePopup} />
          )}
          {content === "NoOneThere" && <NoOneThere />}
          {content === "SomeoneJoined" && (
            <SomeoneJoined closePopup={closePopup} />
          )}

          {content === "ShareLinkedInJoined" && (
            <ShareLinkedinJoined
              closePopup={closePopup}
              openPopup={openPopup}
              image={image}
            />
          )}
          {content === "PreparingLIPost" && (
            <PreparingLIPost closePopup={closePopup} openPopup={openPopup} />
          )}
          {content === "PostedLI" && <PostedLI />}
          {content === "InviteFriends" && (
            <InviteFriends closePopup={closePopup} />
          )}
          {content === "Christmas" && <Christmas closePopup={closePopup} />}
        </div>
      </motion.div>
    </motion.div>
  );
}
