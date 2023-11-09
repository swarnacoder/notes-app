import { useEffect, useState } from "react";
import './App.css';
import NoteContext from "./Context/noteContext";
import { Provider } from "./Context/NoteState";

import MainContainerDesktop from './Components/MainContainerDesktop/MainContainerDesktop';

function App() {

  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const { selected, setSelected } = NoteContext();

  useEffect(() => {
    setSelected(localStorage.getItem("selected") || "");
  }, [selected, setSelected]);

  const checkScreenSize = () => {
    setScreenSize(window.innerWidth);
  };

  window.addEventListener("resize", checkScreenSize);


  return (
    <>
    <Provider>
      <div className="App">
        {screenSize > 500 ? (
          <MainContainerDesktop />
        ) : (
          <div>
            </div>
        )}
      </div>
    </Provider>
    </>
  );
}

export default App;
