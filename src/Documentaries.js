import React from 'react';
import Footer from './Footer'; // Update the import path if needed
import Nav from './Nav'; // Update the import path if needed
import DocumentariesImage from './Banner/documentatries.jpg'; // Update the import path and image name

function Documentaries() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12 text-center p-4">
            <h1 className="display-2">
              Explore Captivating Documentaries
            </h1>
            <p className="lead">
              Immerse yourself in a world of knowledge and entertainment with our thought-provoking documentaries.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Left side with a small image */}
          <div className="col-md-6">
            <img
              src={DocumentariesImage}
              alt="Documentaries"
              className="img-fluid"
            />
          </div>

          {/* Right side with your Documentaries content */}
          <div className="col-md-6">
            <p>
              Discover thought-provoking and informative documentaries that cover a wide range of topics. Our collection
              is curated to provide you with engaging content that educates, inspires, and entertains. Immerse yourself
              in the world of knowledge with our captivating documentaries.
            </p>
            {/* Add more content as needed */}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Documentaries;
