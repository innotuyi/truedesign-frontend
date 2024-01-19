import React from 'react';
import Footer from './Footer'; // Update the import path if needed
import IlluminatedSignsImage from './Banner/sign.jpg'
import Nav from './Nav'; // Update the import path if needed

function IlluminatedSigns() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12 text-center p-4">
            <h1 className="display-2">
              Shine Bright with Custom Illuminated Signs
            </h1>
            <p className="lead">
              Illuminate your brand and stand out day or night with our eye-catching illuminated sign solutions.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Left side with a small image */}
          <div className="col-md-6">
            <img
              src={IlluminatedSignsImage}
              alt="Illuminated Signs"
              className="img-fluid"
            />
          </div>

          {/* Right side with fake text */}
          <div className="col-md-6">
            <p>
              Make a bold statement with our custom illuminated signs. From LED signs to backlit displays,
              our solutions ensure your brand is visible and impactful 24/7. Whether indoors or outdoors,
              enhance your visibility and attract attention with our innovative illuminated signage designs.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default IlluminatedSigns;
