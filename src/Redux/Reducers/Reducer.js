import { addUsers, deleteUsers } from "../Actions/ActionCreator";
import { addUser, deleteUser } from "../Actions/ActionTypes";

const initialState = {
    userList : []
}
 
const Reducer = (state = initialState, action) =>{
    switch(action.type){
        case addUser:
            const {id, input} = action.payload;
       return{
           ...state,
           userList : [
               ...state.userList,
               {
                 id : id,
                 input : input
               }
           ]
       }
       case deleteUser:
          const newList = state.userList.filter((data) => data.id !== action.payload.id)
           return{
               ...state,
               userList:newList
           }
       default: return state;
    }
}
export default Reducer;