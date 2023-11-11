import React, { useState, useEffect, useRef } from "react";
import "./SidebarDesktop.css";
import PopUpDesktop from "../PopUpDesktop/PopUpDesktop";
import InitialNames from "../InitialNames/InitialNames";

function SidebarDesktop() {
  const [titles, setTitles] = useState([]);
  const [openPopup, setopenPopup] = useState(false);
  const [groups, setGroups] = useState(
    JSON.parse(localStorage.getItem("groupNames")) || []
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
      <div className="sidebarContainer">
        <div className="sidebarHeading">Pocket Notes</div>
        <div className="sidebarPlus">
          <button onClick={handleClick}>
            <span id="plus">+</span>
            <span>Create Notes Group</span>
          </button>
        </div>
       <div>
  {titles.length > 0 &&
    titles.map((title, index) => (
      <InitialNames key={index} title={title} />
    ))}
</div>
        {openPopup && (
          <div
            className="popupDesktop_overlay"
            ref={overlayRef}
            onClick={handleOverlayClick}
          >
            <PopUpDesktop
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

export default SidebarDesktop;
