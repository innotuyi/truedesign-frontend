import React from 'react';
import Footer from './Footer'; // Update the import path if needed
import NotebookImage from './Banner/notebook.jpg'
import Nav from './Nav'; // Update the import path if needed

function Notebooks() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12 text-center p-4">
            <h1 className="display-2">
              Capture Ideas in Style with Our Notebooks
            </h1>
            <p className="lead">
              Elevate your note-taking experience with our premium collection of notebooks.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Left side with a small image */}
          <div className="col-md-6">
            <img
              src={NotebookImage}
              alt="Notebook Collection"
              className="img-fluid"
            />
          </div>

          {/* Right side with fake text */}
          <div className="col-md-6">
            <p>
              Jot down your thoughts and ideas in our stylish and functional notebooks.
              Whether you're in a meeting or enjoying some quiet time, our notebooks provide
              the perfect canvas for your creativity. Choose from a variety of designs and sizes
              to suit your personal style.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Notebooks;
