import React from 'react';
import Footer from './Footer'; // Update the import path if needed
import A from './LetterHead/a.jpg'; // Update the import path and image name if needed
import Nav from './Nav'; // Update the import path if needed

function LetterHead() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12 text-center p-4">
            <h1 className="display-2">
              Elevate Your Brand with Stunning Designs
            </h1>
            <p className="lead">
              Experience the Power of Exceptional UX/UI in Our Latest LetterHead
            </p>
          </div>
        </div>

        <div className="row">
          {/* Left side with a small image */}
          <div className="col-md-6">
            <img
              src={A}
              alt="Creative LetterHead"
              className="img-fluid"
            />
          </div>

          {/* Right side with fake text */}
          <div className="col-md-6">
            <p>
              This captivating LetterHead embodies the essence of cutting-edge UX/UI
              design. Unleash the potential of your brand with visually striking
              aesthetics and user-centric interfaces.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default LetterHead;
