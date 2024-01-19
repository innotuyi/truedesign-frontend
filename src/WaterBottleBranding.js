import React from 'react';
import Footer from './Footer'; // Update the import path if needed
import Nav from './Nav'; // Update the import path if needed
import WaterBottleBrandingImage from './Banner/30753787_bottle1.jpg'

function WaterBottleBranding() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12 text-center p-4">
            <h1 className="display-2">
              Make a Splash with Water Bottle Branding
            </h1>
            <p className="lead">
              Explore our water bottle branding solutions to showcase your brand on a functional and stylish accessory.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Left side with a small image */}
          <div className="col-md-6">
            <img
              src={WaterBottleBrandingImage}
              alt="Water Bottle Branding"
              className="img-fluid"
            />
          </div>

          {/* Right side with your Water Bottle Branding content */}
          <div className="col-md-6">
            <p>
              Make your brand stand out with our water bottle branding solutions. Whether for promotional events, giveaways,
              or retail, showcase your logo and message on a functional and stylish accessory. Explore our options and make
              a splash with water bottle branding that leaves a lasting impression.
            </p>
            {/* Add more content as needed */}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default WaterBottleBranding;
