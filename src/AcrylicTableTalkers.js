import React from 'react';
import Footer from './Footer'; // Update the import path if needed
import Nav from './Nav'; // Update the import path if needed
import AcrylicTableTalkersImage from './Banner/26760257_2201.i518.005.S.m005.c12.realistic glass holder leaflet set.jpg'

function AcrylicTableTalkers() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12 text-center p-4">
            <h1 className="display-2">
              Elevate Your Tables with Acrylic Table Talkers
            </h1>
            <p className="lead">
              Explore our acrylic table talkers for a modern and sleek way to showcase promotions or information on your tables.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Left side with a small image */}
          <div className="col-md-6">
            <img
              src={AcrylicTableTalkersImage}
              alt="Acrylic Table Talkers"
              className="img-fluid"
            />
          </div>

          {/* Right side with your Acrylic Table Talkers content */}
          <div className="col-md-6">
            <p>
              Add a touch of modern elegance to your tables with our acrylic table talkers. These sleek and transparent
              displays provide a stylish way to showcase promotions, menus, or important information. Elevate the visual
              appeal of your space and capture attention with our high-quality acrylic table talkers.
            </p>
            {/* Add more content as needed */}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default AcrylicTableTalkers;
