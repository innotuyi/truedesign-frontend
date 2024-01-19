import React from 'react';
import Footer from './Footer'; // Update the import path if needed
import DiaryImage from './Banner/diaries.jpg'
import Nav from './Nav'; // Update the import path if needed

function Diaries() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12 text-center p-4">
            <h1 className="display-2">
              Chronicle Your Memories with Our Diaries
            </h1>
            <p className="lead">
              Immerse yourself in the art of journaling with our exquisite collection of diaries.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Left side with a small image */}
          <div className="col-md-6">
            <img
              src={DiaryImage}
              alt="Diary Collection"
              className="img-fluid"
            />
          </div>

          {/* Right side with fake text */}
          <div className="col-md-6">
            <p>
              Preserve your thoughts and memories in our beautifully crafted diaries. Whether
              it's daily reflections, travel adventures, or personal milestones, our diaries
              provide a charming space to capture and cherish your moments. Choose from a range
              of designs to make your journaling experience truly special.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Diaries;
