import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { useState } from "react";
import CalendarRow from "./CalendarRow";
import CalendarHeader from "./CalendarHeader";
import Popup from "./popups/Popup";

export default function Calendar() {
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupContent, setPopupContent] = useState("");
  const [popupColor, setPopupColor] = useState("");
  const [image, setImage] = useState("");
  function openPopup(content, color, img) {
    setPopupOpen(true);
    setPopupContent(content);
    setPopupColor(color);
    setImage(img);
  }
  function closePopup() {
    setPopupOpen(false);
  }

  return (
    <div>
      {popupOpen && (
        <Popup
          closePopup={closePopup}
          content={popupContent}
          color={popupColor}
          openPopup={openPopup}
          image={image}
        />
      )}

      <div className="week-picker">
        <MdArrowBackIosNew id="prev-week" />
        <MdArrowForwardIos id="next-week" />
        <h4>April 2022</h4>
      </div>
      <div className="calendar container-fluid">
        <CalendarHeader />

        <CalendarRow time="7am" openPopup={openPopup} />
        <CalendarRow time="8am" openPopup={openPopup} />
        <CalendarRow time="9am" openPopup={openPopup} />
        <CalendarRow time="10am" openPopup={openPopup} />
        <CalendarRow time="11am" openPopup={openPopup} />
        <CalendarRow time="12pm" openPopup={openPopup} />
        <CalendarRow time="1pm" openPopup={openPopup} />
        <CalendarRow time="2pm" openPopup={openPopup} />
        <CalendarRow time="3pm" openPopup={openPopup} />
        <CalendarRow time="4pm" openPopup={openPopup} />
        <CalendarRow time="5pm" openPopup={openPopup} />
        <CalendarRow time="6pm" openPopup={openPopup} />
        <CalendarRow time="7pm" openPopup={openPopup} />
        <CalendarRow time="8pm" openPopup={openPopup} />
        <CalendarRow time="9pm" openPopup={openPopup} />
        <CalendarRow time="10pm" openPopup={openPopup} />
        <CalendarRow time="11pm" openPopup={openPopup} />
        <CalendarRow time="12am" openPopup={openPopup} />
      </div>
      {/* BELOW BUTTONS FOR DEMO PURPOSES ONLY */}
      <div className="demo-buttons">
        <button onClick={() => openPopup("BookedMeeow", "blue")}>
          booked a Meeow
        </button>
        <button onClick={() => openPopup("MeeowStarting", "white")}>
          next Meeow starting
        </button>
        <button onClick={() => openPopup("BookedStarting", "white")}>
          booked Meeow starting
        </button>
        <button onClick={() => openPopup("SomeoneJoined", "blue")}>
          someone else just clicked
        </button>
        <button onClick={() => openPopup("NoOneThere", "white")}>
          no one there
        </button>
        <button onClick={() => openPopup("InviteFriends", "white")}>
          tell a friend
        </button>
        <button
          onClick={() =>
            openPopup("ShareLinkedInJoined", "blue", "linkedinJustJoined")
          }
        >
          i've just joined Meeow
        </button>
        <button
          onClick={() =>
            openPopup("ShareLinkedInJoined", "blue", "linkedinBookedMeeow")
          }
        >
          i've just booked a Meeow
        </button>
      </div>
      <div className="welcome-buttons demo-buttons">
        <button onClick={() => openPopup("WelcomeSeasonal", "white")}>
          Welcome Seasonal
        </button>
        <button onClick={() => openPopup("WelcomeBack", "white")}>
          Welcome Back
        </button>
        <button onClick={() => openPopup("WelcomeBack2", "white")}>
          Welcome Back 2
        </button>
        <button onClick={() => openPopup("WelcomeFirst", "white")}>
          Welcome First
        </button>
        <button onClick={() => openPopup("WelcomeTellFriend", "white")}>
          Welcome Tell Friend
        </button>
        <button onClick={() => openPopup("WelcomeFeedback", "white")}>
          Welcome Feedback
        </button>
        <button onClick={() => openPopup("Welcome3Week", "white")}>
          Welcome 3 a Week
        </button>
        <button onClick={() => openPopup("WelcomeBookBud", "white")}>
          Welcome Book Buddies
        </button>
        <button onClick={() => openPopup("WelcomeAmbassador", "white")}>
          Welcome Ambassador
        </button>
      </div>
    </div>
  );
}
