import React from 'react'
import { useState } from 'react';

const JsonData = () => {
    const [isDataEntered, setIsDataEntered] = useState(false);
    const [toggleBtn, setToggleBtn] = useState(true)
    const [editData, setEditData] = useState(null);

    const [biodata, setBiodata] = useState(
      {
        id : new Date().getTime().toString(),
        fName : "",
        lName : "",
        age : "",
        program : ""
      }
    )
    const [submitData, setSubmitData] = useState([]);

    const onChangeEvent = (event) =>{
    const {name, value} = event.target;
     
    setBiodata(existingValues =>{
        return{
            ...existingValues,
              [name] : value
        };
    })
    setIsDataEntered(true);
    }

    const SubmitUserData = (e) =>{
        e.preventDefault();
      if(!isDataEntered){
        alert("Fill All the input fields.")
      }
      else if(biodata && !toggleBtn){
        setSubmitData(
          submitData.map((values, index) =>{
            if(index === editData){
              return{...values, fName: biodata.fName,
                lName:biodata.lName,
                age : biodata.age,
                program : biodata.program
              }
            }
            return values;
          })
        )
         setToggleBtn(true);
         setEditData(null)
      }
      else{
      setSubmitData( value =>  [...value, biodata] )
}
setIsDataEntered(false);
    }

    console.log(submitData)

    const DeleteBiodata = (searchIndex) =>{
      // searchIndex.preventDefault();
      const dlt = submitData.filter((data, index) =>{ return searchIndex !== index});
      setSubmitData(dlt)
    }
    const UpdateData = (updateIndex) =>{
     let newData = submitData.find((data, index) =>{
       return(updateIndex === index)
        
     } )
     setToggleBtn(false);
     setBiodata(newData)
     setEditData(updateIndex)
     
    }

    const SubmissionData = () =>{
     return submitData.map((values, index) =>{
        return( 
    <div className='d-flex justify-content-between bg' key={index}>
    <div>
       
      <p>{values.fName} {values.lName}</p>
      </div>
      <div>
     
      <p>{values.age}</p>
      </div>
      <div>
      
      <p>{values.program}</p>
      </div>
      <div>
     
      <button className='btn-success' onClick={() => UpdateData(index)}>Update</button> <button className='btn-danger' onClick={() =>DeleteBiodata(index)}>Delete</button>
      </div>
      </div>)})
    }
   
  return (
    <div>
    
      <h1 className='text-center'>Enter Details Below!</h1>
      <form className='container text-center'>
      <label htmlFor='Fname'>Enter First Name</label>
      <input className='m-4' type='text' id='fname' name='fName' value={biodata.fName}
       placeholder='First Name' onChange={onChangeEvent}/>
      <label htmlFor='lname'>Enter Last Name</label>
      <input className='m-4' type='text' id='lname' name='lName' value={biodata.lName} 
      placeholder='Last Name' onChange={onChangeEvent}/><br/>
      <label htmlFor='ages'>Enter Your Age</label>
      <input className='m-4' type='number' id='ages' name='age' value={biodata.age}
       placeholder='Age'
       onChange={onChangeEvent}/>
      <label htmlFor='prog'>Enter Your Program</label>
      <input className='m-4' type='text' id='prog' name='program' value={biodata.program}
       placeholder='Program' onChange={onChangeEvent}/>
       <br/>

       {toggleBtn ? <button className='my-5 btn-primary' onClick={SubmitUserData}>Submit</button> : <button className='my-5 btn-success' onClick={SubmitUserData}>Save</button>}
        
    </form>
    <h1 className='text-center pb-4'>User Data</h1>
    <div className='d-flex justify-content-between bg'>
    <h2 className='fs-5 pb-3'>Name</h2>
 <h2 className='fs-5 fw-bolder pb-3'>Age</h2>
<h2 className='fs-5 fw-bolder pb-3'>Program</h2>
 <h2 className='fs-5 fw-bolder pb-3'>Update/Delete</h2>
    </div>
  <SubmissionData/> 
  
    </div>
  )
}

export default JsonData
