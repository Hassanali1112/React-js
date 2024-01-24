import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showUsers } from '../../features/userDataSlice'
import hassan from "../../assets/hassan.jpeg";
import View from '../view/View';
import { Link } from 'react-router-dom';
import { deleteUser } from '../../features/userDataSlice';
import { useNavigate } from 'react-router-dom';


const Read = () => {
  const [id, setId] = useState(null)
  const [viewPopup, setViewPopup] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(showUsers()); 
  }, [])
  
  const deleteHandler = (id) =>{
    dispatch(deleteUser(id));
    navigate('/read')
  }


  const  { users, loading }   = useSelector(state => state.users)
  
  if (loading){
   
    return ( <h2 >
      loading
      </h2> )
  }
  
  return (
    <div>
      <div>
    { viewPopup  && <View  
    id={ id }
    viewPopup={ viewPopup }
    setViewPopup={ setViewPopup }/>}
    <div>
    {
      users && users.map(user=>(
    
    
    <div className="container w-75 my-4   m-auto" key={user.id}>
    <div className="card m-2 p-4" >
  
  <div className="card-body">
    <div className='row'>
      <div className='col-4'>
        <img src={ hassan }  className="img-fluid " alt="" />
      </div>
      <div className='col-6'>
      <h5 className="card-title">{user.name}</h5>
      <p className="card-text">{user.email}</p>
      <h5>{user.gender}</h5>
     
      <div className='d-flex w-50 '>
      <Link className='btn btn-success me-2'
        onClick={()=> [setId(user.id), setViewPopup(true)   ]}
      >view</Link>
      <Link to={`/update/${user.id}`} className='btn btn-primary me-2' >Edit</Link>
      <Link className='btn btn-danger me-2' onClick={()=> deleteHandler(user.id)  }
      >Delete</Link>
    </div>
      </div>
    </div> 
  </div>
</div>
</div>
))
      }
        </div>
        </div>
    </div>
  )
}

export default Read


// dispatch(deleteUser(user.id))
// onClick={()=> dispatch(deleteHandler(user.id)) }