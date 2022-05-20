export default function PreparingLIPost({ closePopup, openPopup }) {
  let timeleft = 6;

  let countdown = setInterval(function () {
    timeleft -= 1;
    if (timeleft <= 0) {
      clearInterval(countdown);
      closePopup();
      openPopup("PostedLI", "white");
    }

    document.getElementById("timer").innerHTML = timeleft;
  }, 1000);

  return (
    <>
      <div className="popup-text preparing-linkedin">
        <div className="popup-countdown">
          <h2 id="timer">5</h2>
        </div>
        <h2 className="popup-title" id="popup-title">
          we're preparing your post
          <br /> and taking you to Linkedin
        </h2>
        <h4 className="popup-subtitle">
          don't forget to tag everyone you think could benefit from networking
          on Meeow
        </h4>
      </div>
    </>
  );
}
