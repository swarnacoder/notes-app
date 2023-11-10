import React, { useState } from "react";
import "./PopupMobile.css";

function PopupMobile({ groupNamesParent, setGroupNamesParent, onClose }) {
  const [groupName, setGroupName] = useState("");
  const [circleColor, setCircleColor] = useState("");

  const handleColor = (e) => {
    const div = e.target;
    setCircleColor(getComputedStyle(div).backgroundColor);
    console.log(circleColor);
  };

  const handleGroupName = (e) => {
    setGroupName(e.target.value);
  };

  const createGroup = () => {
    const newGroup = { name: groupName, color: circleColor };
    setGroupNamesParent([...groupNamesParent, newGroup]);
    localStorage.setItem(
      "groupNames",
      JSON.stringify([...groupNamesParent, newGroup])
    );
    onClose();
  };

  return (
    <>
      <div className="popupMobile">
        <div className="popupHeading_Mobile">Create New Notes Group </div>
        <div className="popupGroup_Mobile">
          <span>Group Name</span>
          <input
            type="text"
            placeholder="Enter Group Name..."
            value={groupName}
            onChange={handleGroupName}
          />
        </div>
        <div className="popupGroupColor_Mobile">
          <span>Choose Colour</span>
          <div className="popupColor_Mobile">
            <div
              className={`popupColors_Mobile purple ${
                circleColor === "rgb(179, 139, 250)" ? "highlight" : ""
              }`}
              onClick={handleColor}
            ></div>
            <div
              className={`popupColors_Mobile pink ${
                circleColor === "rgb(255, 121, 242)" ? "highlight" : ""
              }`}
              onClick={handleColor}
            ></div>
            <div
              className={`popupColors_Mobile lightBlue ${
                circleColor === "rgb(67, 230, 252)" ? `highlight` : ""
              }`}
              onClick={handleColor}
            ></div>
            <div
              className={`popupColors_Mobile brown ${
                circleColor === "rgb(241, 149, 118)" ? `highlight` : ""
              }`}
              onClick={handleColor}
            ></div>
            <div
              className={`popupColors_Mobile darkBlue ${
                circleColor === "rgb(0, 71, 255)" ? `highlight` : ""
              }`}
              onClick={handleColor}
            ></div>
            <div
              className={`popupColors_Mobile royalBlue ${
                circleColor ===  "rgb(102, 145, 255)" ? `highlight` : ""
              }`}
              onClick={handleColor}
            ></div>
          </div>
        </div>

        <div className="popupCreate_Mobile">
          <button onClick={createGroup} disabled={groupName.length === 0}>
            Create
          </button>
        </div>
      </div>
    </>
  );
}

export default PopupMobile;
