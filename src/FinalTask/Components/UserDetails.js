import React from 'react'
import { Outlet } from 'react-router-dom';



const UserDetails = () => {
 
  return (
    <div>
  
    <div className='container text-center mt-5'>
      User details here...
     
    </div>
    
    <Outlet/>
    
    </div>
  )
}

export default UserDetails
