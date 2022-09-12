import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import '../App.css'

const Database = () => {
    const location = useLocation();
  
  //  let id = location.state.biodata.id;
   let fname = location.state.biodata.fName;
   let lname = location.state.biodata.lName;
   let age = location.state.biodata.age;
   let program = location.state.biodata.program;

   const userData = [{
       fname,
       lname,
       age,
       program
   }]
   const [userInfo, setUserInfo] = useState(userData)

  //  const [receivedData, setReceivedData] = useState([])
  const setUserDetails = () =>{
    setUserInfo(existing =>{
     return{ 
       ...existing,
          userData
    }})
  }
         

// console.log(receivedData)
console.log(userInfo)
   const DeleteBiodata = () =>{
      // setReceivedData()
   }
  return (
    <div>
   
    </div>
  )
}

export default Database;
