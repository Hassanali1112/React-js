import { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthContext";

const useAuth = ()=> {
    return useContext(AuthContext);
}
export {useAuth};