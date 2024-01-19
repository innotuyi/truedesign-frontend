import React from 'react';
import Footer from './Footer'; // Update the import path if needed
import FrostStickerImage from './Banner/frost.jpg'
import Nav from './Nav'; // Update the import path if needed

function FrostStickers() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12 text-center p-4">
            <h1 className="display-2">
              Add Elegance to Your Windows with Frost Stickers
            </h1>
            <p className="lead">
              Achieve privacy and sophistication with our beautifully designed frost stickers.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Left side with a small image */}
          <div className="col-md-6">
            <img
              src={FrostStickerImage}
              alt="Frost Sticker Window"
              className="img-fluid"
            />
          </div>

          {/* Right side with fake text */}
          <div className="col-md-6">
            <p>
              Transform your windows into works of art with our frost stickers. These elegant
              designs provide privacy without compromising natural light. Whether for home or
              office, our frost stickers add a touch of sophistication, creating a stylish and
              comfortable environment.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default FrostStickers;
