import React from 'react';
import Footer from './Footer'; // Update the import path if needed
import B from './Banner/b.jpg'; // Update the import path and image name if needed
import Nav from './Nav'; // Update the import path if needed

function BackLit() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12 text-center p-4">
            <h1 className="display-2">
              Illuminate Your Brand with Backlit Designs
            </h1>
            <p className="lead">
              Stand out in the crowd with our stunning backlit designs that
              captivate attention and create a lasting impression.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Left side with a small image */}
          <div className="col-md-6">
            <img
              src={B}
              alt="Creative Backlit Design"
              className="img-fluid"
            />
          </div>

          {/* Right side with fake text */}
          <div className="col-md-6">
            <p>
              Our backlit designs add a touch of brilliance to your brand. Whether
              it's for storefronts, exhibitions, or events, our designs ensure
              your brand shines brightly, leaving a lasting impact on your audience.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default BackLit;
