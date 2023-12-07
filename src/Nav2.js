import React from 'react'
import Logo from "./image/lOGO.png";
import { NavLink, Outlet } from "react-router-dom";



const Nav2 = ({page}) => {
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
              <a href="index.html" class="nav-item nav-link active">
                Home
              </a>
              <div class="nav-item dropdown">
                <a
                  href="#"
                  class="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Designing
                </a>
                <div class="dropdown-menu m-0">
                  <a href="team.html" class="dropdown-item">
                    sub1
                  </a>
                  <a href="testimonial.html" class="dropdown-item">
                    sub2
                  </a>
                </div>
              </div>

              <div class="nav-item dropdown">
                <a
                  href="#"
                  class="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Printing
                </a>
                <div class="dropdown-menu m-0">
                  <a href="team.html" class="dropdown-item">
                    sub1
                  </a>
                  <a href="testimonial.html" class="dropdown-item">
                    sub2
                  </a>
                </div>
              </div>
              <div class="nav-item dropdown">
                <a
                  href="#"
                  class="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Branding
                </a>
                <div class="dropdown-menu m-0">
                  <a href="team.html" class="dropdown-item">
                    Sub 1
                  </a>
                  <a href="testimonial.html" class="dropdown-item">
                    Sub 2
                  </a>
                </div>
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
            <butaton
              type="button"
              class="btn text-secondary ms-3"
              data-bs-toggle="modal"
              data-bs-target="#searchModal"
            >
              {" "}
            </butaton>
          </div>
        </nav>

            <div class="container-xxl py-5 bg-primary hero-header mb-5">
                <div class="container my-5 py-5 px-lg-5">
                    <div class="row g-5 py-5">
                        <div class="col-12 text-center">
                            <h1 class="text-white animated zoomIn">Service</h1>
                            <hr class="bg-white mx-auto mt-0" style={{
                                width: "90px"
                            }}/>
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