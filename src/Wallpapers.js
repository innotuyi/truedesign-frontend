import React from 'react';
import Footer from './Footer'; // Update the import path if needed
import WallpaperImage from './Banner/wallpaper.jpg'
import Nav from './Nav'; // Update the import path if needed

function Wallpapers() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12 text-center p-4">
            <h1 className="display-2">
              Transform Your Space with Stunning Wallpapers
            </h1>
            <p className="lead">
              Immerse yourself in a world of design and creativity with our exquisite wallpapers.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Left side with a small image */}
          <div className="col-md-6">
            <img
              src={WallpaperImage}
              alt="Wallpaper Collection"
              className="img-fluid"
            />
          </div>

          {/* Right side with fake text */}
          <div className="col-md-6">
            <p>
              Elevate the aesthetics of your living or workspace with our diverse collection of wallpapers.
              From bold patterns to serene landscapes, our wallpapers offer a personalized touch to any
              room. Transform your walls and create an atmosphere that reflects your style and personality.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Wallpapers;
