import React from 'react'
import {NavLink} from 'react-router-dom'

const Footer = () => {
  return (
    <>
     <div
          class="container-fluid bg-primary text-light footer mt-5 pt-5 wow fadeIn"
          data-wow-delay="0.1s"
        >
          <div class="container py-5 px-lg-5">
            <div class="row g-5">
              <div class="col-md-6 col-lg-4">
                <h5 class="text-white mb-4">Get In Touch</h5>
                <p>
                  <i class="fa fa-map-marker-alt me-3"></i>Kigali,RUBANGURA HOUSE
                </p>
                <p>
                  <i class="fa fa-phone-alt me-3"></i>+(250) 788 81 433/ +(250) 785382211
                </p>
                <p>
                  <i class="fa fa-envelope me-3"></i>info@example.com
                </p>
                <div class="d-flex pt-2">
                  <a class="btn btn-outline-light btn-social" href="">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a class="btn btn-outline-light btn-social" href="">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a class="btn btn-outline-light btn-social" href="">
                    <i class="fab fa-youtube"></i>
                  </a>
                  <a class="btn btn-outline-light btn-social" href="">
                    <i class="fab fa-instagram"></i>
                  </a>
                  <a class="btn btn-outline-light btn-social" href="">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
              <div class="col-md-6 col-lg-4">
                <h5 class="text-white mb-4">Popular Link</h5>
               <NavLink to="/about">
               <a class="btn btn-link">
                  About Us
                </a>
               </NavLink>
                <NavLink to="/contact">
                <a class="btn btn-link" href="">
                  Contact Us
                </a>
                </NavLink>
              </div>
              <div class="col-md-6 col-lg-4">
                <h5 class="text-white mb-4">Project Gallery</h5>
                <div class="row g-2">
                  <div class="col-4">
                    <img
                      class="img-fluid"
                      src="img/1.jpeg"
                      alt="Image"  style={{
                      objectFit: "cover",
                      width: "80%",
                      height: "80%",
                    }}
                    />
                  </div>
                  <div class="col-4">
                    <img
                      class="img-fluid"
                      src="img/2.jpeg"
                      alt="Image"  style={{
                      objectFit: "cover",
                      width: "80%",
                      height: "80%",
                    }}
                    />
                  </div>
                  <div class="col-4">
                    <img
                      class="img-fluid"
                      src="img/3.jpeg"
                      alt="Image"  style={{
                      objectFit: "cover",
                      width: "80%",
                      height: "80%",
                    }}
                    />
                  </div>
                  <div class="col-4">
                    <img
                      class="img-fluid"
                      src="img/4.jpeg"
                      alt="Image"  style={{
                      objectFit: "cover",
                      width: "80%",
                      height: "80%",
                    }}
                    />
                  </div>
                  <div class="col-4">
                    <img
                      class="img-fluid"
                      src="img/5.jpeg"
                      alt="Image"  style={{
                      objectFit: "cover",
                      width: "80%",
                      height: "80%",
                    }}
                    />
                  </div>
                  <div class="col-4">
                    <img
                      class="img-fluid"
                      src="img/6.jpeg"
                      alt="Image"  style={{
                      objectFit: "cover",
                      width: "80%",
                      height: "80%",
                    }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Footer