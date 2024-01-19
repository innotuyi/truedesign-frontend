import React from 'react';
import Footer from './Footer'; // Update the import path if needed
import WheelCoverImage from './Banner/whell.jpg'
import Nav from './Nav'; // Update the import path if needed

function WheelCovers() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12 text-center p-4">
            <h1 className="display-2">
              Upgrade Your Ride with Stylish Wheel Covers
            </h1>
            <p className="lead">
              Enhance the look of your wheels while protecting them with our quality wheel covers.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Left side with a small image */}
          <div className="col-md-6">
            <img
              src={WheelCoverImage}
              alt="Wheel Cover Set"
              className="img-fluid"
            />
          </div>

          {/* Right side with fake text */}
          <div className="col-md-6">
            <p>
              Make a statement on the road with our stylish wheel covers. Designed for both
              aesthetics and protection, our wheel covers add a touch of flair to your vehicle.
              Choose from a variety of designs and sizes to personalize your ride and keep your
              wheels looking new.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default WheelCovers;
