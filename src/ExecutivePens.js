import React from 'react';
import Footer from './Footer'; // Update the import path if needed
import Nav from './Nav'; // Update the import path if needed
import ExecutivePensImage from './Banner/pens.jpg'

function ExecutivePens() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12 text-center p-4">
            <h1 className="display-2">
              Elevate Your Writing Experience with Executive Pens
            </h1>
            <p className="lead">
              Discover our collection of high-quality executive pens that combine style, functionality, and sophistication.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Left side with a small image */}
          <div className="col-md-6">
            <img
              src={ExecutivePensImage}
              alt="Executive Pens"
              className="img-fluid"
            />
          </div>

          {/* Right side with your Executive Pens content */}
          <div className="col-md-6">
            <p>
              Make a statement with our exclusive collection of executive pens. Crafted with precision and attention
              to detail, these pens are more than writing instruments – they are a reflection of your style and
              professionalism. Elevate your writing experience with our carefully curated selection of executive pens.
            </p>
            {/* Add more content as needed */}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ExecutivePens;
