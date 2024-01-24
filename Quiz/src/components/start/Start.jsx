import { useContext, useRef } from 'react';
import './Start.css';

const Start = ({setuserName}) => {
  const userName = useRef()
  const startHandler = () =>{
   userName.current.value && setuserName(userName.current.value)
  }
  return (
    <div className='start'>
        <input placeholder='enter your name' className='nameInput ' ref={userName} />
        <button className='btn btn-success w-100 text-dark fw-bold fs-5' onClick={startHandler} >Start</button>
    </div>
  )
}

export default Start