import React from 'react';
import Footer from './Footer'; // Update the import path if needed
import IDCardImage from './Banner/card.jpg'
import Nav from './Nav'

function IDCards() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12 text-center p-4">
            <h1 className="display-2">
              Personalize Your Identity with Custom ID Cards
            </h1>
            <p className="lead">
              Stand out and stay secure with our professionally designed ID cards.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Left side with a small image */}
          <div className="col-md-6">
            <img
              src={IDCardImage}
              alt="ID Card Design"
              className="img-fluid"
            />
          </div>

          {/* Right side with fake text */}
          <div className="col-md-6">
            <p>
              Make a lasting impression with our customizable ID cards. Whether for business,
              events, or personal use, our ID card designs combine style and functionality.
              Ensure a professional and secure identity with our high-quality ID cards tailored
              to your specifications.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default IDCards;
