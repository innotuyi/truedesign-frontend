import React from 'react'
import Footer from './Footer'
import Nav2 from './Nav2'

const Printing = () => {
  return (
    <>

    <Nav2 page="Printing"/>
    <div class="container-xxl py-5">
          <div class="container px-lg-5">
            <div class="row mt-n2 wow fadeInUp" data-wow-delay="0.1s">
              <div class="col-12 text-center">
                <ul class="list-inline mb-5" id="portfolio-flters">
                  <li class="btn px-3 pe-4 active" data-filter="*">
                    All
                  </li>
                </ul>
              </div>
            </div>
            <div class="row g-4 portfolio-container">
              <div
                class="col-lg-4 col-md-6 portfolio-item first wow zoomIn"
                data-wow-delay="0.1s"
              >
                <div class="position-relative rounded overflow-hidden">
                  <img
                    class="img-fluid w-100"
                    src="img/portfolio-1.jpg"
                    alt=""
                  />
                  <div class="portfolio-overlay">
                    <a
                      class="btn btn-light"
                      href="img/portfolio-1.jpg"
                      data-lightbox="portfolio"
                    >
                      <i class="fa fa-plus fa-2x text-primary"></i>
                    </a>
                    <div class="mt-auto">
                      <small class="text-white">
                        <i class="fa fa-folder me-2"></i>Designing
                      </small>
                      <a class="h5 d-block text-white mt-1 mb-0" href="">
                        Project Name
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="col-lg-4 col-md-6 portfolio-item second wow zoomIn"
                data-wow-delay="0.3s"
              >
                <div class="position-relative rounded overflow-hidden">
                  <img
                    class="img-fluid w-100"
                    src="img/portfolio-2.jpg"
                    alt=""
                  />
                  <div class="portfolio-overlay">
                    <a
                      class="btn btn-light"
                      href="img/portfolio-2.jpg"
                      data-lightbox="portfolio"
                    >
                      <i class="fa fa-plus fa-2x text-primary"></i>
                    </a>
                    <div class="mt-auto">
                      <small class="text-white">
                        <i class="fa fa-folder me-2"></i>Web Design
                      </small>
                      <a class="h5 d-block text-white mt-1 mb-0" href="">
                        Project Name
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="col-lg-4 col-md-6 portfolio-item first wow zoomIn"
                data-wow-delay="0.6s"
              >
                <div class="position-relative rounded overflow-hidden">
                  <img
                    class="img-fluid w-100"
                    src="img/portfolio-3.jpg"
                    alt=""
                  />
                  <div class="portfolio-overlay">
                    <a
                      class="btn btn-light"
                      href="img/portfolio-3.jpg"
                      data-lightbox="portfolio"
                    >
                      <i class="fa fa-plus fa-2x text-primary"></i>
                    </a>
                    <div class="mt-auto">
                      <small class="text-white">
                        <i class="fa fa-folder me-2"></i>Web Design
                      </small>
                      <a class="h5 d-block text-white mt-1 mb-0" href="">
                        Project Name
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    <Footer/>
    
    
    </>
  )
}

export default Printing