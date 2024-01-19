import React from 'react';
import Footer from './Footer'; // Update the import path if needed
import Nav from './Nav'; // Update the import path if needed
import AdvertsImage from './Banner/Adv.jpg'; // Update the import path and image name

function Adverts() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12 text-center p-4">
            <h1 className="display-2">
              Capture Attention with Creative Advertisements
            </h1>
            <p className="lead">
              Explore our advertising solutions to create compelling campaigns and captivate your target audience.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Left side with a small image */}
          <div className="col-md-6">
            <img
              src={AdvertsImage}
              alt="Adverts"
              className="img-fluid"
            />
          </div>

          {/* Right side with your Adverts content */}
          <div className="col-md-6">
            <p>
              Stand out in the crowded market with our creative advertising solutions. Whether you're launching a new
              product or promoting your brand, we offer services that captivate your target audience. Explore our
              advertising options and elevate your campaigns to effectively communicate your message and capture attention.
            </p>
            {/* Add more content as needed */}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Adverts;
