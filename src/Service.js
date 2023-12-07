import React from 'react'
import Image1 from './image/1.webp'
import Footer from './Footer'
import Nav from './Nav'
import Nav2 from './Nav2'

const Service = () => {
  return (
    <>
    <Nav2 page="Service"/>
      <div class="container-xxl py-5">
          <div class="container px-lg-5">
            <div
              class="section-title position-relative text-center mb-5 pb-2 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <h6 class="position-relative d-inline text-primary ps-4">
               Service
              </h6>
              <h2 class="mt-2">What Services We Provide</h2>
            </div>
            <div class="row g-4">
              <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.1s">
                <div class="service-item d-flex flex-column justify-content-center text-center rounded">
                  <div class="service-icon flex-shrink-0">
                   <img src={Image1} alt='Imag1'  class="img-fluid"/>
                  </div>
                  <h5 class="mb-3">Branding</h5>
                  <p>
                    Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                    lorem sed diam stet diam sed stet lorem.
                  </p>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
                <div class="service-item d-flex flex-column justify-content-center text-center rounded">
                  <div class="service-icon flex-shrink-0">
                  <img src={Image1} alt='Imag1'  class="img-fluid"/>                  </div>
                  <h5 class="mb-3">Printing</h5>
                  <p>
                    Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                    lorem sed diam stet diam sed stet lorem.
                  </p>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                <div class="service-item d-flex flex-column justify-content-center text-center rounded">
                  <div class="service-icon flex-shrink-0">
                  <img src={Image1} alt='Imag1'  class="img-fluid"/>                  </div>
                  <h5 class="mb-3">Designing</h5>
                  <p>
                    Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                    lorem sed diam stet diam sed stet lorem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>

    </>
  )
}

export default Service