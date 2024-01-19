import React from 'react';
import Footer from './Footer'; // Update the import path if needed
import Nav from './Nav'; // Update the import path if needed
import EcommerceImage from './Banner/e-commerce-online-shopping-website-technology-concept.jpg'

function EcommerceWebsite() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12 text-center p-4">
            <h1 className="display-2">
              Welcome to Our E-commerce Store
            </h1>
            <p className="lead">
              Explore our collection and find the perfect products for you.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Left side with a small image */}
          <div className="col-md-6">
            <img
              src={EcommerceImage}
              alt="E-commerce Store"
              className="img-fluid"
            />
          </div>

          {/* Right side with your E-commerce content */}
          <div className="col-md-6">
            {/* Your E-commerce content goes here */}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default EcommerceWebsite;
