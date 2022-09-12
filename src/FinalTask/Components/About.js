import React from 'react'
import { Outlet } from "react-router-dom";


const About = () => {
 
   
  return (
    <div>
    <div>
    <h1 className="text-center fw-bold my-4 fs-3" >This is About page</h1></div>
    
     <Outlet/>
    </div>
  )
}
export default About;