import React, { useState, useEffect, useRef } from "react";
import "./SidebarMobile.css";

import InitialNamesMobile from "../InitialNamesMobile/InitialNamesMobile"; 
import PopupMobile from "../PopupMobile/PopupMobile"



function SidebarMobile() {
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
      <div className="sidebarContainer_Mobile">
        <div className="sidebarHeading_Mobile">Pocket Notes</div>
        <div className="sidebarPlus_Mobile">
          <button onClick={handleClick}>
            <span id="plus_Mobile">+</span>
            <span>Create Notes Group</span>
          </button>
        </div>


        <div>
  {titles.length > 0 &&
    titles.map((title, index) => (
      <InitialNamesMobile key={index} title={title} />
    ))}
</div>


        {showPopup && (
          <div
            className="popup_Mobile"
            ref={overlayRef}
            onClick={handleOverlayClick}
          >
            <PopupMobile
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

export default SidebarMobile;
