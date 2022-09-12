import React from "react";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import "../../index.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export default function Navbar(props) {
  function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }

  /* Set the width of the sidebar to 0 (hide it) */
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }
  return (
    <div >
      <nav className="navbar navbar-expand-lg navBg">
        <div className="container-fluid">
          
              <a className="navbar-brand fs-4 fw-bolder nav-items" href="/">
                {props.title}
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                  <li className="nav-item mx-lg-5">
                    <NavLink
                      exact="true"
                      className=" fs-5 nav-items"
                      to="/full-nav">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item mx-lg-5">
                    <NavLink
                      exact="true"
                      className="  fs-5 nav-items"
                      to="/full-nav/about">
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item mx-lg-5">
                    <NavLink
                      exact="true"
                      className="  fs-5 nav-items"
                      to="/full-nav/contact">
                      Contact
                    </NavLink>
                  </li>
                  <li>
                    <span id="mySidepanel" className="sidepanel">
                      <button className="closebtn" onClick={closeNav}>
                        &times;
                      </button>
                      <h2 className="text-center text-primary fs-5">USER</h2>
                      <hr />
                      <Link to="/full-nav/user-profile" onClick={closeNav}>
                        PROFILE
                      </Link>
                      <hr className="text-black" />
                      <Link to="/sign-in" onClick={closeNav}>
                        SIGN-OUT
                      </Link>
                    </span>

                    <button className="openbtn" onClick={openNav}>
                      <MoreHorizIcon className="fs-1 nav-items" />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            
          
       
      </nav>
      
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "Title here",
};
