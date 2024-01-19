import React from 'react';
import Footer from './Footer'; // Update the import path if needed
import Nav from './Nav'; // Update the import path if needed
import QuickBooksTrainingImage from './Banner/desk-scene-with-laptop.jpg'

function QuickBooksTraining() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12 text-center p-4">
            <h1 className="display-2">
              Unlock the Power of QuickBooks with Our Training Program
            </h1>
            <p className="lead">
              Join our QuickBooks training to gain the skills and knowledge needed for efficient financial management.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Left side with a small image */}
          <div className="col-md-6">
            <img
              src={QuickBooksTrainingImage}
              alt="QuickBooks Training"
              className="img-fluid"
            />
          </div>

          {/* Right side with your QuickBooks Training content */}
          <div className="col-md-6">
            <p>
              Welcome to our QuickBooks Training program! Whether you're a business owner, accountant, or finance professional,
              our training will equip you with the skills to efficiently manage your finances using QuickBooks. Join us to unlock
              the full potential of QuickBooks and streamline your financial processes.
            </p>
            {/* Add more content as needed */}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default QuickBooksTraining;
