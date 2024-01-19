import React from 'react';
import Footer from './Footer'; // Update the import path if needed
import UniformsImage from './Banner/uniform.jpg'
import Nav from './Nav'; // Update the import path if needed

function Uniforms() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12 text-center p-4">
            <h1 className="display-2">
              Define Professionalism with Our Uniforms
            </h1>
            <p className="lead">
              Elevate your team's image with our stylish and functional collection of uniforms.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Left side with a small image */}
          <div className="col-md-6">
            <img
              src={UniformsImage}
              alt="Uniforms Collection"
              className="img-fluid"
            />
          </div>

          {/* Right side with fake text */}
          <div className="col-md-6">
            <p>
              Make a lasting impression with our professionally designed uniforms.
              Tailored for comfort and style, our collection caters to various industries
              and professions. Enhance team cohesion and project a polished image with our
              uniforms that strike the perfect balance between functionality and fashion.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Uniforms;
