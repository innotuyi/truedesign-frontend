import React from 'react';
import Footer from './Footer'; // Update the import path if needed
import PVCStickerImage from './Banner/pv.jpg'
import Nav from './Nav'; // Update the import path if needed

function PVCStickers() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12 text-center p-4">
            <h1 className="display-2">
              Unleash Your Creativity with PVC Stickers
            </h1>
            <p className="lead">
              Transform surfaces with our versatile and durable PVC sticker collection.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Left side with a small image */}
          <div className="col-md-6">
            <img
              src={PVCStickerImage}
              alt="PVC Sticker Sheet"
              className="img-fluid"
            />
          </div>

          {/* Right side with fake text */}
          <div className="col-md-6">
            <p>
              Explore endless possibilities with our PVC stickers. Whether for personal expression,
              branding, or decoration, our PVC stickers adhere smoothly to various surfaces. With
              vibrant colors and durable material, our stickers offer a long-lasting and creative
              solution for your projects.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default PVCStickers;
