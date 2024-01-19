import React from 'react';
import Footer from './Footer'; // Update the import path if needed
import Nav from './Nav'; // Update the import path if needed
import HatsImage from './Banner/hat.jpg'; // Update the import path and image name

function Hats() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12 text-center p-4">
            <h1 className="display-2">
              Elevate Your Style with Fashionable Hats
            </h1>
            <p className="lead">
              Explore our collection of stylish hats designed to add flair to your outfits and express your unique personality.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Left side with a small image */}
          <div className="col-md-6">
            <img
              src={HatsImage}
              alt="Stylish Hats"
              className="img-fluid"
            />
          </div>

          {/* Right side with your Hats content */}
          <div className="col-md-6">
            <p>
              Make a fashion statement with our collection of hats that blend style and personality. Whether you're looking
              for casual caps or elegant hats, our selection caters to various tastes. Explore our range and elevate your
              style with the perfect hat to complement your outfits.
            </p>
            {/* Add more content as needed */}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Hats;
