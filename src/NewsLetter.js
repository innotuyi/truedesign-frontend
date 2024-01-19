import React from 'react';
import Footer from './Footer'; 
import NewsletterImage from './Banner/newletter.jpg'; 
import Nav from './Nav';

function NewsLetter() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12 text-center p-4">
            <h1 className="display-2">
              Stay Informed with Our Monthly Newsletter
            </h1>
            <p className="lead">
              Explore the latest updates, insights, and stories with our curated newsletter.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Left side with a small image */}
          <div className="col-md-6">
            <img
              src={NewsletterImage}
              alt="Newsletter Cover"
              className="img-fluid"
            />
          </div>

          {/* Right side with fake text */}
          <div className="col-md-6">
            <p>
              Subscribe to our monthly newsletter and stay up-to-date with industry trends,
              news, and exclusive content. Our carefully curated newsletter delivers valuable
              insights right to your inbox, making sure you're always in the know.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default NewsLetter;
