import React from "react";
import "./InitialNamesMobile.css";
import noteContext from "../../../Context/noteContext";
import { useNavigate } from "react-router-dom";

function InitialNamesMobile({ title }) {
  const navigate = useNavigate();
  const { selected, setSelected } = noteContext();
  const nameInitals = title[0].name
    .split(" ")
    .map((word) => word.charAt(0))
    .join("")
    .toUpperCase();

  const shortTitle = title[0].name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const handleInitialClick = () => {
    localStorage.setItem("selected", title[0].name);
    setSelected(title[0].name);
    navigate("/notes");
  };

  return (
    <div
      onClick={handleInitialClick}
      className={`displayLogo_Mobile ${
        selected === title[0].name ? "displayTitle_Mobile" : null
      }`}
    >
      <div className="initialLogo_Mobile" style={{ backgroundColor: title[0].color }}>
        {nameInitals}
      </div>
      <p>{shortTitle}</p>
    </div>
  );
}

export default InitialNamesMobile;
