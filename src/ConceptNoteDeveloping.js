import React from 'react';
import Footer from './Footer'; // Update the import path if needed
import Nav from './Nav'; // Update the import path if needed
import ConceptNoteImage from  './Banner/woman.jpg'
function ConceptNoteDeveloping() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12 text-center p-4">
            <h1 className="display-2">
              Craft Compelling Concepts: Concept Note Developing
            </h1>
            <p className="lead">
              Join our concept note developing program to learn how to create persuasive and effective concept notes for your projects.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Left side with a small image */}
          <div className="col-md-6">
            <img
              src={ConceptNoteImage}
              alt="Concept Note Developing"
              className="img-fluid"
            />
          </div>

          {/* Right side with your Concept Note Developing content */}
          <div className="col-md-6">
            <p>
              Welcome to our Concept Note Developing program! Crafting a compelling concept note is crucial for project success. In this
              training, you will learn the art of creating persuasive and effective concept notes. Join us to develop the skills needed to
              articulate your project ideas clearly and attract the support you need.
            </p>
            {/* Add more content as needed */}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ConceptNoteDeveloping;
