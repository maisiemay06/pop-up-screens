import linkedinBookedMeeow from "../../imgs/linkedin-booked-meeow.png";
import linkedinJustJoined from "../../imgs/linkedin-just-joined.png";



export default function ShareLinkedinJoined({ closePopup, openPopup, image }) {
  function postToLinkedin() {
    closePopup();
    openPopup("PreparingLIPost", "white");
  }

  return (
    <>
      <div className="popup-joined">
        <div className="popup-text">
          <h2 className="popup-title">
            help us make Meeow amazing, <br className="desk-only" />
            for you!
          </h2>
          <p>
            The more people join the Meeow community, the more new connections
            everyone can make.
          </p>
          <p className="desk-only">
            Click below to place an automated post just like the example on the
            right onto your Linkedin feed.
          </p>
          <p className="mob-only">
            Click below to place a post onto your Linkedin feed.
          </p>
          <p>
            Don't forget to tag anyone you think would benefit from Meeow
            membership.
          </p>
          <button onClick={postToLinkedin} id="post-linkedin-btn">
            post to Linkedin now
          </button>
          <a href="">Don't show me this again</a>
        </div>
        <div className="image-container">
          <img
            src={
              image === "linkedinBookedMeeow"
                ? linkedinBookedMeeow
                : linkedinJustJoined
            }
            alt="Linkedin Post"
          />
        </div>
      </div>
    </>
  );
}
