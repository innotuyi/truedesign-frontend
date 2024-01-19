import React from 'react';
import Footer from './Footer'; // Update the import path if needed
import BillboardsImage from './Banner/us-elections-vote-concept-with-flag.jpg'
import Nav from './Nav'; // Update the import path if needed

function Billboards() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12 text-center p-4">
            <h1 className="display-2">
              Maximize Visibility with Striking Billboards
            </h1>
            <p className="lead">
              Capture attention and promote your message effectively with our impactful billboard designs.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Left side with a small image */}
          <div className="col-md-6">
            <img
              src={BillboardsImage}
              alt="Billboards Design"
              className="img-fluid"
            />
          </div>

          {/* Right side with fake text */}
          <div className="col-md-6">
            <p>
              Amplify your brand or message with our attention-grabbing billboard designs.
              From highways to city centers, our billboards are crafted to stand out and
              deliver your message effectively. Make a bold statement and reach a wider
              audience with our high-impact billboard solutions.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Billboards;
