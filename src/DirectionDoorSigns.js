import React from 'react';
import Footer from './Footer'; // Update the import path if needed
import DirectionDoorSignsImage from './Banner/dir.jpg'
import Nav from './Nav'; // Update the import path if needed

function DirectionDoorSigns() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12 text-center p-4">
            <h1 className="display-2">
              Guide and Impress with Directional and Door Signs
            </h1>
            <p className="lead">
              Ensure smooth navigation and leave a lasting impression with our custom direction and door signs.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Left side with a small image */}
          <div className="col-md-6">
            <img
              src={DirectionDoorSignsImage}
              alt="Direction and Door Signs"
              className="img-fluid"
            />
          </div>

          {/* Right side with fake text */}
          <div className="col-md-6">
            <p>
              Streamline movement within your space and enhance professionalism with our direction and door signs.
              From clear directional signage to stylish door plaques, our custom designs cater to your specific needs.
              Guide visitors seamlessly and create a cohesive and impressive visual identity for your premises.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default DirectionDoorSigns;
