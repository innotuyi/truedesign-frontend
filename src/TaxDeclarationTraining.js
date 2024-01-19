import React from 'react';
import Footer from './Footer'; // Update the import path if needed
import Nav from './Nav'; // Update the import path if needed
import TaxDeclarationTrainingImage from './Banner/afro-american-man-suit-holding-documents-talking-female-boss.jpg'

function TaxDeclarationTraining() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12 text-center p-4">
            <h1 className="display-2">
              Navigate Tax Declarations with Confidence: Join Our Training
            </h1>
            <p className="lead">
              Enroll in our tax declaration training to understand the intricacies of tax filing and ensure compliance with regulations.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Left side with a small image */}
          <div className="col-md-6">
            <img
              src={TaxDeclarationTrainingImage}
              alt="Tax Declaration Training"
              className="img-fluid"
            />
          </div>

          {/* Right side with your Tax Declaration Training content */}
          <div className="col-md-6">
            <p>
              Welcome to our Tax Declaration Training program! Our comprehensive training will guide you through the intricacies of
              tax filing, helping you understand regulations and compliance. Join us to navigate tax declarations with confidence and
              ensure accurate and compliant reporting.
            </p>
            {/* Add more content as needed */}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default TaxDeclarationTraining;
