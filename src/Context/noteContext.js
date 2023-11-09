import { useContext } from "react";
import NoteState from "../Context/NoteState" ;

const NoteContext = () => {
  return useContext(NoteState);
}

export default NoteContext;