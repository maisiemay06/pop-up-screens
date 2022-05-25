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
import WelcomeSeasonal from "./welcome/WelcomeSeasonal";
import WelcomeBack from "./welcome/WelcomeBack";
import WelcomeBack2 from "./welcome/WelcomeBack2";
import WelcomeFirst from "./welcome/WelcomeFirst";
import WelcomeTellFriend from "./welcome/WelcomeTellFriend";
import WelcomeFeedback from "./welcome/WelcomeFeedback";
import Welcome3Week from "./welcome/Welcome3Week";
import WelcomeBookBud from "./welcome/WelcomeBookBud";
import WelcomeAmbassador from "./welcome/WelcomeAmbassador";

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
          content === "WelcomeSeasonal" ||
          content === "WelcomeBack" ||
          content === "WelcomeBack2" ||
          content === "WelcomeFirst" ||
          content === "WelcomeTellFriend" ||
          content === "WelcomeFeedback" ||
          content === "Welcome3Week" ||
          content === "WelcomeBookBud"
            ? "welcome"
            : ""
        }
        ${content === "WelcomeAmbassador" ? "welcome ambassador" : ""}`}
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
          {content === "WelcomeSeasonal" && (
            <WelcomeSeasonal closePopup={closePopup} />
          )}
          {content === "WelcomeBack" && <WelcomeBack closePopup={closePopup} />}
          {content === "WelcomeBack2" && (
            <WelcomeBack2 closePopup={closePopup} />
          )}
          {content === "WelcomeFirst" && (
            <WelcomeFirst closePopup={closePopup} />
          )}
          {content === "WelcomeTellFriend" && (
            <WelcomeTellFriend closePopup={closePopup} />
          )}
          {content === "WelcomeFeedback" && (
            <WelcomeFeedback closePopup={closePopup} />
          )}
          {content === "Welcome3Week" && (
            <Welcome3Week closePopup={closePopup} />
          )}
          {content === "WelcomeBookBud" && (
            <WelcomeBookBud closePopup={closePopup} />
          )}
          {content === "WelcomeAmbassador" && (
            <WelcomeAmbassador closePopup={closePopup} />
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
