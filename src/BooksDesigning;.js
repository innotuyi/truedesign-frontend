import React from 'react';
import Footer from './Footer'; // Update the import path if needed
import Nav from './Nav'; // Update the import path if needed
import BooksDesigningImage from './Banner/bookp.jpg'; // Update the import path and image name

function BooksDesigning() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12 text-center p-4">
            <h1 className="display-2">
              Bring Your Ideas to Life with Creative Books Designing
            </h1>
            <p className="lead">
              Explore our books designing services to create visually appealing and engaging book layouts that captivate readers.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Left side with a small image */}
          <div className="col-md-6">
            <img
              src={BooksDesigningImage}
              alt="Books Designing"
              className="img-fluid"
            />
          </div>

          {/* Right side with your Books Designing content */}
          <div className="col-md-6">
            <p>
              Unlock the potential of your ideas with our creative books designing services. Whether you're an author looking to
              publish a new book or a business creating informative materials, we provide visually appealing and engaging book
              layouts that captivate readers. Explore our options and bring your written content to life with innovative books designing.
            </p>
            {/* Add more content as needed */}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default BooksDesigning;
