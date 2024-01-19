import React from 'react';
import Footer from './Footer'; // Update the import path if needed
import Nav from './Nav'; // Update the import path if needed
import ExecutiveKeyRingsImage from './Banner/ring.jpg'

function ExecutiveKeyRings() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12 text-center p-4">
            <h1 className="display-2">
              Carry Elegance with Executive Key Rings
            </h1>
            <p className="lead">
              Explore our collection of executive key rings, crafted with precision to add a touch of sophistication to your essentials.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Left side with a small image */}
          <div className="col-md-6">
            <img
              src={ExecutiveKeyRingsImage}
              alt="Executive Key Rings"
              className="img-fluid"
            />
          </div>

          {/* Right side with your Executive Key Rings content */}
          <div className="col-md-6">
            <p>
              Elevate your style with our executive key rings. Crafted with precision and attention to detail, these key rings
              are more than accessories – they are a statement of sophistication. Explore our collection and carry elegance with
              our carefully designed executive key rings.
            </p>
            {/* Add more content as needed */}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ExecutiveKeyRings;
