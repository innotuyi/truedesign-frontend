import React from 'react';
import Footer from './Footer'; // Update the import path if needed
import FolderImage from './Banner/folder.jpg'
import Nav from './Nav'; // Update the import path if needed

function Folder() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12 text-center p-4">
            <h1 className="display-2">
              Stay Organized with Stylish Folders
            </h1>
            <p className="lead">
              Discover a perfect combination of functionality and elegance in our latest folders.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Left side with a small image */}
          <div className="col-md-6">
            <img
              src={FolderImage}
              alt="Creative Folder Design"
              className="img-fluid"
            />
          </div>

          {/* Right side with fake text */}
          <div className="col-md-6">
            <p>
              Our folders are crafted not only to organize your documents but also to elevate
              your workspace with visually pleasing designs. Stay tidy and stylish with our
              exclusive collection of unique folders.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Folder;
