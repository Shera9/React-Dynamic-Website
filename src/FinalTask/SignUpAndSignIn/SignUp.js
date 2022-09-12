import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../../ReduxToolKit/ActionReducer/AddUser';
// import '../../App.css';
import './SignUp.css'
import axios from 'axios';

const SignUp = () => {

  const navigate = useNavigate();
  const [addUser, setAddUser] = useState({
    name : "",
    email : "",
    phone : "",
    age : "",
    password : ""
  })

  const addChangeHandler = (e) =>{
    setAddUser({
      ...addUser,
      [e.target.name] : e.target.value
    })
  }
  const insertUserHandler = async (e) =>{
         e.preventDefault();
         try{
         await axios.post(`http://localhost:3001/profile`, addUser)
        }
        
        catch(err){
           console.log('Something Wrong!')
        }
        navigate("/sign-in");
  }

  //   const navigate = useNavigate();
    
  //   const dispatch = useDispatch();
  // const [input, setInput] = useState({
  //      fullName : "",
  //      email : "",
  //      phone : "",
  //      age : "",
  //      password : ""
  // });

  const GoToSignIn = () =>{
      navigate("/sign-in")
  }
  // // console.log(addUsers)
  // const AddUserHandler = () => {
  //   dispatch(addUser({
  //     id : new Date().getTime().toString(),
  //     name : input.fullName,
  //     email : input.email,
  //     phone : input.phone,
  //     age : input.age,
  //     password : input.password
  //   }))
  //   navigate("/sign-in");
    
  //   setInput({
  //     fullName : "",
  //     email : "",
  //     phone : "",
  //     age : "",
  //     password : ""
  //   });
  // }
  

  return (
    
    
    <div className='container bg'>
      <h1 className='text-center pt-2 fw-bold signup-text my-2'>Sign Up</h1>
     
  <div className="row gy-4 d-flex justify-content-center m-auto signup-row ">
    <div className="col-12 d-flex flex-column">
    <label className='fw-bold text-dark mx-1'>Enter Name:</label>
    <input type="text" 
    placeholder ="Enter Name"
    value={addUser.name}
    name='name'
    onChange={(e) => addChangeHandler(e)}
  
     />
    </div>
    <div className="col-12 d-flex flex-column">
    <label className='fw-bold text-dark mx-1'>Enter Email:</label>
    <input type="email" 
    placeholder ="Enter Email"
    value={addUser.email}
    name='email'
    autoComplete='off'
    onChange={(e) => addChangeHandler(e)}
 
     />
    </div>
    
    <div className="col-12 d-flex flex-column">
    <label className='fw-bold text-dark mx-1'>Enter CellNo:</label>
    <input type="number" 
    placeholder ="Enter Phone Number"
    value={addUser.phone}
    name='phone'
    autoComplete='off'
    onChange={(e) => addChangeHandler(e)}
 
     />
    </div>
    <div className="col-12 d-flex flex-column ">
    <label className='fw-bold text-dark mx-1'>Enter Age:</label>
    <input type="number" 
    placeholder ="Enter Age"
    value={addUser.age}
    name='age'
    autoComplete ='off'
    onChange={(e) => addChangeHandler(e)}
   
     />
    </div>
    <div className="col-12 d-flex flex-column">
    <label className='fw-bold text-dark mx-1'>Enter Password:</label>
    <input type="password" 
    placeholder ="Enter password"
    value={addUser.password}
    name='password'
    autoComplete='off'
    onChange={(e) => addChangeHandler(e)}
 
     />
    </div>

  </div>

     <br/>
     <div className='d-flex flex-row justify-content-center'>
    <p className='my-2'>Create an account</p><button onClick={(e) => insertUserHandler(e)} className="btn-color border-0 p-2 fw-bold">SIGN-UP</button>
    </div>
    <div className='d-flex flex-row my-4 pb-2 justify-content-center'>
    <p className=' m-2 '>Are you a registered User ?</p><button onClick={GoToSignIn} className='btn-sm mx-3 fw-bold btn-signin'>SIGN-IN</button>
</div>
</div>
    
  )
}

export default SignUp
