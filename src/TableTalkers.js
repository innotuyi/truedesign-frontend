import React from 'react';
import Footer from './Footer'; // Update the import path if needed
import Nav from './Nav'; // Update the import path if needed
import TableTalkersImage from './Banner/table.jpg'

function TableTalkers() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12 text-center p-4">
            <h1 className="display-2">
              Spark Conversations with Custom Table Talkers
            </h1>
            <p className="lead">
              Explore our table talkers to showcase promotions, menus, or important information on your tables with style.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Left side with a small image */}
          <div className="col-md-6">
            <img
              src={TableTalkersImage}
              alt="Table Talkers"
              className="img-fluid"
            />
          </div>

          {/* Right side with your Table Talkers content */}
          <div className="col-md-6">
            <p>
              Make a statement on your tables with our custom table talkers. Whether it's showcasing promotions,
              menus, or important information, our table talkers are designed to capture attention and spark
              conversations. Elevate the dining experience for your customers with our stylish and informative table talkers.
            </p>
            {/* Add more content as needed */}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default TableTalkers;
