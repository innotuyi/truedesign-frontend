import React from 'react'

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
                <a class="btn btn-link" href="">
                  About Us
                </a>
                <a class="btn btn-link" href="">
                  Contact Us
                </a>
              </div>
              <div class="col-md-6 col-lg-4">
                <h5 class="text-white mb-4">Project Gallery</h5>
                <div class="row g-2">
                  <div class="col-4">
                    <img
                      class="img-fluid"
                      src="img/portfolio-1.jpg"
                      alt="Image"
                    />
                  </div>
                  <div class="col-4">
                    <img
                      class="img-fluid"
                      src="img/portfolio-2.jpg"
                      alt="Image"
                    />
                  </div>
                  <div class="col-4">
                    <img
                      class="img-fluid"
                      src="img/portfolio-3.jpg"
                      alt="Image"
                    />
                  </div>
                  <div class="col-4">
                    <img
                      class="img-fluid"
                      src="img/portfolio-4.jpg"
                      alt="Image"
                    />
                  </div>
                  <div class="col-4">
                    <img
                      class="img-fluid"
                      src="img/portfolio-5.jpg"
                      alt="Image"
                    />
                  </div>
                  <div class="col-4">
                    <img
                      class="img-fluid"
                      src="img/portfolio-6.jpg"
                      alt="Image"
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