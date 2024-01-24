import { configureStore } from "@reduxjs/toolkit";
import  showUsers  from "../features/userDataSlice";


const store = configureStore(
    {
        reducer : {
            users : showUsers,
        }
    }
    )

export default store;   