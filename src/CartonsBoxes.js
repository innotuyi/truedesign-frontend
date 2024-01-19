import React from 'react';
import Footer from './Footer'; // Update the import path if needed
import Nav from './Nav'; // Update the import path if needed
import CartonsBoxesImage from './Banner/empty-closed-boxes-white.jpg'
function CartonsBoxes() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12 text-center p-4">
            <h1 className="display-2">
              Discover Custom Cartons and Boxes for Every Occasion
            </h1>
            <p className="lead">
              Explore our range of beautifully crafted cartons and boxes tailored to suit your packaging needs for various occasions.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Left side with a small image */}
          <div className="col-md-6">
            <img
              src={CartonsBoxesImage}
              alt="Cartons and Boxes"
              className="img-fluid"
            />
          </div>

          {/* Right side with your Cartons and Boxes content */}
          <div className="col-md-6">
            <p>
              Elevate your packaging with our custom cartons and boxes designed for a variety of occasions. Whether it's for
              product packaging, gifts, or special events, our collection offers beautifully crafted solutions. Explore our
              range and discover the perfect cartons and boxes to complement your unique packaging needs.
            </p>
            {/* Add more content as needed */}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default CartonsBoxes;
