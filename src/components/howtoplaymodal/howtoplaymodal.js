import React from "react";
import "./howtoplaymodal.css";

function HowToPlayModal() {
  return (
    <div id="how-to-play" className="modal bottom-sheet">
      <div className="modal-content">
        <h4>
          <b>DefunctDisney</b>
        </h4>
        <h6>HOW TO PLAY</h6>
        <hr />
        <p className="left-align how-to-text">
          DefunctDisney is a memory game, featuring photos from Walt Disney World's past. To start
          the game, click on any of the 12 photos shown, but remember which one you've clicked! The
          goal is for you to click on each photo only once, until you've clicked them all. If you
          click on a photo you've already chosen, the game will end. Test your memory and walk down
          memory lane with these defunct Disney rides and attractions.
        </p>
      </div>
      <div className="modal-footer">
        <a href="#!" className="modal-close waves-effect orange darken-3 btn align-center">
          Got It!
        </a>
      </div>
    </div>
  );
}

export default HowToPlayModal;
