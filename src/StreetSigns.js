import React from 'react';
import Footer from './Footer'; // Update the import path if needed
import StreetSignsImage from './Banner/one-way-sign-city.jpg'
import Nav from './Nav'; // Update the import path if needed

function StreetSigns() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12 text-center p-4">
            <h1 className="display-2">
              Navigate Safely with Custom Street Signs
            </h1>
            <p className="lead">
              Enhance traffic control and improve city aesthetics with our durable and customized street signs.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Left side with a small image */}
          <div className="col-md-6">
            <img
              src={StreetSignsImage}
              alt="Street Signs"
              className="img-fluid"
            />
          </div>

          {/* Right side with fake text */}
          <div className="col-md-6">
            <p>
              Ensure safety and effective navigation with our custom street signs. From regulatory signs
              to informational street markers, our solutions are designed to withstand the elements while
              providing clear and concise information. Contribute to a well-organized urban environment
              with our high-quality and visually appealing street signs.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default StreetSigns;
