import React from "react";

const Products = () => {
  return (
    <div>
    <h3 className="text-center">Products Component</h3>
      <li>
        <a
          href="#submenu3"
          data-bs-toggle="collapse"
          class="nav-link px-0 align-middle">
          <i class="fs-4 bi-grid"></i>
          <span class="ms-1 d-none d-sm-inline">Products</span>
        </a>
        <ul
          class="collapse nav flex-column ms-1"
          id="submenu3"
          data-bs-parent="#menu">
          <li class="w-100">
            <a href="#" class="nav-link px-0">
          
              <span class="d-none d-sm-inline">Product</span> 1
            </a>
          </li>
          <li>
            <a href="#" class="nav-link px-0">
            
              <span class="d-none d-sm-inline">Product</span> 2
            </a>
          </li>
          <li>
            <a href="#" class="nav-link px-0">
          
              <span class="d-none d-sm-inline">Product</span> 3
            </a>
          </li>
          <li>
            <a href="#" class="nav-link px-0">
             
              <span class="d-none d-sm-inline">Product</span> 4
            </a>
          </li>
        </ul>
      </li>
    </div>
  );
};

export default Products;
