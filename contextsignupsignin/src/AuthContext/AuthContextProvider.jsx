import { useState } from "react";
import { AuthContext } from "./AuthContext";

const AuthContextProvider = ({children})=>{
    const [login , setLogin] = useState({})
    const [users , setUsers] = useState(
           [ 
               {
               name : "hassan ali",
               email : "ali@gmail.com",
               pwd: 1234,
               }
           ]
        )   
        return(
       <AuthContext.Provider value={{users,setUsers,login , setLogin}}>
           {children}
       </AuthContext.Provider>
        )
   };
   
   export default AuthContextProvider