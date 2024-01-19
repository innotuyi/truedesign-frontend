import React from 'react';
import Footer from './Footer'; // Update the import path if needed
import Nav from './Nav'; // Update the import path if needed
import MugsImage from './Banner/mug.jpg'

function Mugs() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12 text-center p-4">
            <h1 className="display-2">
              Start Your Day Right with Personalized Mugs
            </h1>
            <p className="lead">
              Explore our collection of mugs that add a personal touch to your morning routine or make for great gifts.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Left side with a small image */}
          <div className="col-md-6">
            <img
              src={MugsImage}
              alt="Personalized Mugs"
              className="img-fluid"
            />
          </div>

          {/* Right side with your Mugs content */}
          <div className="col-md-6">
            <p>
              Make your mornings special with our personalized mugs. Whether it's for your morning coffee or as a
              thoughtful gift, our collection offers a variety of designs and customization options. Add a personal
              touch to your daily routine or create memorable gifts with our unique and high-quality mugs.
            </p>
            {/* Add more content as needed */}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Mugs;
