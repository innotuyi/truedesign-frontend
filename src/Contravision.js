import React from 'react';
import Footer from './Footer'; // Update the import path if needed
import ContravisionImage from './Banner/contra.jpg'
import Nav from './Nav'; // Update the import path if needed

function Contravision() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12 text-center p-4">
            <h1 className="display-2">
              Transform Spaces with Contravision
            </h1>
            <p className="lead">
              Achieve privacy and creativity with our versatile Contravision solutions.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Left side with a small image */}
          <div className="col-md-6">
            <img
              src={ContravisionImage}
              alt="Contravision Window"
              className="img-fluid"
            />
          </div>

          {/* Right side with fake text */}
          <div className="col-md-6">
            <p>
              Explore the unique possibilities of Contravision for windows and glass surfaces.
              This perforated film provides privacy from the outside while allowing visibility
              from the inside. Enhance your space with custom graphics, advertising, or artistic
              designs, creating an impactful and functional solution for both commercial and
              residential applications.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Contravision;
