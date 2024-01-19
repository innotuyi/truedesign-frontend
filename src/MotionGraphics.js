import React from 'react';
import Footer from './Footer'; // Update the import path if needed
import Nav from './Nav'; // Update the import path if needed
import MotionGraphicsImage from './Banner/african-american-photographer-editing-digital-photography.jpg'; // Update the import path and image name

function MotionGraphics() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12 text-center p-4">
            <h1 className="display-2">
              Experience Creativity in Motion Graphics
            </h1>
            <p className="lead">
              Explore our collection of dynamic and visually engaging motion graphics that bring ideas to life.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Left side with a small image */}
          <div className="col-md-6">
            <img
              src={MotionGraphicsImage}
              alt="Motion Graphics"
              className="img-fluid"
            />
          </div>

          {/* Right side with your Motion Graphics content */}
          <div className="col-md-6">
            <p>
              Immerse yourself in the world of motion graphics, where creativity comes to life in dynamic and visually
              engaging ways. Our collection showcases innovative animations and designs that captivate audiences and convey
              ideas with impact. Explore the art of motion graphics and experience the power of visual storytelling.
            </p>
            {/* Add more content as needed */}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default MotionGraphics;
