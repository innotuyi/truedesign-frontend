import React from "react";
import Logo from "./image/lOGO.png";
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
      <div class="container-xxl position-relative p-0">
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
              <div class="col-lg-6 text-center text-lg-start">
                <h1 class="text-white mb-4 animated zoomIn">
                  Embark on a journey of creative brilliance with True Design
                  Ltd.
                </h1>
                <p class="text-white pb-3 animated zoomIn">
                  Your success story begins with True Design Ltd. Discover the
                  true potential of your brand - let's create, captivate, and
                  conquer together!
                </p>
                <a
                  href=""
                  class="btn btn-outline-light py-sm-3 px-sm-5 rounded-pill animated slideInRight"
                >
                  Contact Us
                </a>
              </div>
              <div class="col-lg-6 text-center text-lg-start" style={{
              }}>
                <img class="img-fluid mb-5" src="img/hero.jpeg" alt="" height="200px" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
