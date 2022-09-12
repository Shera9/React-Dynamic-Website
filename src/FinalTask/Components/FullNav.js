import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import '../../index.css'

const FullNav = () => {
  return (
    <div>
    <div className=' container-lg-fluid full-bg'>
        <div className='row'>
            <div className=' col-lg-2 col-md-0'>
            <Sidebar/>
            </div>
            <div className=' col-lg-10 col-md-12 px-0'>
        <Navbar/>
        
        <Outlet/>
            </div>
        </div>
    </div>
      
      
      
      
    </div>
  )
}

export default FullNav
