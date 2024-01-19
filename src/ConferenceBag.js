import React from 'react';
import Footer from './Footer'; // Update the import path if needed
import Nav from './Nav'; // Update the import path if needed
import ConferenceBagImage from './Banner/close-up-brown-briefcase.jpg'; // Update the import path and image name

function ConferenceBag() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12 text-center p-4">
            <h1 className="display-2">
              Elevate Your Conference Experience with Stylish Conference Bags
            </h1>
            <p className="lead">
              Explore our collection of conference bags designed for both functionality and professional aesthetics.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Left side with a small image */}
          <div className="col-md-6">
            <img
              src={ConferenceBagImage}
              alt="Stylish Conference Bag"
              className="img-fluid"
            />
          </div>

          {/* Right side with your Conference Bag content */}
          <div className="col-md-6">
            <p>
              Make a statement at your next conference with our stylish conference bags. Designed for both functionality and
              professional aesthetics, our collection ensures that you carry your essentials in style. Explore our range and
              elevate your conference experience with conference bags that reflect your professionalism.
            </p>
            {/* Add more content as needed */}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ConferenceBag;
