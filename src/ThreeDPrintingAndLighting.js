import React from 'react';
import Footer from './Footer'; // Update the import path if needed
import Nav from './Nav'; // Update the import path if needed
import ThreeDPrintingAndLightingImage from './Banner/3ddesign.jpg'

function ThreeDPrintingAndLighting() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12 text-center p-4">
            <h1 className="display-2">
              Explore the Fusion of 3D Printing and Lighting
            </h1>
            <p className="lead">
              Immerse yourself in the cutting-edge world where 3D printing meets lighting design to create innovative and visually stunning products.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Left side with a small image */}
          <div className="col-md-6">
            <img
              src={ThreeDPrintingAndLightingImage}
              alt="3D Printing and Lighting"
              className="img-fluid"
            />
          </div>

          {/* Right side with your 3D Printing and Lighting content */}
          <div className="col-md-6">
            <p>
              Witness the fusion of technology and design in our collection of 3D printed and lighting products. We bring
              innovation to life with cutting-edge 3D printing techniques combined with creative lighting designs. Explore
              the possibilities and experience the captivating synergy of 3D printing and lighting in our unique products.
            </p>
            {/* Add more content as needed */}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ThreeDPrintingAndLighting;
