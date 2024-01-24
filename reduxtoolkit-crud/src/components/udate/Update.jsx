import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { updateData } from '../../features/userDataSlice'

const Update = () => {
  const [user, setUser] = useState("")
  const dispatch = useDispatch();
  const navigate = useNavigate()

    const {id} = useParams()
    const {users, pending } = useSelector((state)=> state.users)
  

useEffect(()=>{
  if(id){
    const currentUser = users.filter(user=> user.id === id)
    setUser(currentUser[0])
    
  }
}, [])   
const updatedValues = (e) => {
  setUser({...user, [e.target.name] : e.target.value})
}

const updateUserData = (e) =>{
  e.preventDefault();
  dispatch(updateData(user))
  navigate("/read")
}
    
  return (
    <div className='container w-50 m-auto border border-1 border-secondary p-5 rounded my-5'>
    <form onSubmit={updateUserData}>

        <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
        <input type="text"   className="form-control" value={user.name}id="exampleInputEmail1" aria-describedby="emailHelp"  name="name"
        onChange={updatedValues}
        />
        </div>

        <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" className="form-control" value={ user.email }id="exampleInputEmail1" aria-describedby="emailHelp"  name="email"
        onChange={updatedValues}
          />
        </div>

        <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Age</label>
        <input type="number" className="form-control" value={user.age}  name="age" id="exampleInputPassword1" onChange={updatedValues}
        />
        </div>

       
        
        <h2 className='text-center'> Select Gender</h2>
        <div className='d-flex my-3 border border-1 border-secondary p-3' >
            
            <div className="form-check me-3">
            <input className="form-check-input" name='gender'  
            checked= {user.gender === "male"}
            type="radio" value="male" id="flexCheckDefault" 
            onChange={updatedValues} />
            <label className="form-check-label" htmlFor="flexCheckDefault">
            Male
            </label>
            </div>

            <div className="form-check me-3">
            <input className="form-check-input" name='gender' type="radio" value="female" id="flexCheckChecked" 
            checked= {user.gender === "female"} onChange={updatedValues} />
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

export default Update