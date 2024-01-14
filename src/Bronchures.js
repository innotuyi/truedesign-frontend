import React from 'react';
import Footer from './Footer';
import Nav from './Nav';
import A from './Bronchures/a.jpg'

function Brochures() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12 text-center p-4">
            <h1 className="display-2">
              Explore the Power of Brochures in Marketing
            </h1>
            <p className="lead">
              Elevate your business with our visually appealing and
              information-packed brochures.
            </p>
          </div>
        </div>

        <div className="card mb-4" style={{ width: '1000px' }}>
          <div className="row g-0">
            {/* Left side with two big photos */}
            <div className="col-md-6">
              <img
                src={A}
                alt="Brochure Design 1"
                className="card-img"
              />
            </div>

            {/* Right side with fake text */}
            <div className="col-md-6">
              <div className="card-body">
                <p className="card-text">
                  Our brochures are crafted with precision to deliver your
                  message effectively. Engage your audience with compelling
                  content and stunning design.
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

export default Brochures;
