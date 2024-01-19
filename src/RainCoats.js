import React from 'react';
import Footer from './Footer'; // Update the import path if needed
import Nav from './Nav'; // Update the import path if needed
import RainCoatsImage from './Banner/full-length-picture-shocked-african-woman-raincoat-opening-umbrella-white-background.jpg'
function RainCoats() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12 text-center p-4">
            <h1 className="display-2">
              Embrace the Rain in Style with Our Rain Coats
            </h1>
            <p className="lead">
              Explore our collection of stylish and functional rain coats designed to keep you dry while making a fashion statement.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Left side with a small image */}
          <div className="col-md-6">
            <img
              src={RainCoatsImage}
              alt="Stylish Rain Coats"
              className="img-fluid"
            />
          </div>

          {/* Right side with your Rain Coats content */}
          <div className="col-md-6">
            <p>
              Stay dry and fashionable with our collection of rain coats. Designed for both style and functionality, our rain
              coats will keep you protected during rainy days. Explore our range and embrace the rain in style with our
              fashionable and waterproof options.
            </p>
            {/* Add more content as needed */}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default RainCoats;
