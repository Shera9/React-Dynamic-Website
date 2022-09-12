import React from 'react'
import { Outlet } from 'react-router-dom';

const Contact = () => {


  return (
    <div>

    
    <div className='container text-center'>
      <h1 className='text-center my-4 fs-3'>This is Contact Us page.</h1>   
    </div>

  
    <Outlet/>
    </div>
  )
}
export default Contact;