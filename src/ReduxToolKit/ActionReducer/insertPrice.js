import { createSlice } from "@reduxjs/toolkit";

const initialState = []
const priceSlice = createSlice({
    name : "addProducts",
    initialState,
    reducers : {
           addPrice : (state, action) => {
                state.push(action.payload) 
        }, 
        }

})

export const {addPrice } = priceSlice.actions;
export default priceSlice.reducer;

 