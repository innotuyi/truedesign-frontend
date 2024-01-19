import React from 'react';
import Footer from './Footer'; // Update the import path if needed
import ThreeDSignsImage from './Banner/3sign.jpg'
import Nav from './Nav'; // Update the import path if needed

function ThreeDSigns() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12 text-center p-4">
            <h1 className="display-2">
              Make a Statement with Unique 3D Signs
            </h1>
            <p className="lead">
              Elevate your brand presence with our visually striking and dimensional 3D sign solutions.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Left side with a small image */}
          <div className="col-md-6">
            <img
              src={ThreeDSignsImage}
              alt="3D Signs Design"
              className="img-fluid"
            />
          </div>

          {/* Right side with fake text */}
          <div className="col-md-6">
            <p>
              Stand out with our custom-designed 3D signs that bring your brand to life. Whether it's
              for your storefront, office, or events, our dimensional signs create a lasting impression.
              With innovative designs and quality craftsmanship, our 3D signs add a new dimension to
              your brand identity.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ThreeDSigns;
