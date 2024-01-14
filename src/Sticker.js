import React from 'react';
import Footer from './Footer';
import A from './Sticker/a.jpg';
import Nav from './Nav';

function Sticker() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12 text-center p-4">
            <h1 className="display-2">
              Elevate Your Brand with Stunning Sticker Designs
            </h1>
            <p className="lead">
              Experience the Power of Exceptional UX/UI in Our Latest Sticker
            </p>
          </div>
        </div>

        <div className="row">
          {/* Left side with a big photo */}
          <div className="col-md-6">
            <img
              src={A}
              alt="Creative Sticker"
              className="img-fluid"
            />
          </div>

          {/* Right side with fake text */}
          <div className="col-md-6">
            <p>
              This captivating sticker embodies the essence of cutting-edge UX/UI
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

export default Sticker;
