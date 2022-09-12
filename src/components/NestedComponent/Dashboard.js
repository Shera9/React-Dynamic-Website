import React from "react";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
    <h3 className="text-center">Dashboard</h3>
      <li>
        <a
          href="#submenu1"
          data-bs-toggle="collapse"
          class="nav-link px-0 align-middle">
          <i class="fs-4 bi-speedometer2"></i>
          <span class="ms-1 d-none d-sm-inline">Dashboard</span>
        </a>
        <ul
          class="collapse show nav flex-column ms-1"
          id="submenu1"
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

      {/* <h3 className="text-center fw-bold"
          >Dashboard
        </h3>
         */}
             
         <Outlet/>
    </div>
  );
};

export default Dashboard;
