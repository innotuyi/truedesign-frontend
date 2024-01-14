import React from 'react';
import Footer from './Footer'; // Update the import path if needed
import A from './Banner/a.jpg'; // Update the import path and image name if needed
import Nav from './Nav'; // Update the import path if needed

function Banner() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12 text-center p-4">
            <h1 className="display-2">
              Elevate Your Message with Eye-Catching Banners
            </h1>
            <p className="lead">
              Make a bold statement with our attention-grabbing banner designs.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Left side with a small image */}
          <div className="col-md-6">
            <img
              src={A}
              alt="Creative Banner Design"
              className="img-fluid"
            />
          </div>

          {/* Right side with fake text */}
          <div className="col-md-6">
            <p>
              Our banners are more than just visuals; they are powerful communicators.
              Whether it's for events, promotions, or branding, our designs ensure
              your message is conveyed effectively and stylishly.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Banner;
