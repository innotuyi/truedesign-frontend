import React from 'react';
import Footer from './Footer'; // Update the import path if needed
import Nav from './Nav'; // Update the import path if needed
import CorporateImage from './Banner/16079543_463_digital_marketing_social_media_post_template.jpg'

function Corporate() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12 text-center p-4">
            <h1 className="display-2">
              Elevate Your Corporate Presence with Customized Solutions
            </h1>
            <p className="lead">
              Explore our corporate products and services designed to enhance your brand image and foster business relationships.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Left side with a small image */}
          <div className="col-md-6">
            <img
              src={CorporateImage}
              alt="Corporate Products"
              className="img-fluid"
            />
          </div>

          {/* Right side with your Corporate content */}
          <div className="col-md-6">
            <p>
              Strengthen your corporate identity with our tailored products and services. Whether you need branded merchandise,
              promotional items, or customized office solutions, we have you covered. Explore our corporate collection and
              elevate your brand image while fostering strong business relationships.
            </p>
            {/* Add more content as needed */}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Corporate;
