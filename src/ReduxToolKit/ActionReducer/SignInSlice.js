import { createSlice } from "@reduxjs/toolkit";

const initialState = []
const signInSlice = createSlice({
    name : "addSignIn",
    initialState,
    reducers : {
           addsignIn : (state, action) => {
                state.push(action.payload) 
        }, 
        }

})

export const { addsignIn } = signInSlice.actions;
export default signInSlice.reducer;