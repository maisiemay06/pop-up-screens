import linkedinJustJoined from "../../imgs/linkedin-just-joined.png";

// ShareLinkedin popup is linked to button for demo purposes only
// This should be rendered when a user has just joined Meeow

export default function ShareLinkedinJoined({ closePopup, openPopup }) {
  function postToLinkedin() {
    closePopup();
    openPopup("PreparingLIPost", "white");
  }

  return (
    <>
      <div className="popup-joined">
        <div className="popup-text">
          <h2 className="popup-title">
            help us make Meeow amazing,
            <br />
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
            Don't forget to tag anyone you think would benefit from Meeow
            membership.
          </p>
          <button onClick={postToLinkedin} id="post-linkedin-btn">
            post to your Linkedin now
          </button>
          <a href="">Don't show me this again</a>
        </div>
        <div className="image-container">
          <img src={linkedinJustJoined} alt="Linkedin Post" />
        </div>
      </div>
    </>
  );
}
