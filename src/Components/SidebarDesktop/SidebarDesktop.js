import React, { useState, useEffect, useRef } from "react";
import "./SidebarDesktop.css";
import PopUpDesktop from "../PopUpDesktop/PopUpDesktop";
import InitialNames from "../InitialNames/InitialNames";

function SidebarDesktop() {
  const [titles, setTitles] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [groupNamesParent, setGroupNamesParent] = useState(
    localStorage.getItem("groupNames") || []
  );

  useEffect(() => {
    const data = localStorage.getItem("groupNames");
    if (data) {
      setGroupNamesParent(JSON.parse(data));
    } else {
      setGroupNamesParent([]);
    }
  }, []);

  useEffect(() => {
    if (groupNamesParent.length > 0) {
      const obj = JSON.parse(localStorage.getItem("groupNames"));
      const result = Object.keys(obj).map((key) => [obj[key]]);
      setTitles(result);
    }
  }, [groupNamesParent]);

  const handleClick = () => {
    setShowPopup(true);
  };
  const handleClose = () => {
    setShowPopup(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) {
      setShowPopup(false);
    }
  };

  const overlayRef = useRef();

  return (
    <>
      <div className="sidebarContainer">
        <div className="sidebarHeading">Pocket Notes</div>
        <div className="sidebarPlus">
          <button onClick={handleClick}>
            <span id="plus">+</span>
            <span>Create Notes Group</span>
          </button>
        </div>
        <div >
          {titles.length > 0 ? (
            titles.map((title, index) => (
              <InitialNames key={index} title={title} />
            ))
          ) : (
            <div>
              <p>No Notes Group Created</p>
            </div>
          )}
        </div>
        {showPopup && (
          <div
            className="popupDesktop"
            ref={overlayRef}
            onClick={handleOverlayClick}
          >
            <PopUpDesktop
              groupNamesParent={groupNamesParent}
              setGroupNamesParent={setGroupNamesParent}
              onClose={handleClose}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default SidebarDesktop;
