import React, { useState } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import Image2 from "./image/2.webp";
import Image3 from "./image/3.webp";
import Image4 from "./image/4.webp";

const Portfolio = () => {
  // State to manage the opened images
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [currentImageSet, setCurrentImageSet] = useState([]);

  // Array of images for the lightbox
  const imagesSets = {
    set1: [
      { src: Image3, caption: "Designing" },
      { src: Image2, caption: "Web Design - Project Name" },
      { src: Image4, caption: "Web Design - Project Name" },
    ],
    // Add more sets as needed
  };

  // Function to open the lightbox with a specific set of images
  const openLightbox = (imageSetKey, index) => {
    setCurrentImageSet(imagesSets[imageSetKey]);
    setCurrentImage(index);
    setLightboxIsOpen(true);
  };

  // Function to close the lightbox
  const closeLightbox = () => {
    setCurrentImageSet([]);
    setCurrentImage(0);
    setLightboxIsOpen(false);
  };

  return (
    <>
      <div className="container-xxl py-5">
        <div className="container px-lg-5">
        <div class="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
                    <h6 class="position-relative d-inline text-primary ps-4">Latest</h6>
                    <h2 class="mt-2">Our Products</h2>
                </div>
          <div className="row g-4 portfolio-container">
            {Object.keys(imagesSets).map((setKey) => (
              <div
              key={setKey}
              className={`col-lg-4 col-md-6 portfolio-item first wow zoomIn`}
            >
              <div className="position-relative rounded overflow-hidden">
                <img
                  src={imagesSets[setKey][0].src}
                  alt={`Image ${setKey}`}
                  className="img-fluid w-100 card-image"
                  onClick={() => openLightbox(setKey, 0)}
                />
                <div className="portfolio-overlay">
                  {/* Button to open lightbox */}
                  <button
                    className="btn btn-light"
                    onClick={() => openLightbox(setKey, 0)}
                  >
                    <i className="fa fa-plus fa-2x text-primary"></i>
                  </button>
                  <div className="mt-auto">
                    <small className="text-white">
                      <i className="fa fa-folder me-2"></i>
                      {imagesSets[setKey][0].caption}
                    </small>
                    <a
                      className="h5 d-block text-white mt-1 mb-0"
                      href="#"
                      onClick={(e) => e.preventDefault()}
                    >
                      Order Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            

            
            ))}



{Object.keys(imagesSets).map((setKey) => (
              <div
              key={setKey}
              className={`col-lg-4 col-md-6 portfolio-item first wow zoomIn`}
            >
              <div className="position-relative rounded overflow-hidden">
                <img
                  src={imagesSets[setKey][1].src}
                  alt={`Image ${setKey}`}
                  className="img-fluid w-100 card-image"
                  onClick={() => openLightbox(setKey, 0)}
                />
                <div className="portfolio-overlay">
                  {/* Button to open lightbox */}
                  <button
                    className="btn btn-light"
                    onClick={() => openLightbox(setKey, 0)}
                  >
                    <i className="fa fa-plus fa-2x text-primary"></i>
                  </button>
                  <div className="mt-auto">
                    <small className="text-white">
                      <i className="fa fa-folder me-2"></i>
                      {imagesSets[setKey][0].caption}
                    </small>
                    <a
                      className="h5 d-block text-white mt-1 mb-0"
                      href="#"
                      onClick={(e) => e.preventDefault()}
                    >
                      Order Now
                    </a>
                  </div>
                </div>
              </div>
            </div>         
            ))}

{Object.keys(imagesSets).map((setKey) => (
              <div
              key={setKey}
              className={`col-lg-4 col-md-6 portfolio-item first wow zoomIn`}
            >
              <div className="position-relative rounded overflow-hidden">
                <img
                  src={imagesSets[setKey][2].src}
                  alt={`Image ${setKey}`}
                  className="img-fluid w-100 card-image"
                  onClick={() => openLightbox(setKey, 0)}
                />
                <div className="portfolio-overlay">
                  {/* Button to open lightbox */}
                  <button
                    className="btn btn-light"
                    onClick={() => openLightbox(setKey, 0)}
                  >
                    <i className="fa fa-plus fa-2x text-primary"></i>
                  </button>
                  <div className="mt-auto">
                    <small className="text-white">
                      <i className="fa fa-folder me-2"></i>
                      {imagesSets[setKey][0].caption}
                    </small>
                    <a
                      className="h5 d-block text-white mt-1 mb-0"
                      href="#"
                      onClick={(e) => e.preventDefault()}
                    >
                      Order Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            

            
            ))}
          </div>
          
        </div>

        
      </div>
      {/* Lightbox component */}
      <ModalGateway>
        {lightboxIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={currentImageSet}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </>
  );
};

export default Portfolio;
