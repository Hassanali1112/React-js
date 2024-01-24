import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { newUser } from '../../features/userDataSlice';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const navigate = useNavigate()
  const [users , setUsers] = useState({})
  const dispatch = useDispatch();
 

  const getInputValue = (e) =>{
    setUsers({...users, [e.target.name] : e.target.value} )
    
  }
   
  const getUserData =(e) =>{
    e.preventDefault()
    dispatch(newUser(users))
   
    navigate("/read")

  }
  
  return (
    <div className='container w-50 m-auto border border-1 border-secondary p-5 rounded my-5'>
        <form onSubmit={getUserData}>

            <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  name="name" onChange={getInputValue}/>
            </div>

            <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  name="email" onChange={getInputValue} />
            </div>

            <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Age</label>
            <input type="number" className="form-control"  name="age" id="exampleInputPassword1" 
            onChange={getInputValue}/>
            </div>

           
            
            <h2 className='text-center'> Select Gender</h2>
            <div className='d-flex my-3 border border-1 border-secondary p-3' >
                
                <div className="form-check me-3">
                <input className="form-check-input" name='gender' onChange={getInputValue} type="radio" value="male" id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                Male
                </label>
                </div>

                <div className="form-check me-3">
                <input className="form-check-input" name='gender'onChange={getInputValue} type="radio" value="female" id="flexCheckChecked"  />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                Female
                </label>
                </div>
            </div>
            
                
            <button type="submit" className="btn btn-primary w-100">Submit</button>
        </form>
    </div>
  )
}

export default Create