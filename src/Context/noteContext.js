import { useContext } from "react";
import NoteState from "../Context/NoteState" ;

const useNoteContext = () => {
  return useContext(NoteState);
}

export default useNoteContext;
