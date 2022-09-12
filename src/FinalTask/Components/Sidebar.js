import React, { useState, useEffect } from "react";
import "./Sidebar.css";
//import react pro sidebar components

//import icons from react icons
//import sidebar css from react-pro-sidebar module and our custom css
import "react-pro-sidebar/dist/css/styles.css";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
const Sidebar = () => {
    // const list = useSelector(store => store.users);
    // const signInUser = useSelector(store => store.signInSlice)
    
    // const name = list[0];
    const [users, setUsers] = useState([]);
    useEffect(() =>{
      fetchData();
    },[]);
  
    const userName = localStorage.getItem("user");
    const fetchData = async () =>{
      try{
        const post = await axios.get(`http://localhost:3001/profile`)
        setUsers(post.data);
      }
      
      catch(err){
         console.log('Something Wrong!')
      }
    }
  
  return (
    <>
      
        <div className="row sidebar">
          <div className="  sidebar-bg">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              <a
                href="/"
                className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <span className="fs-5 d-none text-dark d-sm-inline fw-bold">Summary</span>
              </a>
              <ul
                className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                id="menu">
                <li className="nav-item">
                  <a href="#" className="nav-link align-middle px-0">
                    <i className="fs-4 bi-house"></i>{" "}
                    {
                        users.map(user =>{
                          if(user.name === userName)
                           
                           return <span className="ms-1 d-none d-sm-inline text-dark fw-bolder">{ user.name }</span>
                        })
                    }
                    
                  </a>
                </li>
                <li>
                  <Link to='/full-nav/show-data'
                   
                    
                    className="nav-link px-0 align-middle">
                    <i className="fs-4 "></i>
                    <span className="ms-1 d-none d-sm-inline sidebar-items">Show</span>
                  </Link>
                 
            
                </li>
                <li>
                  <Link to="/full-nav/insert" className="nav-link px-0 align-middle">
                    <i className="fs-4"></i>
                    <span className="ms-1 d-none d-sm-inline sidebar-items">Insert</span>
                  </Link>
                </li>
                <li>
                  <Link to='/full-nav/update-data'
                    
                    
                    className="nav-link px-0 align-middle ">
                    <i className="fs-4"></i>
                    <span className="ms-1 d-none d-sm-inline sidebar-items">Update</span>
                  </Link>
                
                </li>
                <li>
                  <Link to='/full-nav/delete-data'
                    
                    
                    className="nav-link px-0 align-middle">
                    <i className="fs-4"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline sidebar-items">Delete</span>{" "}
                  </Link>
                
                </li>
                <li>
                  <Link to='/full-nav/rotate-bubble'
                   className="nav-link px-0 align-middle">
                    <i className="fs-4 bi-people"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline sidebar-items">Rotate Bubble</span>{" "}
                  </Link>
                </li>

                <li>
                  <Link to='/full-nav/curve-motion'
                   className="nav-link px-0 align-middle">
                    <i className="fs-4 bi-people"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline sidebar-items">Curve Motion</span>{" "}
                  </Link>
                </li>
                <li>
                  <Link to='/full-nav/products'
                   className="nav-link px-0 align-middle">
                    <i className="fs-4 bi-people"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline sidebar-items">Products</span>{" "}
                  </Link>
                </li>
                <li>
                  <Link to='/full-nav/discount'
                   className="nav-link px-0 align-middle">
                    <i className="fs-4 bi-people"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline sidebar-items">Discount Records</span>{" "}
                  </Link>
                </li>
                <li>
                  <Link to='/full-nav/others'
                   className="nav-link px-0 align-middle">
                    <i className="fs-4 bi-people"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline sidebar-items">Others</span>{" "}
                  </Link>
                </li>
              
              </ul>
              <hr />
              <div>
                <a
                  href="#"
                  className="d-flex align-items-center text-white text-decoration-none "
                  id="dropdownUser1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
                  <img
                    src="https://github.com/mdo.png"
                    alt="hugenerd"
                    width="30"
                    height="30"
                    className="rounded-circle"
                  />
                  <span className="d-none d-sm-inline mx-1"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
     
      
    </>
  );
};

export default Sidebar;
