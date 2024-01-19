import React from 'react';
import Footer from './Footer'; // Update the import path if needed
import ReportImage from './Banner/report.jpg'
import Nav from './Nav'

function AnnualReport() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12 text-center p-4">
            <h1 className="display-2">
              Explore Insights with our Annual Reports
            </h1>
            <p className="lead">
              Dive into a world of information and analysis with our comprehensive annual reports.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Left side with a small image */}
          <div className="col-md-6">
            <img
              src={ReportImage}
              alt="Annual Report Cover"
              className="img-fluid"
            />
          </div>

          {/* Right side with fake text */}
          <div className="col-md-6">
            <p>
              Our annual reports go beyond numbers, providing valuable insights and trends
              that shape our journey. Experience a blend of data and design in our meticulously
              crafted reports, making information not only informative but visually engaging.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default AnnualReport;
