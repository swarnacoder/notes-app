import React, { useState, useEffect, useRef } from "react";
import "./SidebarMobile.css";

import InitialNamesMobile from "../InitialNamesMobile/InitialNamesMobile"; 
import PopupMobile from "../PopupMobile/PopupMobile"



function SidebarMobile() {
  const [titles, setTitles] = useState([]);
  const [openPopup, setopenPopup] = useState(false);
  const [groups, setGroups] = useState(
    localStorage.getItem("groupNames") || []
  );

  useEffect(() => {
    const data = localStorage.getItem("groupNames");
    if (data) {
      setGroups(JSON.parse(data));
    } else {
      setGroups([]);
    }
  }, []);

  useEffect(() => {
    if (groups.length > 0) {
      const obj = JSON.parse(localStorage.getItem("groupNames"));
      const result = Object.keys(obj).map((key) => [obj[key]]);
      setTitles(result);
    }
  }, [groups]);

  const handleClick = () => {
    setopenPopup(true);
  };
  const handleClosed = () => {
    setopenPopup(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) {
      setopenPopup(false);
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


        {openPopup && (
          <div
            className="popup_Mobile"
            ref={overlayRef}
            onClick={handleOverlayClick}
          >
            <PopupMobile
              groups={groups}
              setGroups={setGroups}
              handleClose={handleClosed}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default SidebarMobile;
