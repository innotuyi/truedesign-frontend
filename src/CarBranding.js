import React from 'react';
import Footer from './Footer'; // Update the import path if needed
import CarBrandingImage from './Banner/car.jpg'
import Nav from './Nav'; // Update the import path if needed

function CarBranding() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12 text-center p-4">
            <h1 className="display-2">
              Drive Your Brand with Striking Car Branding
            </h1>
            <p className="lead">
              Turn your vehicles into moving advertisements with our attention-grabbing car branding solutions.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Left side with a small image */}
          <div className="col-md-6">
            <img
              src={CarBrandingImage}
              alt="Car Branding Design"
              className="img-fluid"
            />
          </div>

          {/* Right side with fake text */}
          <div className="col-md-6">
            <p>
              Make a statement on the road and increase brand visibility with our impactful car branding designs.
              Whether it's a full wrap or strategic decals, our solutions are tailored to showcase your brand
              effectively. Transform your vehicles into mobile billboards that leave a lasting impression on
              potential customers.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default CarBranding;
