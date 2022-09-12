import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
// import { addUsers, deleteUsers } from '../Redux/Actions/ActionCreator';
import { addUser, deleteUser,editUser } from '../ReduxToolKit/AddUser';
import '../App.css';
import CompA from './CompA';
import Sidebar from './Sidebar';

const InputDataRedux = () => {
  
  const list = useSelector(store => store.users);
  console.log(list)
  const dispatch = useDispatch();
const [input, setInput] = useState({
     fullName : "",
     email : "",
     age : ""
});
// console.log(addUsers)
const AddUserHandler = () => {
  dispatch(addUser({
    id : new Date().getTime().toString(),
    name : input.fullName,
    email : input.email,
    age : input.age
  }))
  
  setInput({
    fullName : "",
    email : "",
    age : ""
  });
}

const deleteUserHandler = (id) => {
  dispatch(deleteUser({id}))
}
const params = useParams();
console.log(params)
const editUserHandler = (id, name, email, age) =>{
  dispatch(editUser({id, name, email, age}))
}

  return (
    <div>
    
    <div className='container'>

    <div className='my-5 bg'>
    <form >
  <div className="row gy-4">
    <div className="col-12 d-flex flex-column">
    <label className='fw-bold text-white mx-1'>Enter Name:</label>
    <input type="text" 
    placeholder ="Enter Name"
    value={input.fullName}
    name='fullName'
    onChange={(event) => setInput({...input, fullName: event.target.value})}
   className="border border-0 "
     />
    </div>
    <div className="col-12 d-flex flex-column">
    <label className='fw-bold text-white mx-1'>Enter Email:</label>
    <input type="email" 
    placeholder ="Enter Email"
    value={input.email}
    name='email'
    autoComplete='off'
    onChange={(event) => setInput({...input,email : event.target.value})}
 className="border border-0"
     />
    </div>
    <div className="col-12 d-flex flex-column">
    <label className='fw-bold text-white mx-1'>Enter Age:</label>
    <input type="number" 
    placeholder ="Enter Age"
    value={input.age}
    name='age'
    onChange={(event) => setInput({...input, age : event.target.value})}
   className="border border-0"
     />
    </div>
  </div>
</form>
     <br/>
    <button onClick={() => AddUserHandler()} className="btn-color border-0 p-2 fw-bold">AddUser</button>
</div>
      {
        list.map( (user, index) => {
          return(
            <div key={user.id} className = "d-flex text-center align-items-center justify-content-between my-3 bg-secondary">
            <h3 className='text-white px-2 fw-bolder'>{user.name}</h3>
            <p className='text-white lead'>{user.email}</p>
            <p className='text-white fw-bold'>{user.age}</p>
            <div>
            <button onClick={() => deleteUserHandler(user.id)} className = " btn-danger mx-1">Delete</button>
            <Link to={`/edit-user/${user.id}`}>
            <button onClick={() => editUserHandler(user.id, user.name, user.email, user.age)} className = " btn-primary ">Edit</button>
            </Link>
            </div>
            </div>
          )
        })
      }
  
    </div>
    </div>
  )
}

export default InputDataRedux

