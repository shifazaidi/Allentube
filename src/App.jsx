import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Homa from './Pages/Home/Homa'
import Video from './Pages/Video/Video'

function App() {


  const [sidebar,setSidebar] = useState(true);
  

  return (
    <div>
      <Navbar setSidebar={setSidebar} />
      <Routes>
        <Route path='/'  element={<Homa sidebar={sidebar} />} />
        <Route path='/video/:categoryId/:videoId'  element={<Video/>} />
      </Routes>
    </div>
  )
}

export default App
