import React from 'react';
import Footer from './Footer'; // Update the import path if needed
import OfficeInteriorImage from './Banner/interior.jpg'
import Nav from './Nav'; // Update the import path if needed

function OfficeInterior() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12 text-center p-4">
            <h1 className="display-2">
              Transform Your Workspace with Exceptional Office Interiors
            </h1>
            <p className="lead">
              Create a conducive and inspiring work environment with our innovative office interior designs.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Left side with a small image */}
          <div className="col-md-6">
            <img
              src={OfficeInteriorImage}
              alt="Office Interior Design"
              className="img-fluid"
            />
          </div>

          {/* Right side with fake text */}
          <div className="col-md-6">
            <p>
              Enhance productivity and boost morale with our thoughtfully designed office interiors.
              From collaborative workspaces to private offices, our designs prioritize functionality
              and aesthetics. Let us create an environment that reflects your brand identity and
              fosters a positive and efficient work culture.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default OfficeInterior;
