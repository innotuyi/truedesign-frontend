import React from 'react';
import Footer from './Footer'; // Update the import path if needed
import Nav from './Nav'; // Update the import path if needed
import MusicImage from './Banner/retro-microphone-notebook-computer-live-webcast-air-concept.jpg'; // Update the import path and image name

function Music() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12 text-center p-4">
            <h1 className="display-2">
              Immerse Yourself in the World of Music
            </h1>
            <p className="lead">
              Explore our music products and services, designed to enhance your musical experience and passion for sound.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Left side with a small image */}
          <div className="col-md-6">
            <img
              src={MusicImage}
              alt="Music Products"
              className="img-fluid"
            />
          </div>

          {/* Right side with your Music content */}
          <div className="col-md-6">
            <p>
              Dive into the world of music with our curated collection of products and services. Whether you're a musician,
              music enthusiast, or audiophile, we offer solutions that enhance your musical journey. Explore our range of
              products designed to elevate your sound experience and passion for music.
            </p>
            {/* Add more content as needed */}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Music;
