import { createSlice } from "@reduxjs/toolkit";

const initialState = []
const counterSlice = createSlice({
    name : "UserName",
    initialState,
    reducers : {
        addUser : (state, action) => {
            state.push(action.payload)    
           },
           addProducts : (state, action) => {
               console.log(state);
            const {category, pName} = action.payload;
            if(category !== "" && pName !== ""){
                state.push(action.payload) 
            }
            else{
                return state;
            }
            
        },
        addPrices : (state, action) => {
            state.push(action.payload)
           },
        deleteUser : (state, action) => {
            const { id } = action.payload;
           const existingUsers = state.find(users => users.id === id)
           if(existingUsers){
               return state.filter(user => user.id !== id)
                           }
           },
       
           deleteProduct : (state, action) => {
            const id  = action.payload;
               return state.filter(user => user.id !== id)
                         
           },
        editUser : (state, action) => {
          
          const {id, name, email, phone, age, password} = action.payload;
          const updatedName = state.find(user => user.id === id)
              updatedName.id = id
              updatedName.name = name
              updatedName.email = email
              updatedName.phone = phone
              updatedName.age = age
              updatedName.password = password
          
        },  
     

        }

})

export const {addUser, deleteUser, editUser, addProducts, addPrices, deleteProduct } = counterSlice.actions;
export default counterSlice.reducer;

 