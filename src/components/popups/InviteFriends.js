import { useState } from "react";

// User clicks tell a friend button

export default function InviteFriends({ closePopup }) {
  const [emailGiven, setEmailGiven] = useState(false);
  const [invitesSent, setInvitesSent] = useState(false);

  function validateEmail(email) {
    const regex =
      /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,6})+$/;
    return regex.test(email);
  }

  function handleEmail(event) {
    let email = event.target.value;
    if (validateEmail(email)) {
      setEmailGiven(true);
    } else {
      setEmailGiven(false);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    setInvitesSent(true);
  }

  return (
    <div className="popup-text">
      <h2 className="popup-title">tell your friends about Meeow</h2>
      <h4 className="popup-subtitle">
        Every new member of Meeow makes the community bigger and better for you
        and everyone around the world. Invite your friends to join the Meeow
        community for free.
      </h4>
      <p>
        Type your friends' email addresses into the slots below to invite them
        to join Meeow
      </p>
      <div className="invite-fields">
        <input type="email" placeholder="Friend 1" onChange={handleEmail} />
        <input type="email" placeholder="Friend 2" onChange={handleEmail} />
        <input type="email" placeholder="Friend 3" onChange={handleEmail} />
        <input type="email" placeholder="Friend 4" onChange={handleEmail} />
        <input type="email" placeholder="Friend 5" onChange={handleEmail} />

        {!invitesSent && (
          <button
            id="send-invite-btn"
            className="invite-btn"
            disabled={emailGiven ? false : true}
            onClick={handleSubmit}
          >
            send your invitations now
          </button>
        )}
        {invitesSent && (
          <button id="sent-invite-btn" className="invite-btn">
            invitations sent! thank you
          </button>
        )}
      </div>
      <a href="" onClick={closePopup}>
        Don't show me this again
      </a>
    </div>
  );
}
