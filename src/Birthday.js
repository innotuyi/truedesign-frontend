import React from 'react';
import Footer from './Footer'; // Update the import path if needed
import Nav from './Nav'; // Update the import path if needed
import BirthdayImage from './Banner/birthday.jpg'

function Birthday() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12 text-center p-4">
            <h1 className="display-2">
              Celebrate Joyful Moments with Our Birthday Collection
            </h1>
            <p className="lead">
              Explore our birthday products to add fun and excitement to your celebrations, making each moment memorable.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Left side with a small image */}
          <div className="col-md-6">
            <img
              src={BirthdayImage}
              alt="Birthday Products"
              className="img-fluid"
            />
          </div>

          {/* Right side with your Birthday content */}
          <div className="col-md-6">
            <p>
              Make birthdays extra special with our vibrant collection of birthday products. From decorations to gifts,
              we have everything you need to create a joyful atmosphere. Explore our selection and add a touch of
              excitement to your celebrations, making each birthday a memorable occasion.
            </p>
            {/* Add more content as needed */}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Birthday;
