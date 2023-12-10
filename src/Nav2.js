import React from 'react'
import Logo from "./image/lOGO.png";
import { NavLink, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { printingFilter, brandingFilter } from './actions/productFilterAction'

import { PRINTING, DESIGNING, BRANDING, FOR_RENT, FOR_SALE, LATEST } from "./actions/types";



const Nav2 = ({ page }) => {

  const dispatch = useDispatch();

  function handlePrinting() {
    dispatch({ type: PRINTING });
    dispatch(printingFilter());

  }

  function handleBranding() {
    dispatch({ type: BRANDING});
    dispatch(brandingFilter());

  } 

  return (
    <>        <div class="container-xxl position-relative p-0">
      <nav class="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
        <a href="" class="navbar-brand p-0">
          <img src={Logo} alt="Logo" />
        </a>
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


            <div class="navbar-nav ms-auto py-0">
              <NavLink>
                <a class="nav-item nav-link active">
                  Home
                </a>

              </NavLink>
            </div>

            <div class="nav-item">
              <NavLink>
                <a
                  class="nav-link"
                >
                  Designing
                </a>
              </NavLink>

            </div>
            <div class="nav-item">

            <NavLink>
                <a
                  class="nav-link"
                  onClick={handlePrinting}
                >
                  Printing
                </a>
                </NavLink>
            </div>
            <div class="nav-item">

              <NavLink>
              <a
                  class="nav-link"
                  onClick={handleBranding}
                >
                  Branding
                </a>
              </NavLink>

            </div>

            <NavLink to="/service">
              <a class="nav-item nav-link">
                Service
              </a>
            </NavLink>



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

      <div class="container-xxl py-5 bg-primary hero-header mb-5">
        <div class="container my-5 py-5 px-lg-5">
          <div class="row g-5 py-5">
            <div class="col-12 text-center">
              {/* <h1 class="text-white animated zoomIn">Service</h1> */}
              <hr class="bg-white mx-auto mt-0" style={{
                width: "90px"
              }} />
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb justify-content-center">
                  <li class="breadcrumb-item"><a class="text-white" href="#">Home</a></li>
                  <li class="breadcrumb-item text-white active" aria-current="page">{page}</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Nav2