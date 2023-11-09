import React from 'react'
import "./MainContainerDesktop.css"
import HomeDesktop from '../HomeDesktop/HomeDesktop'
import SidebarDesktop from '../SidebarDesktop/SidebarDesktop'
import NoteContext from '../../Context/noteContext'
import NotesDesktop from '../NotesDesktop/NotesDesktop'

function MainContainer() {

  const {selected } = NoteContext();
  return (
    <>
      <div className="container">
        <SidebarDesktop/>
        {selected.length > 0 ? <NotesDesktop /> : <HomeDesktop />}
      </div>
    </>
  )
}

export default MainContainer
