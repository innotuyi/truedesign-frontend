import React from 'react';
import Footer from './Footer'; // Update the import path if needed
import A from './BusinessCard/a.jpg'; // Update the import path and image name if needed
import Nav from './Nav'; // Update the import path if needed

function BusinessCard() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12 text-center p-4">
            <h1 className="display-2">
              Make Your Mark with Striking Business Cards
            </h1>
            <p className="lead">
              Elevate your professional presence with exceptional Business Card designs.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Left side with a small image */}
          <div className="col-md-6">
            <img
              src={A}
              alt="Creative Business Card"
              className="img-fluid"
            />
          </div>

          {/* Right side with fake text */}
          <div className="col-md-6">
            <p>
              Your business card is a reflection of your brand. Our designs combine
              creativity and professionalism, ensuring your card stands out in any
              networking situation.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default BusinessCard;
