import React from "react";
import "./InitialNames.css";
import noteContext from "../../Context/noteContext";

function InitialNames({ title }) {
  const { selected, setSelected } = noteContext();
  const nameInitals = title[0].name
    .split(" ")
    .map((word) => word.charAt(0))
    .join("")
    .toUpperCase();

  const newTitle = title[0].name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const handleInitialClick = () => {
    setSelected(title[0].name);
  };

  return (
    <div
      onClick={handleInitialClick}
      className={`displayLogo ${
        selected === title[0].name ? "displayTitle" : null
      }`}
    >
      <div className="initialLogo" style={{ backgroundColor: title[0].color }}>
        {nameInitals}
      </div>
      <p>{newTitle}</p>
    </div>
  );
}

export default InitialNames;