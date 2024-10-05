import React from "react";
import Logo from "./image/logo.svg";
import Header from './Header'
import CourseCarousel from './CourseCarousel'

import { NavLink, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { printingFilter, brandingFilter, designingFilter } from './actions/productFilterAction'

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
          <a className="navbar-brand" href="#">
            <img
              src={Logo}
              style={{
                height: "150px",  // Adjusted for better scale
                width: "150px",
                // borderRadius: "50%",  // Rounded corners
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",  // Subtle shadow
                transition: "transform 0.3s ease",  // Smooth hover transition
              }}
              alt="Logo"
              className="img-fluid"
              onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.1)"}
              onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
            />
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

                </a>

              </NavLink>

              <div class="nav-item">
                <NavLink to="/">
                  <a
                    class="nav-link"
                    onClick={handleDesigning}
                  >
                    Designing
                  </a>
                </NavLink>

              </div>

              <div class="nav-item">
                <NavLink to="/">
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

                <NavLink to="/">
                  <a class="nav-link"
                    onClick={handleBranding}
                  >
                    Branding
                  </a>
                </NavLink>

              </div>
              <NavLink to="/service">
                <a class="nav-item nav-link">
                  Product & Services
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
        <div className="navbar navbar-expand-lg mb-3 d-block d-lg-none  bg-secondary show-order" style={{ padding: '10px 0', marginTop: "3rem" }}>
          <div className="container-fluid d-flex justify-content-between align-items-center">
            {/* Branding/Tagline Section */}
            <span className="navbar-text mx-auto text-center text-light">
              <h1 className='text-light' style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>You Desire, We Design!</h1>
            </span>

            {/* Contact Info Section */}
            <span className="navbar-text text-right text-light text-sm-end" style={{ marginRight: '2rem' }}>
              <div style={{ fontSize: '1rem' }}>Phone: +123 456 789</div>
              <div style={{ fontSize: '1rem' }}>Email: your@email.com</div>
            </span>

            {/* Call to Action */}
            <div className="ml-auto">
              <NavLink to="/order">
                <a className='btn btn-danger btn-lg' style={{ padding: '10px 20px', fontSize: '1rem' }}>Place Your Order</a>
              </NavLink>
            </div>
          </div>
        </div>


        <div class=" py-5 bg-secondary hero-header ">
          <Header />

        </div>
      </div>
    </>
  );
};

export default Nav;
