import React from 'react';
import Footer from './Footer'; // Update the import path if needed
import ExhibitionBoothImage from './Banner/ex.jpg'
import Nav from './Nav'; // Update the import path if needed

function ExhibitionBooth() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12 text-center p-4">
            <h1 className="display-2">
              Stand Out at Events with Our Exhibition Booths
            </h1>
            <p className="lead">
              Make a memorable impact at exhibitions with our innovative and customized booth designs.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Left side with a small image */}
          <div className="col-md-6">
            <img
              src={ExhibitionBoothImage}
              alt="Exhibition Booth Design"
              className="img-fluid"
            />
          </div>

          {/* Right side with fake text */}
          <div className="col-md-6">
            <p>
              Elevate your brand presence with our expertly crafted exhibition booths. Our designs
              blend functionality with aesthetics, providing a captivating space for showcasing your
              products or services. From concept to execution, we ensure your booth stands out and
              leaves a lasting impression at any event.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ExhibitionBooth;
