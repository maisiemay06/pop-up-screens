import clappingEmoji from "../../imgs/clapping-emoji.png";

export default function PostedLI() {
  return (
    <div className="popup-text preparing-linkedin posted-linkedin">
      <img src={clappingEmoji} alt="clapping emoji" />
      <h2 className="popup-title">
        it's posted!
        <br /> we're taking you to Linkedin
      </h2>
    </div>
  );
}
