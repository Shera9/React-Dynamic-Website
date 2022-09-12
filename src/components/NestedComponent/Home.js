import React from "react";
import { Link, Outlet } from "react-router-dom";

const NestedHome = () => {
  return (
    <div>
      <h1 className="text-center fw-bold">This is Nested Home</h1>
      <li class="nav-item">
        <a href="#" class="nav-link align-middle px-0">
          <i class="fs-4 bi-house"></i>
          <span class="ms-1 d-none d-sm-inline">Home</span>
        </a>
      </li>

      <Outlet />
    </div>
  );
};

export default NestedHome;
