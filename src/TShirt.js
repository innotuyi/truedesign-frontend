import React from 'react';
import Footer from './Footer'; // Update the import path if needed
import TShirtImage from './Banner/shirts.jpg'
import Nav from './Nav'; // Update the import path if needed

function TShirt() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12 text-center p-4">
            <h1 className="display-2">
              Express Yourself with Stylish T-Shirts
            </h1>
            <p className="lead">
              Showcase your personality with our diverse collection of fashionable T-shirts.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Left side with a small image */}
          <div className="col-md-6">
            <img
              src={TShirtImage}
              alt="T-Shirt Collection"
              className="img-fluid"
            />
          </div>

          {/* Right side with fake text */}
          <div className="col-md-6">
            <p>
              Make a statement with our trendy T-shirts designed for comfort and style.
              From classic designs to bold graphics, our collection caters to diverse tastes.
              Whether for casual outings or expressing your passions, our T-shirts let you
              showcase your individuality with flair.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default TShirt;
