import React from 'react';
import Footer from './Footer'; // Update the import path if needed
import GazeboImage from './Banner/gazebo.jpg'
import Nav from './Nav'; // Update the import path if needed

function Gazebo() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12 text-center p-4">
            <h1 className="display-2">
              Create Elegant Outdoor Spaces with Gazebos
            </h1>
            <p className="lead">
              Experience comfort and style with our collection of beautifully designed gazebos.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Left side with a small image */}
          <div className="col-md-6">
            <img
              src={GazeboImage}
              alt="Gazebo Collection"
              className="img-fluid"
            />
          </div>

          {/* Right side with fake text */}
          <div className="col-md-6">
            <p>
              Make your outdoor gatherings memorable with our elegant gazebos. Whether for
              garden parties, weddings, or simply relaxing in your backyard, our gazebos offer
              a perfect blend of comfort and sophistication. Choose from various styles to create
              a charming outdoor space that reflects your taste and enhances your lifestyle.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Gazebo;
