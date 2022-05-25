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
import Welcome from "./welcome/Welcome";
import Welcome2 from "./welcome/Welcome2";
import Welcome3 from "./welcome/Welcome3";
import Welcome4 from "./welcome/Welcome4";
import Welcome5 from "./welcome/Welcome5";
import Welcome6 from "./welcome/Welcome6";
import Welcome7 from "./welcome/Welcome7";
import Welcome8 from "./welcome/Welcome8";
import Welcome9 from "./welcome/Welcome9";

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
        ${
          content === "Welcome" ||
          content === "Welcome2" ||
          content === "Welcome3" ||
          content === "Welcome4" ||
          content === "Welcome5" ||
          content === "Welcome6" ||
          content === "Welcome7" ||
          content === "Welcome8" ||
          content === "Welcome9"
            ? "welcome"
            : ""
        }`}
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
          {content === "Welcome" && <Welcome closePopup={closePopup} />}
          {content === "Welcome2" && <Welcome2 closePopup={closePopup} />}
          {content === "Welcome3" && <Welcome3 closePopup={closePopup} />}
          {content === "Welcome4" && <Welcome4 closePopup={closePopup} />}
          {content === "Welcome5" && <Welcome5 closePopup={closePopup} />}
          {content === "Welcome6" && <Welcome6 closePopup={closePopup} />}
          {content === "Welcome7" && <Welcome7 closePopup={closePopup} />}
          {content === "Welcome8" && <Welcome8 closePopup={closePopup} />}
          {content === "Welcome9" && <Welcome9 closePopup={closePopup} />}
        </div>
      </motion.div>
    </motion.div>
  );
}
