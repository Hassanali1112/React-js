import { createAsyncThunk, createSlice , nanoid } from "@reduxjs/toolkit";
import { useEffect } from "react";

const initialState = {
     users : [],
     loading : false,
     error : null
     
};

// Post Action
export const newUser = createAsyncThunk('newUser', async (data , {rejectWithValue})=>{

    const response = await fetch("https://65aca660adbd5aa31bdf65f1.mockapi.io/user", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
    try{
        const result = await response.json();
        return result
    }catch (error){
        return rejectWithValue(error)
    }
      
})


// Get Action
export const showUsers = createAsyncThunk("showUser" , async (data , rejectWithValue)=>{
    const response = fetch("https://65aca660adbd5aa31bdf65f1.mockapi.io/user")

    try{
        const result = (await response).json();
        return result 
    } catch(error){
       return rejectWithValue(error)
    }
})

// Delete Action

export const deleteUser = createAsyncThunk("deleteUser", async (id ,rejectWithValue)=>{
    const response = await fetch(`https://65aca660adbd5aa31bdf65f1.mockapi.io/user/${id}`,{
        method : "DELETE",
    })
    try{
        const result = await response.json();
        return result;
    } catch (error){
        return rejectWithValue(error)
    }
})

// Update Action

export const updateData = createAsyncThunk('updateData', async (data , {rejectWithValue})=>{

    const response = await fetch(`https://65aca660adbd5aa31bdf65f1.mockapi.io/user/${data.id}`, {
        method: "PUT", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
    try{
        const result = await response.json();
        return result
    }catch (error){
        return rejectWithValue(error)
    }
      
})

export const userSlice = createSlice (
    {
        name : "userData",
        initialState,
        reducers :{},
        extraReducers : (builder) => {
            builder.addCase(newUser.pending , (state)=>{
                state.pending = true;
            }).addCase(newUser.fulfilled, (state,action)=>{
                state.pending = false;
                state.users.push(action.payload)
            }).addCase(newUser.rejected, (state, action)=>{
                state.pending = false;
                state.users = action.payload;
            } ).addCase(showUsers.pending, (state)=>{
                state.pending = true;
            }).addCase(showUsers.fulfilled, (state, action)=>{
                state.pending = false;
                state.users = action.payload;
            }).addCase(showUsers.rejected, (state, action) =>{
                state.pending = false;
                state.users = action.payload;
            }).addCase(deleteUser.pending, (state)=>{
                state.pending = true;
            }).addCase(deleteUser.fulfilled, (state, action)=>{
                state.pending = false;
                state.users = state.users.filter(user => user.id !== id)
            }).addCase(deleteUser.rejected, (state, action)=>{
                state.pending = false;
                state.users = action.payload;
            }).addCase(updateData.pending, (state)=>{
                state.pending = true;
            }).addCase(updateData.fulfilled, (state, action)=>{
                state.pending = false;
                state.users = state.users.map((user)=>{
                    user.id === action.payload.id ? action.payload : user
               } )}).addCase(updateData.rejected , (state, action)=>{
                    state.pending = false;
                    state.users = action.payload;
                })
            }})
            
       


export default userSlice.reducer;







// extraReducers : {
//     [newUser.pending] : (state)=>{
//         state.pending = true;
//     },
//     [newUser.fulfilled] : (state, action) => {
//         state.pending = false;
//         state.users.push(action.payload) 
//     },
//     [newUser.rejected] : (state, action) => {
//         state.pending = false;
//         state.users = action.payload; 
//     }
// ,
// [showUsers.pending] : (state,action)=>{
//     state.pending = true;
// },
// [showUsers.fulfilled] : (state, action)=>{
//     state.pending = false;
//     state.users = action.payload;
// },
// [showUsers.rejected] : (state,action)=>{
//     state.pending = false;
//     state.users = action.payload;
// }
// }