import React from 'react'
import { useAuth } from '../../hook/useAuth'

const Profile = () => {
    const  {users,login}  = useAuth()
    
  return (
    <div className='container'>
        <h2 className='text-center w-100 bg-secondary p-5 h1 '> Profile</h2>
        <div className="row justify-content-between align-items-center h-100 bg-info">
            <div className="col-lg-2">{ login.name }</div>
            <div className="col-lg-6">{login.email}</div>
            <div className="col-lg-4">{login.pwd}</div>
        </div>
        
     </div>
  )
}

export default Profile