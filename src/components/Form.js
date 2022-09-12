import React, { useState } from 'react';
import DoneAllIcon from '@mui/icons-material/DoneAll';
// import { Button } from '@material-ui/core';
import { Button } from '@mui/material';

export default function Form() {

const [fullName, setFullName] = useState({
    fname : "",
    lname : "",
    email : "",
    phone : ""
})
    const inputData = (event) =>{
    const {name, value} = event.target;
    // const name = event.target.name;
    // const value = event.target.value;
    setFullName((preValue) =>{
        // if(name === "fname")
        // {
            return{
             ...preValue,
            [name ]: value,
            // lname : preValue.value,
            // email : preValue.value,
            // phone : preValue.value
        // }
        // }
        // if(name === "lname")
        // {
        //     return{
        //         ...preValue,
            // fname : preValue.value,
            // lname : value,
            // email : preValue.value,
            // phone : preValue.value
    //     }
    // }
    // if(name === "email")
    // {
    //     return{
    //         ...preValue,
        // fname : preValue.value,
        // lname : preValue.value,
        // email : value,
        // phone : preValue.value
//     }
// }
// if(name === "phone")
// {
//     return{
//         ...preValue,
    // fname :preValue.value,
    // lname : preValue.value,
    // email : preValue.value,
    // phone : value
// }
}
    })
    }
    const submitData = (event) =>{
         event.preventDefault();
    }
  return (
  <>
<form onSubmit={submitData}>
   Enter Your First Name: 
   <input className='mx-2 my-3' type="text" 
   placeholder="first Name" name='fname' 
   value={fullName.fname}
   onChange={inputData}/><br/>
    Enter Your Last Name: 
    <input className='mx-2 my-3' type="text"
     placeholder="last Name" name='lname' 
     value={fullName.lname}
     onChange={inputData}/><br/>
    Enter Your Email: 
   <input className='mx-2 my-3' type="email"
    placeholder="Email" name='email'
     value={fullName.email}
     onChange={inputData}/><br/>
    Enter Cell Number: 
    <input className='mx-2 my-3' type="number"
    placeholder="Cell Number" name='phone'
    value={fullName.phone}
     onChange={inputData}/><br/>
   
    <Button type='button' className='my-3 mx-2 text-center'><DoneAllIcon/></Button>
</form>
  </>
  )
}
