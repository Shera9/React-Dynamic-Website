import usersReducer from './ActionReducer/AddUser';
import InsertData from './ActionReducer/InsertData';
import insertProducts from './ActionReducer/insertProducts';
import insertPrice from './ActionReducer/insertPrice';
import SignInSlice from './ActionReducer/SignInSlice';
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer : {
        users: usersReducer,
        insertData : InsertData,
        insertProducts ,
        insertPrice,
        SignInSlice 
    }      
})

export default store;