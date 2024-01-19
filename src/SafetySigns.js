import React from 'react';
import Footer from './Footer'; // Update the import path if needed
import SafetySignsImage from './Banner/safety.jpg'
import Nav from './Nav'; // Update the import path if needed

function SafetySigns() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12 text-center p-4">
            <h1 className="display-2">
              Prioritize Safety with Clear and Effective Signs
            </h1>
            <p className="lead">
              Enhance workplace safety and compliance with our comprehensive range of safety signs and solutions.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Left side with a small image */}
          <div className="col-md-6">
            <img
              src={SafetySignsImage}
              alt="Safety Signs"
              className="img-fluid"
            />
          </div>

          {/* Right side with fake text */}
          <div className="col-md-6">
            <p>
              Create a safe and compliant environment with our high-quality safety signs.
              From warning signs to emergency exit markers, our comprehensive range is designed
              to convey important information clearly and effectively. Prioritize the well-being
              of employees and visitors with our reliable safety signage solutions.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default SafetySigns;
