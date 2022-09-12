import { addUser, deleteUser } from "./ActionTypes";

export const addUsers = (input) =>{
    return{
        type : addUser,
        payload :{
            id : Math.random(),
            input : input
        }
    }
}

export const deleteUsers = (id) =>{
    return{
        type : deleteUser,
        payload :{
            id 
        }
    }
}