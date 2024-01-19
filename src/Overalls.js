import React from 'react';
import Footer from './Footer'; // Update the import path if needed
import OverallsImage from './Banner/over.jpg'
import Nav from './Nav'; // Update the import path if needed

function Overalls() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12 text-center p-4">
            <h1 className="display-2">
              Work Comfortably and Safely with Our Overalls
            </h1>
            <p className="lead">
              Elevate your workwear with our durable and comfortable collection of overalls.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Left side with a small image */}
          <div className="col-md-6">
            <img
              src={OverallsImage}
              alt="Overalls Collection"
              className="img-fluid"
            />
          </div>

          {/* Right side with fake text */}
          <div className="col-md-6">
            <p>
              Tackle any job with confidence in our quality overalls. Designed for comfort
              and durability, our collection ensures you stay protected while working.
              From heavy-duty tasks to casual wear, our overalls offer a versatile and
              stylish solution for a variety of work environments.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Overalls;
