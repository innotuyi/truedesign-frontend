import React from 'react';
import Footer from './Footer'; // Update the import path if needed
import Nav from './Nav'; // Update the import path if needed
import DocumentaryVideosImage from './Banner/man-filming-with-professional-camera.jpg'

function DocumentaryVideos() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12 text-center p-4">
            <h1 className="display-2">
              Dive into Educational and Inspiring Documentary Videos
            </h1>
            <p className="lead">
              Explore our collection of documentary videos that cover a variety of topics, providing both education and inspiration.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Left side with a small image */}
          <div className="col-md-6">
            <img
              src={DocumentaryVideosImage}
              alt="Documentary Videos"
              className="img-fluid"
            />
          </div>

          {/* Right side with your Documentary Videos content */}
          <div className="col-md-6">
            <p>
              Immerse yourself in a diverse array of educational and inspiring documentary videos. Our collection covers
              a wide range of topics, from science and history to social issues and more. Explore our documentary videos
              to gain insights, knowledge, and a deeper understanding of the world around us.
            </p>
            {/* Add more content as needed */}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default DocumentaryVideos;
