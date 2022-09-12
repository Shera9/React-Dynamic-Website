import React,{useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { editUser } from '../../ReduxToolKit/ActionReducer/AddUser';
// import '../../App.css';
import './SignUp.css'
import axios from 'axios';

const EditUser = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [item, setItems] = useState({
    name : "",
    email : "",
    phone : "",
    age : "",
    password : ""
  })

  localStorage.clear("user");
  localStorage.setItem("user", item.name)
  const editChangeHandler = (e) =>{
    setItems({
      ...item,
      [e.target.name] : e.target.value
    })
  }
  const {id} = useParams()

  useEffect(() =>{
    fetchData();
  },[id]);

  const fetchData = async () =>{
    try{
      const post = await axios.get(`http://localhost:3001/profile/${id}`)
      setItems(post.data);
     
    }
    
    catch(err){
       console.log('Something Wrong!')
    }
  }

  const EditUserHandler = async (e) =>{
    e.preventDefault();
    try{
    await axios.put(`http://localhost:3001/profile/${id}`, item)
   }
   
   catch(err){
      console.log('Something Wrong!')
   }
   navigate('/full-nav/user-details')
}

//   const navigate = useNavigate();
//   const dispatch = useDispatch();
// const params = useParams()

// const user = useSelector(store => store.users);
// const selectedUser = user.filter( data => data.id === params.id);
// const  {id, name, email,phone, age,password} = selectedUser[0];

//   const [userEdit, setUserEdit] = useState({
//      id,
//      name,
//      email,
//      phone ,
//      age,
//      password
//    } );
//     const EditInsertHandler = () => {
//                dispatch(editUser({
//              id : params.id,
//              name : userEdit.name,
//              email: userEdit.email,
//              phone : userEdit.phone,
//              age : userEdit.age,
//              password : userEdit.password
            
//             }))
//             navigate('/full-nav/user-details');     
//     }
  

  return (
    
    
    <div className='container bg'>

<h1 className='text-center pt-2 fw-bold signup-text my-2'>Edit User</h1>
     
     <div className="row gy-4 d-flex justify-content-center m-auto signup-row ">
       <div className="col-12 d-flex flex-column">
       <label className='fw-bold text-dark mx-1'>Enter Name:</label>
       <input type="text" 
       placeholder ="Enter Name"
       value={item.name}
       name='name'

       onChange={(e) => editChangeHandler(e)}
     
        />
       </div>
       <div className="col-12 d-flex flex-column">
       <label className='fw-bold text-dark mx-1'>Enter Email:</label>
       <input type="email" 
       placeholder ="Enter Email"
       value={item.email}
       name='email'
     
       onChange={(e) => editChangeHandler(e)}
    
        />
       </div>
       
       <div className="col-12 d-flex flex-column">
       <label className='fw-bold text-dark mx-1'>Enter CellNo:</label>
       <input type="number" 
       placeholder ="Enter Phone Number"
       value={item.phone}
       name='phone'
     
       onChange={(e) => editChangeHandler(e)}
    
        />
       </div>
       <div className="col-12 d-flex flex-column ">
       <label className='fw-bold text-dark mx-1'>Enter Age:</label>
       <input type="number" 
       placeholder ="Enter Age"
       value={item.age}
       name='age'
       
       onChange={(e) => editChangeHandler(e)}
      
        />
       </div>
       <div className="col-12 d-flex flex-column">
       <label className='fw-bold text-dark mx-1'>Enter Password:</label>
       <input type="password" 
       placeholder ="Enter password"
       value={item.password}
       name='password'
       
       onChange={(e) => editChangeHandler(e)}
    
        />
       </div>
   
     </div>
   
        <br/>
        <div className='d-flex flex-row justify-content-center'>
      <button onClick={(e) => EditUserHandler(e)} className="btn-color border-0 p-2 fw-bold">Save</button>
       </div>
      

      {/* <h1 className='text-center pt-2 fw-bold signup-text my-2'>Edit Profile</h1>
     
  <div className="row gy-4 d-flex justify-content-center m-auto signup-row ">
    <div className="col-12 d-flex flex-column">
    <label className='fw-bold text-dark mx-1'>Edit Name:</label>
    <input type="text" 
    placeholder ="Enter Name"
    value={userEdit.name}
    name='fullName'
    onChange={(event) => setUserEdit({...userEdit, name: event.target.value})}
  
     />
    </div>
    <div className="col-12 d-flex flex-column">
    <label className='fw-bold text-dark mx-1'>Edit Email:</label>
    <input type="email" 
    placeholder ="Enter Email"
    value={userEdit.email}
    name='email'
    autoComplete='off'
    onChange={(event) => setUserEdit({...userEdit, email : event.target.value})}
 
     />
    </div>
    
    <div className="col-12 d-flex flex-column">
    <label className='fw-bold text-dark mx-1'>Edit CellNo:</label>
    <input type="number" 
    placeholder ="Enter Phone Number"
    value={userEdit.phone}
    name='phone'
    autoComplete='off'
    onChange={(event) => setUserEdit({...userEdit, phone : event.target.value})}
 
     />
    </div>
    <div className="col-12 d-flex flex-column ">
    <label className='fw-bold text-dark mx-1'>Edit Age:</label>
    <input type="number" 
    placeholder ="Enter Age"
    value={userEdit.age}
    name='age'
    autoComplete ='off'
    onChange={(event) => setUserEdit({...userEdit, age : event.target.value})}
   
     />
    </div>
    <div className="col-12 d-flex flex-column">
    <label className='fw-bold text-dark mx-1'>Edit Password:</label>
    <input type="password" 
    placeholder ="Enter password"
    value={userEdit.password}
    name='password'
    autoComplete='off'
    onChange={(event) => setUserEdit({...userEdit, password : event.target.value})}
 
     />
    </div>

  </div>

     <br/>
     <div className='d-flex flex-row justify-content-center pb-3 mb-4'>
    <button onClick={() => EditInsertHandler()} className="btn-color border-0 p-2 fw-bold btn-lg">Save</button>
    </div> */}
   
</div>
    
  )
}

export default EditUser;
