import React from 'react';
import Footer from './Footer'; // Update the import path if needed
import Nav from './Nav'; // Update the import path if needed
import FinancialAnalysisImage from './Banner/desk-scene-with-laptop.jpg'; // Update the import path and image name

function FinancialAnalysis() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12 text-center p-4">
            <h1 className="display-2">
              Unveiling Insights: Mastering Financial Analysis
            </h1>
            <p className="lead">
              Explore the world of financial analysis and gain the skills to interpret financial data for informed decision-making.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Left side with a small image */}
          <div className="col-md-6">
            <img
              src={FinancialAnalysisImage}
              alt="Financial Analysis"
              className="img-fluid"
            />
          </div>

          {/* Right side with your Financial Analysis content */}
          <div className="col-md-6">
            <p>
              Welcome to our Financial Analysis program! Financial analysis is a key component of decision-making in business. In this training,
              you'll explore the world of financial analysis and gain the skills needed to interpret financial data. Join us to unveil insights,
              analyze trends, and make informed decisions for the financial success of your organization.
            </p>
            {/* Add more content as needed */}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default FinancialAnalysis;
