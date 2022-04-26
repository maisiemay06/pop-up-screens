import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import linkedInPost from "../../imgs/linkedin-post.png";
import { useState } from "react";
import clappingEmoji from "../../imgs/clapping-emoji.png";

// BookedStarting popup is linked to button for demo purposes only
// This should be rendered when a user has the next Meeow is about to start and the user has it booked

export default function JustJoined({ closePopup }) {
  const [popupPreparingLinkedin, setPopupPreparingLinkedin] = useState(false);
  function postToLinkedin() {
    setPopupPreparingLinkedin(true);
  }

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
        className="popup "
      >
        <FaTimes id="close-btn" onClick={closePopup} />
        {popupPreparingLinkedin && (
          <PreparingLinkedIn closePopup={closePopup} />
        )}
        {!popupPreparingLinkedin && (
          <div className="popup-joined">
            <div className="popup-text">
              <h2 className="popup-title">
                help us make Meeow amazing,{" "}
                <span className="underline">for you!</span>
              </h2>
              <p>
                The more people join the Meeow community, the more new
                connections everyone can make.
              </p>
              <p>
                Click below to place an automated post just like the example on
                the right onto your Linkedin feed.
              </p>
              <p>
                Don't forget to tag anyone you think would benefit from Meeow
                membership.
              </p>
              <button onClick={postToLinkedin} id="post-linkedin-btn">
                post to your Linkedin now
              </button>
              <a href="">Don't show me this again</a>
            </div>
            <div className="image-container">
              <img src={linkedInPost} alt="Linkedin Post" />
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

export function PreparingLinkedIn({ closePopup }) {
  const [popupPostedLinkedin, setPopupPostedLinkedIn] = useState(false);
  let timeleft = 6;

  let countdown = setInterval(function () {
    timeleft = timeleft - 1;
    if (timeleft <= 0) {
      clearInterval(countdown);
      setPopupPostedLinkedIn(true);
    }

    document.getElementById("timer").innerHTML = timeleft;
  }, 1000);

  return (
    <>
      {popupPostedLinkedin && <PostedLinkedin closePopup={closePopup} />}
      <div className="popup-text preparing-linkedin">
        <div className="popup-countdown">
          <h2 id="timer">5</h2>
        </div>
        <h2 className="popup-title" id="popup-title">
          we're preparing y<span className="underline">our post</span> and
          taking you to Linkedin
        </h2>
        <h4 className="popup-subtitle">
          don't forget to tag everyone you think would benefit from Meeow
        </h4>
      </div>
    </>
  );
}

export function PostedLinkedin({ closePopup }) {
  return (
    <div className="popup-text preparing-linkedin">
      <img src={clappingEmoji} alt="clapping emoji" />
      <h2 className="popup-title">
        <span className="underline">it's posted!</span> we're taking you to
        Linkedin
      </h2>
      <h4 className="popup-subtitle">
        don't forget to tag everyone you think would benefit from Meeow
      </h4>
    </div>
  );
}
