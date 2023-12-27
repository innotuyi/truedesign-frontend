import React from "react";
import Logo from "./image/lOGO.png";
import Header from './Header'
import CourseCarousel from './CourseCarousel'

import { NavLink, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { printingFilter, brandingFilter, designingFilter} from './actions/productFilterAction'

import { PRINTING, DESIGNING, BRANDING, FOR_RENT, FOR_SALE, LATEST } from "./actions/types";


const Nav = () => {
  const dispatch = useDispatch();

  function handlePrinting() {
    dispatch({ type: PRINTING });
    dispatch(printingFilter());

  }
  function handleBranding() {
    dispatch({ type: BRANDING });
    dispatch(brandingFilter());

  }

  function handleDesigning() {
    dispatch({ type: DESIGNING });
    dispatch(designingFilter());

  }

  return (
    <>
      <div class="container-fluid position-relative p-0">
      <nav class="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span class="fa fa-bars"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto py-0">
              <NavLink to='/'>
                <a class="nav-item nav-link active">
                  Home
                </a>

              </NavLink>

              <div class="nav-item">
                <NavLink>
                  <a
                    class="nav-link"
                    onClick={handleDesigning}
                  >
                    Designing
                  </a>
                </NavLink>

              </div>

              <div class="nav-item">
                <NavLink>
                  <a
                    href="#"
                    class="nav-link"
                    onClick={handlePrinting}
                  >
                    Printing
                  </a>
                </NavLink>
              </div>
              <div class="nav-item">

                <NavLink>
                  <a class="nav-link"
                    onClick={handleBranding}
                  >
                    Branding
                  </a>
                </NavLink>

              </div>
              {/* <NavLink to="/service">
                <a class="nav-item nav-link">
                  Service
                </a>
              </NavLink> */}
              <NavLink to="/about">
                <a class="nav-item nav-link">
                  About
                </a>
              </NavLink>
              <NavLink to="/contact">
                <a class="nav-item nav-link">
                  Contact
                </a>
              </NavLink>
            </div>
          </div>
        </nav>

        <div class=" py-5 bg-secondary hero-header ">
        <Header/>

          <div class="mt-2 bg-light">
            {/* <div class="row g-5 py-5 mt-2">
              <div class="col-lg-6 offset-md-2 colo text-center text-lg-start">
               
              </div>
            </div> */}

            <CourseCarousel/>

            
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
