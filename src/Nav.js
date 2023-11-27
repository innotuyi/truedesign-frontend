import React from "react";
import Logo from "./image/lOGO.png";

const Nav = () => {
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
              <a href="service.html" class="nav-item nav-link">
                Service
              </a>

              <a href="about.html" class="nav-item nav-link">
                About
              </a>
              <a href="contact.html" class="nav-item nav-link">
                Contact
              </a>
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
              <div class="col-lg-6 text-center text-lg-start">
                <img class="img-fluid" src="img/hero.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
