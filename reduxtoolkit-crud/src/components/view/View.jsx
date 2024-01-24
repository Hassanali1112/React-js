import { useSelector } from "react-redux";
import "./View.css";

const View = ({ 
    id,
     viewPopup,
      setViewPopup
     }) => {
      const users = useSelector(state => state.users.users)
      const currentUser = users.filter(user => user.id === id)
  return (
    <>
    <div className="ModalContainer">
        <div className="Modal">
          <div className="modal-body">
            <div>
            <button className="close" onClick={()=> setViewPopup(false)}>X</button>
            
            </div>
            <div className="details ">
              <h3>{currentUser[0].name}</h3>
              <p>{ currentUser[0].email}</p>
              <p>{ currentUser[0].age}</p>
              <p>{ currentUser[0].gender}</p>

            </div>
          </div>
        
        </div>
    </div>
    </>

  )
}

export default View


























