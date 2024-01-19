import React from 'react';
import Footer from './Footer'; // Update the import path if needed
import Nav from './Nav'; // Update the import path if needed
import VideoTransitionsImage from './Banner/video.jpg'

function VideoTransitions() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12 text-center p-4">
            <h1 className="display-2">
              Enhance Your Videos with Smooth Transitions
            </h1>
            <p className="lead">
              Explore the art of video transitioning to create seamless and visually appealing video content.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Left side with a small image */}
          <div className="col-md-6">
            <img
              src={VideoTransitionsImage}
              alt="Video Transitions"
              className="img-fluid"
            />
          </div>

          {/* Right side with your Video Transitions content */}
          <div className="col-md-6">
            <p>
              Elevate your video content with smooth transitions. Whether you are creating vlogs, tutorials, or any other video
              content, incorporating well-executed transitions adds a professional touch. Explore the art of video transitioning
              and learn how to create seamless and visually appealing videos.
            </p>
            {/* Add more content as needed */}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default VideoTransitions;
