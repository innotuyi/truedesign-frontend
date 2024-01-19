import React from 'react';
import Footer from './Footer'; // Update the import path if needed
import Nav from './Nav'; // Update the import path if needed
import BusinessPlanImage from './Banner/business-plan-corporate-development-process.jpg'; // Update the import path and image name

function BusinessPlan() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12 text-center p-4">
            <h1 className="display-2">
              Blueprint for Success: Crafting Your Business Plan
            </h1>
            <p className="lead">
              Explore the essentials of business planning and create a comprehensive roadmap for your business success.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Left side with a small image */}
          <div className="col-md-6">
            <img
              src={BusinessPlanImage}
              alt="Business Plan"
              className="img-fluid"
            />
          </div>

          {/* Right side with your Business Plan content */}
          <div className="col-md-6">
            <p>
              Welcome to our Business Plan program! Crafting a solid business plan is crucial for success. In this training, you'll explore
              the essentials of business planning and learn how to create a comprehensive roadmap for your business. Join us to develop the
              skills needed to articulate your business vision, set goals, and plan for sustainable growth.
            </p>
            {/* Add more content as needed */}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default BusinessPlan;
