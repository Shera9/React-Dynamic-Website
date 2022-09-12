import { createSlice } from "@reduxjs/toolkit";

const initialState = []
const productSlice = createSlice({
    name : "addProducts",
    initialState,
    reducers : {
           addProducts : (state, action) => {
                state.push(action.payload) 
        }, 
        }

})

export const {addProducts } = productSlice.actions;
export default productSlice.reducer;

 