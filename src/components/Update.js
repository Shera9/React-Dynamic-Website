import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Update = () => {
    
    const location = useLocation();
    const navigate = useNavigate();
    let nameIs = localStorage.getItem("name");
    let  ageIs = localStorage.getItem("age");
    let progIs = localStorage.getItem("program");
     const [edit, setEdit] = useState(nameIs);
     const [editAge, setEditAge] = useState(ageIs);
     const [editProg, setEditProg] = useState(progIs);
     // let name = location.state.name;
    // let age = location.state.abtText;
    // let program = location.state.contactText;
    const EditText = (e) =>{
        setEdit(e.target.value);
    }
    const EditTextAge = (e) =>{
        setEditAge(e.target.value);
    }
    const EditTextProg = (e) =>{
        setEditProg(e.target.value);
    }

    const SubmitEditedValue = () =>{
        
            localStorage.setItem("name", edit)
            localStorage.setItem("age", editAge)
            localStorage.setItem("program", editProg)
       navigate("/", {state:{updatedName:edit, updatedAge:editAge, updatedProg:editProg}})
        
   }
  return (
    <div> 
    Name: <input className='my-3' type='text' name='userName' onChange={EditText} value={edit}/><br/> 
    Age : <input className='my-3' type='number' name='age' onChange={EditTextAge} value={editAge}/><br/>
    Program: <input className='my-3' type='text' name='program' onChange={EditTextProg} value={editProg}/><br/>
      <button onClick={SubmitEditedValue}>Update</button><br/>
     
    </div>
  )
}

export default Update
