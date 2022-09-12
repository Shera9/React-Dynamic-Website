import React from "react";
import { Outlet } from "react-router-dom";
const Bootstrap = () => {
  return (
    <div>
      <h3 className="text-center fw-bold">Bootstrap</h3>
      <li>
        <a
          href="#submenu2"
          data-bs-toggle="collapse"
          class="nav-link px-0 align-middle ">
          <i class="fs-4 bi-bootstrap"></i>
          <span class="ms-1 d-none d-sm-inline">Bootstrap</span>
        </a>
        <ul
          class="collapse nav flex-column ms-1"
          id="submenu2"
          data-bs-parent="#menu">
          <li class="w-100">
            <a href="#" class="nav-link px-0">
           
              <span class="d-none d-sm-inline">Item</span> 1
            </a>
          </li>
          <li>
            <a href="#" class="nav-link px-0">
            
              <span class="d-none d-sm-inline">Item</span> 2
            </a>
          </li>
        </ul>
      </li>
      <Outlet />
    </div>
  );
};

export default Bootstrap;
