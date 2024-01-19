import React from 'react';
import Footer from './Footer'; // Update the import path if needed
import Nav from './Nav'; // Update the import path if needed
import SubmissionTravelMugImage from './Banner/27019974_thermos_front.jpg'

function SubmissionTravelMug() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12 text-center p-4">
            <h1 className="display-2">
              Stay Refreshed On the Go with Submission Travel Mugs
            </h1>
            <p className="lead">
              Explore our submission travel mugs for a stylish and practical way to enjoy your favorite beverages while traveling.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Left side with a small image */}
          <div className="col-md-6">
            <img
              src={SubmissionTravelMugImage}
              alt="Submission Travel Mug"
              className="img-fluid"
            />
          </div>

          {/* Right side with your Submission Travel Mug content */}
          <div className="col-md-6">
            <p>
              Make your travels more enjoyable with our submission travel mugs. Designed for both style and convenience,
              these travel mugs keep your beverages hot or cold while you're on the go. Explore our collection and stay
              refreshed wherever your journey takes you.
            </p>
            {/* Add more content as needed */}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default SubmissionTravelMug;
