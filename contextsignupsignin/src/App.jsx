import React from 'react'
import Navbar from './components/navbar/Navbar'
import SignUp from './components/form/SignUp'
import SignIn from './components/form/SignIn'

import { Route, Routes } from 'react-router-dom'
import { useAuth } from './hook/useAuth'
import Profile from './components/form/Profile'

const App = () => {

  const {users} = useAuth()
 
 
  return (
    <div className=''>
      <Navbar />
      <div className="mt-3">
      <Routes>
        <Route path='' element={<h1>home</h1>} />
          <Route >
          <Route path='signup' element={<SignUp />} />
          <Route path='signin' element={<SignIn />} />
          <Route path='profile' element={<Profile />} />
        </Route>
      </Routes>
      </div>
    </div>
  )
}

export default App