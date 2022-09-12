import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addsignIn } from "../../ReduxToolKit/ActionReducer/SignInSlice";
import './SignUp.css';
import axios from "axios";

const SignIn = () => {

  const [users, setUsers] = useState([]);

  useEffect(() =>{
    fetchData();
  },[]);

  const fetchData = async () =>{
    try{
      const posts = await axios.get(`http://localhost:3001/profile`)
      setUsers(posts.data);
    }
    
    catch(err){
       console.log('Something Wrong!')
    }
  }
  const navigate = useNavigate();
  const [signIn, setSignIn] = useState({
      name : "",
      password : ""
  })

   const dispatch = useDispatch();
  const SignInFunc = () => {
   
    navigate("/sign-up");
  };

  const LogInHandler = (e) => {
     e.preventDefault(); 
     let match = false;
      localStorage.setItem("user", signIn.name, signIn.password);  
   const loginUser =  users.filter(user =>{

    if (user.name === signIn.name && user.password === signIn.password){
      match = true;
       navigate("/full-nav/user-details")
    }
  
    })
    if(!match){
        toast.error("Wrong Password or Email");
        return;
      }
        // if(loginUser.name === signIn.name && loginUser.password === signIn.password){
    
    
        // }
      
    
  };


  return (
    <div className="container text-center ">
      <form className="form-class bg2">
      <h1 className="fw-bold signin-text pb-4">Sign In</h1>
        <label>
          Enter Name
          <input type="text" placeholder="Enter Name"
          onChange={(event) => setSignIn({...signIn, name: event.target.value})}
        //   value={SignIn.name}
        autoComplete ='off'
           />
        </label>
        <br />
        <label>
          Enter Password
          <input type="password" placeholder="Enter password"
          onChange={(event) => setSignIn({...signIn, password: event.target.value})}
          value={SignIn.password}
          autoComplete ='off'
           />
        </label>
        <br />
        <button onClick={(e) => LogInHandler(e)} className="btn-color p-2">LOG-IN</button>
        <br />
        <div className="d-flex justify-content-center mt-3">
          <p className="text-dark mt-3">Do you have an account? Create account</p>{" "}
          <button onClick={SignInFunc} className="btn-sm mx-2 btn-signin">
            SIGN-UP
          </button>
        </div>
      </form>
      <ToastContainer/>
    </div>
  );
};

export default SignIn;
