import React from 'react';
import Footer from './Footer'; // Update the import path if needed
import Nav from './Nav'; // Update the import path if needed
import StrategicPlanningImage from './Banner/african-man-black-suit-man-writing-glass.jpg'; // Update the import path and image name

function StrategicPlanning() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12 text-center p-4">
            <h1 className="display-2">
              Charting the Course: Mastering Strategic Planning
            </h1>
            <p className="lead">
              Dive into the world of strategic planning and develop the skills to guide your organization toward success.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Left side with a small image */}
          <div className="col-md-6">
            <img
              src={StrategicPlanningImage}
              alt="Strategic Planning"
              className="img-fluid"
            />
          </div>

          {/* Right side with your Strategic Planning content */}
          <div className="col-md-6">
            <p>
              Welcome to our Strategic Planning program! Strategic planning is a crucial aspect of organizational success. In this training,
              you'll dive into the world of strategic planning and develop the skills needed to chart the course for your organization.
              Join us to learn how to set objectives, make informed decisions, and guide your organization toward long-term success.
            </p>
            {/* Add more content as needed */}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default StrategicPlanning;
