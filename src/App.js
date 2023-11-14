import { useEffect, useState } from "react";
import './App.css';
import NoteContext from "./Context/noteContext";
import { AppProvider } from "./Context/NoteState";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainContainerDesktop from './Components/MainContainerDesktop/MainContainerDesktop';
import SidebarMobile from "./Components/Mobile/SidebarMobile/SidebarMobile";
import NotesMobile from "./Components/Mobile/NotesMobile/NotesMobile"



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
    <AppProvider>
      <div className="App">
        {screenSize > 500 ? (
          <MainContainerDesktop />
        ) : (
          <Router>
          <Routes>
            <Route path="/" element={<SidebarMobile />} />
            <Route path="/notes" element={<NotesMobile />} />
          </Routes>
        </Router>
      )}
      </div>
    </AppProvider>
    </>
  );
}

export default App;
