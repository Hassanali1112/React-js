import React, { useState } from 'react'
import { useAuth } from '../../hook/useAuth'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [pwd, setPwd] = useState('')
  const {users,login , setLogin} = useAuth()
  const profile = useNavigate()

  const loginHandler = (e) =>{
    e.preventDefault();
    const userExist = users.find(items=> items.email === email && items.pwd === pwd)
    if(userExist){
      setLogin(userExist)
      console.log(userExist)
      profile('/profile')
    } else {
      console.log('invailed user')
    }
    
  }
  
  return (
    <form>
        <div className='w-50 m-auto rounded d-flex flex-column align-items-center  justify-content-evenly p-5 border border-primary border-1 ' style={{height : '50vh'}}>
           
            <div>
                <label htmlFor="email">Enter Email : </label>
                <input type="email" placeholder='Enter Email'  
                onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>
            <div>
                <label htmlFor="password">Enter Password : </label>
                <input type="password" placeholder='Enter Password' 
                onChange={(e)=>{setPwd(e.target.value)}}/>
            </div>
            <button className='btn btn-success w-100 '
            onClick={loginHandler}>login</button>
        </div>
        
    </form>
  )
}

export default SignIn