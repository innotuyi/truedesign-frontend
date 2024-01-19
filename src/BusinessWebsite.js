import React from 'react';
import Footer from './Footer'; // Update the import path if needed
import Nav from './Nav'; // Update the import path if needed
import BusinessImage from './Banner/busines.jpg'

function BusinessWebsite() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12 text-center p-4">
            <h1 className="display-2">
              Elevate Your Business with a Professional Website
            </h1>
            <p className="lead">
              Discover how our tailored website solutions can enhance your online presence and drive success.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Left side with a small image */}
          <div className="col-md-6">
            <img
              src={BusinessImage}
              alt="Business Website"
              className="img-fluid"
            />
          </div>

          {/* Right side with your Business Website content */}
          <div className="col-md-6">
            <p>
              Your business deserves a powerful online presence. Our custom website solutions are designed
              to showcase your products or services, engage your audience, and drive conversions. From
              responsive design to user-friendly navigation, we provide a seamless online experience that
              aligns with your business goals.
            </p>
            {/* Add more content as needed */}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default BusinessWebsite;
