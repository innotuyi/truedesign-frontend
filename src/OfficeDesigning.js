import React from 'react';
import Footer from './Footer'; // Update the import path if needed
import Nav from './Nav'; // Update the import path if needed
import OfficeDesigningImage from './Banner/top-view-people-working-with-laptops.jpg'
function OfficeDesigning() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12 text-center p-4">
            <h1 className="display-2">
              Transform Your Workspace with Innovative Office Designing
            </h1>
            <p className="lead">
              Explore our office designing solutions to create a workspace that fosters creativity, productivity, and a positive work environment.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Left side with a small image */}
          <div className="col-md-6">
            <img
              src={OfficeDesigningImage}
              alt="Office Designing"
              className="img-fluid"
            />
          </div>

          {/* Right side with your Office Designing content */}
          <div className="col-md-6">
            <p>
              Elevate your office space with our innovative office designing solutions. Whether you're looking for modern
              layouts, ergonomic furniture, or creative decor, we have the expertise to transform your workspace. Explore
              our options and create an office environment that inspires creativity, enhances productivity, and promotes
              a positive work culture.
            </p>
            {/* Add more content as needed */}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default OfficeDesigning;
