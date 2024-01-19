import React from 'react';
import Footer from './Footer'; // Update the import path if needed
import ReflectiveStickerImage from './Banner/refre.jpg'
import Nav from './Nav'

function ReflectiveStickers() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12 text-center p-4">
            <h1 className="display-2">
              Shine Bright with Reflective Stickers
            </h1>
            <p className="lead">
              Enhance visibility and style with our eye-catching reflective stickers.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Left side with a small image */}
          <div className="col-md-6">
            <img
              src={ReflectiveStickerImage}
              alt="Reflective Sticker Set"
              className="img-fluid"
            />
          </div>

          {/* Right side with fake text */}
          <div className="col-md-6">
            <p>
              Make a statement with our reflective sticker collection. Perfect for outdoor activities,
              safety gear, or simply adding flair to your belongings, our reflective stickers combine
              functionality and style. Stand out in low-light conditions while expressing your unique
              personality with our vibrant designs.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ReflectiveStickers;
