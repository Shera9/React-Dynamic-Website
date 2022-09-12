import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { editUser } from '../../ReduxToolKit/AddUser';

const EditUser = () => {

    const navigate = useNavigate();
  const dispatch = useDispatch();
const params = useParams()

const user = useSelector(store => store.users);
const selectedUser = user.filter( data => data.id === params.id);
const  {name, email, phone, age, password} = selectedUser[0];

  const [userEdit, setUserEdit] = useState({
     name,
     email,
     phone,
     age ,
     password
   } );
    const EditUserHandler = () => {
         dispatch(editUser({
             id : params.id,
             name : userEdit.name,
             email: userEdit.email,
             phone : userEdit.phone,
             age : userEdit.age,
             password : userEdit.password
            }))
         navigate('/full-nav/user-details');
    }
  return (
    <div className='container d-flex justify-content-center'>
    <div>
    <label className='fw-bold'>Name:
      <input type='text'
       value={userEdit.name}
       onChange ={(e) => setUserEdit({...userEdit, name : e.target.value})}
      /></label> <br/>
      <label className='fw-bold'>Email:
        <input type='text'
       value={userEdit.email}
       onChange ={(e) => setUserEdit({...userEdit, email : e.target.value})}
      /></label> <br/>
<label className='fw-bold'>Phone:
<input type='text'
       value={userEdit.phone}
       onChange ={(e) => setUserEdit({...userEdit, phone : e.target.value})}
      /></label> <br/>
      <label className='fw-bold'>Age:
        <input type='text'
       value={userEdit.age}
       onChange ={(e) => setUserEdit({...userEdit, age : e.target.value})}
      /></label> <br/>
      <label className='fw-bold'> Password:
        <input type='text'
       value={userEdit.password}
       onChange ={(e) => setUserEdit({...userEdit, password : e.target.value})}
      /></label> <br/>
      <button onClick={() => EditUserHandler()} className='btn-success fw-bold rounded'>Save</button>
      </div>
    </div>
  )
}

export default EditUser
