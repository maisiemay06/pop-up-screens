import profileImg from "../imgs/profile-img.png";
import "../styles/TimerNav.css";

export default function TimerNav() {
  return (
    <header className="counter-nav">
      <i className="fa-solid fa-bars"></i>
      <h6 className="timer-title">the next Meeow starts in</h6>
      <h1 className="timer-countdown">23:54</h1>
      <button className="book-meeow-btn button">book this Meeow</button>

      <i className="fa-solid fa-magnifying-glass"></i>
      <input className="search" type="text" placeholder="Search here"></input>
      <div className="drop-down-hover">
        <a href="" className="notifications">
          <i className="fa-solid fa-bell"></i>
          notifications
        </a>
        <a href="">
          <img src={profileImg} className="nav-profile-img"></img>
        </a>
      </div>
      <div className="drop-down-nav">
        <div className="padding"></div>
        <ul>
          <li>Account</li>
          <li>Profile</li>
          <li>Meeow History</li>
          <li>Join referral scheme</li>
          <li>Sign into referral scheme</li>
          <li>Settings</li>
          <li>Logout</li>
        </ul>
      </div>
    </header>
  );
}
