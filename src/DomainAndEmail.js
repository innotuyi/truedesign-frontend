import React from 'react';
import Footer from './Footer'; // Update the import path if needed
import Nav from './Nav'; // Update the import path if needed
import DomainEmailImage from './Banner/rag-doll-looking-signs.jpg'

function DomainAndEmail() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12 text-center p-4">
            <h1 className="display-2">
              Secure Your Online Presence with Domain and Email Services
            </h1>
            <p className="lead">
              Explore our domain registration and professional email solutions to establish a credible online identity.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Left side with a small image */}
          <div className="col-md-6">
            <img
              src={DomainEmailImage}
              alt="Domain and Email Services"
              className="img-fluid"
            />
          </div>

          {/* Right side with your Domain and Email content */}
          <div className="col-md-6">
            <p>
              A strong online presence starts with a memorable domain and professional email. Secure your brand
              with our domain registration services and communicate effectively with our reliable email solutions.
              Whether you're a business or an individual, we provide the tools you need to establish credibility
              and build trust in the digital landscape.
            </p>
            {/* Add more content as needed */}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default DomainAndEmail;
