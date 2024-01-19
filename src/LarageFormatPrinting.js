import React from 'react';
import Footer from './Footer'; // Update the import path if needed
import Nav from './Nav'; // Update the import path if needed
import LargeFormatPrintingImage from './Banner/large.jpg'; // Update the import path and image name

function LargeFormatPrinting() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12 text-center p-4">
            <h1 className="display-2">
              Make a Big Impact with Large Format Printing
            </h1>
            <p className="lead">
              Explore our large format printing services for stunning visuals and impactful displays that capture attention.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Left side with a small image */}
          <div className="col-md-6">
            <img
              src={LargeFormatPrintingImage}
              alt="Large Format Printing"
              className="img-fluid"
            />
          </div>

          {/* Right side with your Large Format Printing content */}
          <div className="col-md-6">
            <p>
              Make a bold statement with our large format printing services. Whether you need banners, posters, or other large-scale
              displays, we deliver stunning visuals that capture attention and make a big impact. Explore our options and transform
              your ideas into impactful displays with our large format printing solutions.
            </p>
            {/* Add more content as needed */}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default LargeFormatPrinting;
