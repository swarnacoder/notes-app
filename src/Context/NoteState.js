import { createContext, useState } from "react";

const NoteState = createContext({
  notes: [],
  setNotes: () => {},
  selected: "",
  setSelected: () => {},
});

const AppProvider = ({ children }) => {
  const [selected, setSelected] = useState(""); 
  const [notes, setNotes] = useState([]); 


  const state = {
    notes,
    setNotes,
    selected,
    setSelected,
  };

  return (
    <NoteState.Provider value={state}>
      {children}
    </NoteState.Provider>
  );
};

export { AppProvider };

export default NoteState;
