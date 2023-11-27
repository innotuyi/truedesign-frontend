import React from "react";

const Hero = () => {
  return (
    <>
      <div class="container-xxl position-relative p-0">
        <div class="container-xxl py-5 bg-primary hero-header mb-5">
          <div class="container my-5 py-5 px-lg-5">
            <div class="row g-5 py-5">
              <div class="col-lg-6 text-center text-lg-start">
                <h1 class="text-white mb-4 animated zoomIn">
                  All in one SEO tool need to grow your business rapidly
                </h1>
                <p class="text-white pb-3 animated zoomIn">
                  Tempor rebum no at dolore lorem clita rebum rebum ipsum rebum
                  stet dolor sed justo kasd. Ut dolor sed magna dolor sea diam.
                  Sit diam sit justo amet ipsum vero ipsum clita lorem
                </p>
                <a
                  href=""
                  class="btn btn-light py-sm-3 px-sm-5 rounded-pill me-3 animated slideInLeft"
                >
                  Free Quote
                </a>
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

export default Hero;
