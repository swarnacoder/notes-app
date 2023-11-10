import React from "react";
import "./HomeDesktop.css";
import HomeImage from "../../Assests/Image/home.png";
import lock from "../../Assests/Icon/lock.svg";
function HomeDesktop() {
  return (
    <>
      <div className="homeContainer">
        <img src={HomeImage} alt="homeImage" />
        <h1>Pocket Notes</h1>
        <p>
          Send and receive messages without keeping your phone online.
          <br />
          Use Pocket Notes on up to 4 linked Devices and 1 mobile phone.
        </p>
        <div className="homeFooter">
          <img src={lock} alt="lockImage" />
          <span>end-to-end encrypted</span>
        </div>
      </div>
    </>
  );
}

export default HomeDesktop;
