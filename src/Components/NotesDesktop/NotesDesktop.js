import React, { useState, useEffect } from "react";
import "./NotesDesktop.css";
import noteContext from "../../Context/noteContext";

import enter from "../../Assests/Icon/enter.svg";

function NotesDesktop() {
  const [bgColor, setBgColor] = useState("#fff");
  const [initials, setInitials] = useState("");
  const [text, setText] = useState("");
  const [selectedTitle, setSelectedTitle] = useState("");
  const { notes, setNotes, selected } = noteContext();

  useEffect(() => {
    setNotes(JSON.parse(localStorage.getItem(selected)) || []);
    const groupNames = JSON.parse(localStorage.getItem("groupNames"));
    const selectedGroup = groupNames.find((group) => group.name === selected);
    if (selectedGroup) {
      setBgColor(selectedGroup.color);
      setInitials(
        selectedGroup.name
          .split(" ")
          .map((word) => word.charAt(0))
          .join("")
          .toUpperCase()
      );
      setSelectedTitle(
        selectedGroup.name
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")
      );
    }
  }, [selected, setNotes]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSaveNotes();
    }
  };

  const handleSaveNotes = () => {
    if (!text.trim()) {
      return;
    }

    const notes = JSON.parse(localStorage.getItem(selected)) || [];
    const newNoteObj = {
      id: Date.now(),
      title: selected,
      content: text.trim(),
      time: new Date().toISOString(),
    };
    notes.push(newNoteObj);
    localStorage.setItem(selected, JSON.stringify(notes));
    setText("");
    setNotes(notes);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const formatData = (value) => {
    if (!value) return "";
    const date = new Date(value);

    const hrs = date.getHours();
    let amPm = "AM";
    let formattedHrs = hrs;
    if (hrs >= 12) {
      amPm = "PM";
      formattedHrs = hrs === 12 ? 12 : hrs - 12;
    }
    const day = date.getDate();
    const min = date.getMinutes();
    const month = date.toLocaleString("en-US", { month: "short" });
    const year = date.getFullYear();

    return (
      <div>
        <p className="time">
          {formattedHrs}:{min} {amPm}
        </p>
        <p className="date">
        {day} {month} {year}
        </p>
      </div>
    );
  };

  return (
    <>
      <div className="notesDesktop">
        <div className="notesHeading">
          <div
            className="notesHeadingColor"
            style={{ backgroundColor: bgColor }}
          >
            {initials}
          </div>
          <div className="textDesktop">{selectedTitle} </div>
        </div>

        <div className="midleDesktop">
          {notes && notes.length > 0
            ? notes.map((note, index) => (
                <div
                  key={index}
                  className="notesDesktopNotes"
                >
                  <div className="leftNotesDesktop">
                    <p>{formatData(note.time)}</p>
                  </div>
                  <div className="rightNotesDesktop">
                    <p>{note.content}</p>
                  </div>
                </div>
              ))
            : null}
        </div>

        <div className="enterDesktop">
          <textarea
            value={text}
            placeholder="Enter your text here..........."
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          ></textarea>

          <img src={enter} alt="enter" onClick={handleSaveNotes} />
        </div>
      </div>
    </>
  );
}

export default NotesDesktop;
