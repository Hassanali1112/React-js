import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hook/useAuth';


const SignUp = () => {
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ pwd, setPwd ] = useState('');
    const sigin = useNavigate();
    const {users, setUsers} = useAuth()
    

    const submitHandler = (e) =>{
        e.preventDefault();
        const newUser = {
            name : name,
            email : email,
            pwd : pwd,
        }
        console.log(newUser)
       const found = users.find(items => items.email === newUser.email)
       if (!found){
        console.log('user register successfully')
        console.log(users)
        setUsers([...users, newUser])
        sigin('/signin')

       } else {
        console.log('user exist')
       }

    }

  return (
    
    <form  >
        <div className='w-50 m-auto rounded d-flex flex-column align-items-center  justify-content-evenly p-5 border border-primary border-1 ' style={{height : '50vh'}}>
            <div >
                <label htmlFor="name">Enter Name : </label>
                <input type="text" placeholder='Enter Name' onChange={(e)=>{setName(e.target.value)}}
                />
            </div>
            <div>
                <label htmlFor="email">Enter Email : </label>
                <input type="email" placeholder='Enter Email' onChange={(e)=>{setEmail(e.target.value)}}
                />
            </div>
            <div>
                <label htmlFor="password">Enter Password : </label>
                <input type="password" placeholder='Enter Password' onChange={(e)=>{ setPwd(e.target.value)}} />
            </div>
            <button className='btn btn-success w-100 ' onClick={submitHandler}>Register</button>
        </div>
        
    </form>
  )
   
}

export default SignUp