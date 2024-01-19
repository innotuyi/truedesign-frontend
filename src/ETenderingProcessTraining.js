import React from 'react';
import Footer from './Footer'; // Update the import path if needed
import Nav from './Nav'; // Update the import path if needed
import ETenderingProcessTrainingImage from './Banner/daily-life-business-people-office.jpg'
function ETenderingProcessTraining() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12 text-center p-4">
            <h1 className="display-2">
              Master the E-Tendering Process with Our Training Program
            </h1>
            <p className="lead">
              Join our comprehensive training program to understand and navigate the intricacies of the E-tendering process.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Left side with a small image */}
          <div className="col-md-6">
            <img
              src={ETenderingProcessTrainingImage}
              alt="E-Tendering Process Training"
              className="img-fluid"
            />
          </div>

          {/* Right side with your E-Tendering Process Training content */}
          <div className="col-md-6">
            <p>
              Welcome to our E-Tendering Process Training program! In this comprehensive course, we cover all aspects of the
              E-tendering process, providing you with the knowledge and skills needed to navigate the complexities of online tendering.
              Join us to master the process, understand best practices, and enhance your expertise in the field.
            </p>
            {/* Add more content as needed */}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ETenderingProcessTraining;
