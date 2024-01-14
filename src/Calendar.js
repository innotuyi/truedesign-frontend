import React from 'react';
import Footer from './Footer'; // Update the import path if needed
import A from './Calendars/a.jpg'; // Update the import path and image name if needed
import Nav from './Nav'; // Update the import path if needed

function Calendar() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12 text-center p-4">
            <h1 className="display-2">
              Stay Organized with Stunning Calendars
            </h1>
            <p className="lead">
              Experience the perfect blend of functionality and aesthetics in our latest calendars.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Left side with a small image */}
          <div className="col-md-6">
            <img
              src={A}
              alt="Creative Calendar Design"
              className="img-fluid"
            />
          </div>

          {/* Right side with fake text */}
          <div className="col-md-6">
            <p>
              Our calendars are designed not just to keep track of dates but to enhance
              your workspace with visually appealing designs. Stay organized and stylish
              with our collection of unique calendars.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Calendar;
