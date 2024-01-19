import React from 'react';
import Footer from './Footer'; // Update the import path if needed
import Nav from './Nav'; // Update the import path if needed
import PhotographyImage from './Banner/handsome-african-guy-with-stylish-haircut-taking-photo-digital-camera.jpg'; // Update the import path and image name

function Photography() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12 text-center p-4">
            <h1 className="display-2">
              Explore the Art of Photography
            </h1>
            <p className="lead">
              Immerse yourself in stunning visuals with our collection of captivating and artistic photography.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Left side with a small image */}
          <div className="col-md-6">
            <img
              src={PhotographyImage}
              alt="Photography"
              className="img-fluid"
            />
          </div>

          {/* Right side with your Photography content */}
          <div className="col-md-6">
            <p>
              Journey into the world of photography and experience the artistry captured through our lens. Our collection
              showcases stunning visuals that tell stories, evoke emotions, and celebrate the beauty of the world. Explore
              the art of photography and immerse yourself in the captivating images we have to offer.
            </p>
            {/* Add more content as needed */}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Photography;
