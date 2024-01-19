import React from 'react';
import Footer from './Footer'; // Update the import path if needed
import EnvelopeImage from './Banner/envilopes.jpg'
import Nav from './Nav'; // Update the import path if needed

function Envelopes() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12 text-center p-4">
            <h1 className="display-2">
              Elevate Your Correspondence with Stylish Envelopes
            </h1>
            <p className="lead">
              Make your mail stand out with our exquisite collection of envelopes.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Left side with a small image */}
          <div className="col-md-6">
            <img
              src={EnvelopeImage}
              alt="Envelope Collection"
              className="img-fluid"
            />
          </div>

          {/* Right side with fake text */}
          <div className="col-md-6">
            <p>
              Add a touch of elegance to your correspondence with our beautifully designed envelopes.
              From formal business letters to special occasion invitations, our envelopes are crafted
              to complement your style. Choose from a variety of sizes and designs for a memorable
              and sophisticated presentation.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Envelopes;
