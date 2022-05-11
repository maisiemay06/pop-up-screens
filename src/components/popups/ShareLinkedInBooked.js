import { useState } from "react";
import clappingEmoji from "../../imgs/clapping-emoji.png";
import linkedinBookedMeeow from "../../imgs/linkedin-booked-meeow.png";

// ShareLinkedinBooked popup is linked to button for demo purposes only
// This should be rendered when a user has booked a Meeow or just joined to platform and they have not clicked 'don't show me this again'

export default function ShareLinkedinBooked({ closePopup }) {
  const [popupPreparingLinkedin, setPopupPreparingLinkedin] = useState(false);
  function postToLinkedin() {
    setPopupPreparingLinkedin(true);
  }

  return (
    <div>
      {popupPreparingLinkedin && <PreparingLinkedIn />}
      {!popupPreparingLinkedin && (
        <div className="popup-joined">
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
            <img src={linkedinBookedMeeow} alt="Linkedin Post" />
          </div>
        </div>
      )}
    </div>
  );
}

export function PreparingLinkedIn() {
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
      {popupPostedLinkedin && <PostedLinkedin />}
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

export function PostedLinkedin() {
  return (
    <div className="popup-text preparing-linkedin">
      <img src={clappingEmoji} alt="clapping emoji" />
      <h2 className="popup-title">
        <span className="underline">it's posted!</span> we're taking you to
        Linkedin
      </h2>
    </div>
  );
}
