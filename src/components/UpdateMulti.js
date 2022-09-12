import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const UpdateMulti = () => {
    const location = useLocation();
    const navigate = useNavigate();

    let fname = Location.state.fname;
    let lname = location.state.lname;
    console.log(fname ,lname)
  return (
    <div>
      
    </div>
  )
}

export default UpdateMulti;
