import React from 'react';
import Footer from './Footer'; // Update the import path if needed
import Nav from './Nav'; // Update the import path if needed
import CompanyProfileImage from './Banner/test.jpg'

function CompanyProfile() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12 text-center p-4">
            <h1 className="display-2">
              Discover Our Company's Story and Values
            </h1>
            <p className="lead">
              Explore the journey, mission, and values that define our company and guide us in providing exceptional products/services.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Left side with a small image */}
          <div className="col-md-6">
            <img
              src={CompanyProfileImage}
              alt="Company Profile"
              className="img-fluid"
            />
          </div>

          {/* Right side with your Company Profile content */}
          <div className="col-md-6">
            <p>
              Welcome to [Your Company Name]! Our company is dedicated to [brief description of what your company does]. Since our
              establishment, we have been committed to [core values and principles]. Explore our company's story, mission, and
              values that drive us to provide exceptional [products/services].
            </p>
            {/* Add more content as needed */}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default CompanyProfile;
