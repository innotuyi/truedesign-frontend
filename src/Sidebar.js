import React from 'react';
import { NavLink, Outlet } from "react-router-dom";
const Sidebar = () => {

  return (
    <>
    <div class="col-md-2 sidebar-bg sidebar ">
      <ul>
        <li>
            <NavLink>
            <i class="fa fa-envelope me-3"></i> <a to="/dashboard">Dashboard</a>

            </NavLink>
        </li>
        <li>
            <NavLink to='/addProduct'>
            <i class="fa fa-envelope me-3"></i> <a to="/createproperty">Upload</a>

            </NavLink>
        </li>
        <li>
        <NavLink>
        <i class="fa fa-envelope me-3"></i> <a to="/mylisting">Products</a>
        </NavLink>
        </li>
        

        <li>
       <NavLink>
       <i class="fa fa-envelope me-3"></i> <a to="/messages">Messages</a>
       </NavLink>
        </li>
        <li>
            <NavLink>
            <i class="fa fa-envelope me-3"></i> <a to="/dashboard">Statistics</a>

            </NavLink>
        </li>
        <li>
            <NavLink>
            <i class="fa fa-envelope me-3"></i> <a>Logout</a>

            </NavLink>
        </li>
        <li>
            <NavLink>
            <i class="fa fa-envelope me-3"></i> <a>Settings</a>

            </NavLink>
        </li>
      </ul>
    </div>
  </>
  )
}

export default Sidebar