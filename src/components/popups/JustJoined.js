import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import linkedInPost from "../../imgs/linkedin-post.png";

// BookedStarting popup is linked to button for demo purposes only
// This should be rendered when a user has the next Meeow is about to start and the user has it booked

export default function JustJoined({ closePopup }) {
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
        className="popup popup-joined"
      >
        <FaTimes id="close-btn" onClick={closePopup} />
        <div className="popup-text">
          <h2 className="popup-title">
            help us make Meeow amazing,{" "}
            <span className="underline">for you!</span>
          </h2>
          <p>
            The more people join the Meeow community, the more new connections
            everyone can make.
          </p>
          <p>
            Click below to place an automated post just like the example on the
            right onto your Linkedin feed.
          </p>
          <p>
            Don’t forget to tag anyone you think would benefit from Meeow
            membership.
          </p>
          <button onClick={closePopup} id="post-linkedin-btn">
            post to your Linkedin now
          </button>
          <a href="">Don't show me this again</a>
        </div>
        <div className="image-container">
          <img src={linkedInPost} alt="Linkedin Post" />
        </div>
      </motion.div>
    </motion.div>
  );
}
