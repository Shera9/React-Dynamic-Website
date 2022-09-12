import { createSlice } from "@reduxjs/toolkit";

const initialState = []
const InputData = createSlice({
    name : "inputData",
    initialState,
    reducers : {
           insertInput : (state, action) => {
            
            state.push(action.payload)    
           },
           deleteInsert : (state, action) => {
            const id  = action.payload;
               return state.filter(user => user.id !== id)
                         
           },
        
        editInsertInput : (state, action) => {
            
          const {id,title, desc, selectValue, selectType,bgColor} = action.payload;
          const updatedInsert = state.find(info => info.id === id)
              updatedInsert.title = title
              updatedInsert.desc = desc
              updatedInsert.selectValue = selectValue
              updatedInsert.selectType = selectType
              updatedInsert.bgColor = bgColor
          
        }  

        }

})

export const { insertInput,editInsertInput, deleteInsert } = InputData.actions;
export default InputData.reducer;

 