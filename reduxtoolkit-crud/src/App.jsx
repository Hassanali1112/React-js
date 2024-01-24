import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Navbar from './components/Navbar/Navbar'
import Create from './components/create/Create'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Read from './components/read/Read'
import View from './components/view/View'
import Update from './components/udate/Update'

function App() {
 

  return (
    <>
      <Navbar />
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Create />} />
        <Route path='read' element={<Read />} />
        <Route path='view' element={<View />} />
        <Route path='update/:id' element={<Update />} />
      </Routes>
      </BrowserRouter>
      
      
    </>
  )
}

export default App
