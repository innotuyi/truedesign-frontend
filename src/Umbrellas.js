import React from 'react';
import Footer from './Footer'; // Update the import path if needed
import UmbrellaImage from './Banner/umbrella.jpg'
import Nav from './Nav'; // Update the import path if needed

function Umbrellas() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12 text-center p-4">
            <h1 className="display-2">
              Stay Stylish and Dry with Our Umbrellas
            </h1>
            <p className="lead">
              Shield yourself from the elements in style with our chic and reliable umbrellas.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Left side with a small image */}
          <div className="col-md-6">
            <img
              src={UmbrellaImage}
              alt="Umbrella Collection"
              className="img-fluid"
            />
          </div>

          {/* Right side with fake text */}
          <div className="col-md-6">
            <p>
              Embrace rainy days with our fashionable umbrellas. Our collection combines
              functionality with eye-catching designs to keep you dry and stylish. Whether
              for everyday use or special occasions, our umbrellas offer the perfect blend
              of durability and elegance, ensuring you stay prepared for any weather.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Umbrellas;
