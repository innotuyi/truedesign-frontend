import React from 'react';
import Footer from './Footer'; // Update the import path if needed
import A from './TShirt/a.jpg'; // Update the import path and image name if needed
import Nav from './Nav'; // Update the import path if needed

function TShirt() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12 text-center p-4">
            <h1 className="display-2">
              Style and Comfort: Explore Our T-Shirt Designs
            </h1>
            <p className="lead">
              Embrace fashion with our collection of T-shirts. Elevate your
              style while enjoying maximum comfort with our premium designs.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Left side with a small image */}
          <div className="col-md-6">
            <img
              src={A}
              alt="Creative T-Shirt Design"
              className="img-fluid"
            />
          </div>

          {/* Right side with fake text */}
          <div className="col-md-6">
            <p>
              Our T-shirt designs blend style and comfort seamlessly. Whether
              it's for casual wear or promotional events, our T-shirts make a
              statement that reflects your brand's identity.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default TShirt;
