import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const form = () => {
  return (
    <div>
        <Link to='signup'>Sign up</Link>
        <Link to='signin'>Sign in</Link>
        <Outlet />
    </div>
  )
}

export default form