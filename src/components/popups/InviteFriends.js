import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

// BookedStarting popup is linked to button for demo purposes only
// This should be rendered when a user has the next Meeow is about to start and the user has it booked

export default function InviteFriends({ closePopup }) {
  function validateEmail(event) {
    let email = event.target.value;
    let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,6})+$/;
    if (regex.test(email)) {
      document.getElementById("invite-btn").classList.add("active-btn");
    } else {
      document.getElementById("invite-btn").classList.remove("active-btn");
    }
  }

  function sendInvites(event) {
    let button = document.getElementById("invite-btn");
    button.innerHTML = "invitations sent! thank you";
    button.classList.add("clicked-btn");
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
        className="popup popup-friends"
      >
        <FaTimes id="close-btn" onClick={closePopup} />
        <div className="popup-text">
          <h2 className="popup-title">
            <span className="underline">tell your friends</span> about Meeow
          </h2>
          <h4 className="popup-subtitle">
            The more people join the Meeow community, the more new connections
            everyone can make. Invite your friends to take their 14 free trial
          </h4>
          <p>
            Type your friends email addresses into the slots below and we’ll
            send them your invitation to join Meeow.
          </p>
          <input type="email" placeholder="Friend 1" onChange={validateEmail} />
          <input type="email" placeholder="Friend 2" onChange={validateEmail} />
          <input type="email" placeholder="Friend 3" onChange={validateEmail} />
          <input type="email" placeholder="Friend 4" onChange={validateEmail} />
          <input type="email" placeholder="Friend 5" onChange={validateEmail} />
          <button onClick={sendInvites} id="invite-btn">
            send your invitations now
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
