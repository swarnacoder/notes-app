import React, { useState } from "react";
import "./PopUpDesktop.css";

function PopUpDesktop({ groupNamesParent, setGroupNamesParent, onClose }) {
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
      <div className="popupDesktop">
        <div className="popupHeading">Create New Notes Group </div>
        <div className="popupGroup">
          <span>Group name</span>
          <input
            type="text"
            placeholder="Enter Group Name..."
            value={groupName}
            onChange={handleGroupName}
          />
        </div>
        <div className="popupGroupColor">
          <span>Choose Colour</span>
          <div className="popupColor">
            <div
              className={`popupColors purple ${
                circleColor === "rgb(179, 139, 250)" ? "highlight" : ""
              }`}
              onClick={handleColor}
            ></div>
            <div
              className={`popupColors pink ${
                circleColor === "rgb(255, 121, 242)" ? "highlight" : ""
              }`}
              onClick={handleColor}
            ></div>
            <div
              className={`popupColors lightBlue ${
                circleColor === "rgb(67, 230, 252)" ? `highlight` : ""
              }`}
              onClick={handleColor}
            ></div>
            <div
              className={`popupColors brown ${
                circleColor === "rgb(241, 149, 118)" ? `highlight` : ""
              }`}
              onClick={handleColor}
            ></div>
            <div
              className={`popupColors darkBlue ${
                circleColor === "rgb(0, 71, 255)" ? `highlight` : ""
              }`}
              onClick={handleColor}
            ></div>
            <div
              className={`popupColors royalBlue ${
                circleColor ===  "rgb(102, 145, 255)" ? `highlight` : ""
              }`}
              onClick={handleColor}
            ></div>
          </div>
        </div>

        <div className="popupCreate">
          <button onClick={createGroup} disabled={groupName.length === 0}>
            Create
          </button>
        </div>
      </div>
    </>
  );
}

export default PopUpDesktop;
