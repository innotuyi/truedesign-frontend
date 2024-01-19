import React from 'react';
import Footer from './Footer'; // Update the import path if needed
import Nav from './Nav'; // Update the import path if needed
import EBMUsingTrainingImage from './Banner/industrial-designers-working-3d-model.jpg'
function EBMUsingTraining() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12 text-center p-4">
            <h1 className="display-2">
              Mastering Evidence-Based Medicine (EBM) Using Training
            </h1>
            <p className="lead">
              Delve into the principles of evidence-based medicine and enhance your skills through practical training.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Left side with a small image */}
          <div className="col-md-6">
            <img
              src={EBMUsingTrainingImage}
              alt="EBM Using Training"
              className="img-fluid"
            />
          </div>

          {/* Right side with your EBM Using Training content */}
          <div className="col-md-6">
            <p>
              Welcome to our Evidence-Based Medicine (EBM) Using Training program! In this training, you will delve into the principles
              of evidence-based medicine and enhance your skills through practical training. Join us to master the art of integrating
              clinical expertise, patient values, and the best available evidence for optimal healthcare decision-making.
            </p>
            {/* Add more content as needed */}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default EBMUsingTraining;
