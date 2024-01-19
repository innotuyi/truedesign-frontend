import React from 'react';
import Footer from './Footer'; // Update the import path if needed
import Nav from './Nav'; // Update the import path if needed
import WeddingImage from './Banner/Wedding.jpg'

function Wedding() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12 text-center p-4">
            <h1 className="display-2">
              Make Your Wedding Unforgettable with Elegant Details
            </h1>
            <p className="lead">
              Explore our collection of wedding products to add a touch of elegance and personalization to your special day.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Left side with a small image */}
          <div className="col-md-6">
            <img
              src={WeddingImage}
              alt="Wedding Products"
              className="img-fluid"
            />
          </div>

          {/* Right side with your Wedding content */}
          <div className="col-md-6">
            <p>
              Celebrate your love story with our exquisite wedding products. From invitations to decor, we offer a range of
              elegant details to make your wedding day truly special. Explore our collection and add a touch of personalization
              to create memories that will last a lifetime.
            </p>
            {/* Add more content as needed */}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Wedding;
