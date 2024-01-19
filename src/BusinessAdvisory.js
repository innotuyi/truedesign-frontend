import React from 'react';
import Footer from './Footer'; // Update the import path if needed
import Nav from './Nav'; // Update the import path if needed
import BusinessAdvisoryImage from './Banner/attractive-african-businessman-glasses-suit-holding-papers.jpg'; // Update the import path and image name

function BusinessAdvisory() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12 text-center p-4">
            <h1 className="display-2">
              Navigating Success: Business Advisory Services
            </h1>
            <p className="lead">
              Explore our business advisory services designed to guide your business towards strategic growth and success.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Left side with a small image */}
          <div className="col-md-6">
            <img
              src={BusinessAdvisoryImage}
              alt="Business Advisory"
              className="img-fluid"
            />
          </div>

          {/* Right side with your Business Advisory content */}
          <div className="col-md-6">
            <p>
              Welcome to our Business Advisory Services! Our team of experts is dedicated to helping your business thrive. Explore our
              advisory services designed to guide your business towards strategic growth and success. Whether you need assistance with
              financial planning, market analysis, or overall business strategy, we are here to support you.
            </p>
            {/* Add more content as needed */}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default BusinessAdvisory;
