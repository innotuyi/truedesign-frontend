import React from 'react';
import Footer from './Footer';
import Nav from './Nav';
import A from './Poster/a.jpg'

function Poster() {
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
              Experience the Power of Exceptional UX/UI in Our Latest Poster
            </p>
          </div>
        </div>

        <div className="card mb-4" style={{ width: '1000px' }}>
          <div className="row g-0">
            {/* Left side with two big photos */}
            <div className="col-md-6">
              <img
                src={A}
                alt="Creative Poster"
                className="card-img"
              />
            
          
            </div>

            {/* Right side with fake text */}
            <div className="col-md-6">
              <div className="card-body">
                <p className="card-text">
                  This captivating poster embodies the essence of cutting-edge
                  UX/UI design. Unleash the potential of your brand with
                  visually striking aesthetics and user-centric interfaces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Poster;
