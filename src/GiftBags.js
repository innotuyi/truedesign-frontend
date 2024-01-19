import React from 'react';
import Footer from './Footer'; // Update the import path if needed
import Nav from './Nav'; // Update the import path if needed
import GiftBagsImage from './Banner/21078514_2105.q703.013.S.m004.c10.shopping bag realistic.jpg'; // Update the import path and image name

function GiftBags() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12 text-center p-4">
            <h1 className="display-2">
              Delight Your Loved Ones with Thoughtful Gift Bags
            </h1>
            <p className="lead">
              Explore our collection of beautifully designed gift bags to add a touch of elegance to your thoughtful presents.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Left side with a small image */}
          <div className="col-md-6">
            <img
              src={GiftBagsImage}
              alt="Gift Bags"
              className="img-fluid"
            />
          </div>

          {/* Right side with your Gift Bags content */}
          <div className="col-md-6">
            <p>
              Make your gifts extra special with our beautifully designed gift bags. Whether it's for birthdays, weddings, or
              any special occasion, our collection adds a touch of elegance to your thoughtful presents. Explore our range and
              delight your loved ones with thoughtful and stylish gift bags.
            </p>
            {/* Add more content as needed */}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default GiftBags;
