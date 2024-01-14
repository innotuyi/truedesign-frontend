import React from 'react';
import Footer from './Footer';
import Nav from './Nav';
import A from './Flyer/a.jpg'

const Flyer = () => {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12 text-center p-4">
            <h1 className="display-2">
              Capture Attention with Striking Flyers
            </h1>
            <p className="lead">
              Transform your message into an eye-catching visual experience
              with our creative flyer designs.
            </p>
          </div>
        </div>

        <div className="card mb-4" style={{ width: '1000px' }}>
          <div className="row g-0">
            {/* Left side with two big photos */}
            <div className="col-md-6">
              <img
                src={A}
                alt="Flyer Design 1"
                className="card-img"
              />
             
            </div>

            {/* Right side with fake text */}
            <div className="col-md-6">
              <div className="card-body">
                <p className="card-text">
                  Our flyers are designed to make a lasting impression. Whether
                  it's for promotions, events, or announcements, we've got you
                  covered.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Flyer;
