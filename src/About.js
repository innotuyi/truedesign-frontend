import React from "react";
import Image1 from './image/1.webp'
import Footer from './Footer'
import Nav from './Nav'
const About = () => {
  return (
    <>
    <Nav/>
      <div class="container-xxl py-5">
        <div class="container px-lg-5">
          <div class="row g-5">
            <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div class="section-title position-relative mb-4 pb-2">
                <h6 class="position-relative text-primary ps-4">About Us</h6>
                <h2 class="mt-2">
                The TRUE DESIGN Ltd 
                </h2>
              </div>
              <p class="mb-4">
             is a private company legally registered in Rwanda at Rwanda Development Board (RDB) with an incorporation number of 111419795 aimed at giving services of graphic design by Designing, printing and Branding. Like Banners designing and printing, pull up banners, teal drop, stickers, notepad, agenda, paper bags, flyers, brochures, branded trophies, T-shirts printing, services cards, badges, business card, hat and cups, promotional pens, bill boards, photo making, key holders, shopping envelopes and certificates
              </p>
              <div class="d-flex align-items-center mt-4">
                <a class="btn btn-outline-primary btn-square me-3" href="">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a class="btn btn-outline-primary btn-square me-3" href="">
                  <i class="fab fa-twitter"></i>
                </a>
                <a class="btn btn-outline-primary btn-square me-3" href="">
                  <i class="fab fa-instagram"></i>
                </a>
                <a class="btn btn-outline-primary btn-square" href="">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div class="col-lg-6 bg-light justify-content-center text-center">
            <h2 class="pt-5">Mission</h2>
              <p>Modernization of the designing, Printing and Branding through digital and modernized printing and branding service
              </p>
              <h2>Vision</h2>
              <p>To completely grow brands of the businesses in Rwanda by serving them with all kinds of promotional materials and packaging
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default About;
