import React from "react";
import Nav from './Nav';
import About from './About'
import NewsLetter from './NewsLetter'
import Service from './Service'
import Portfolio from './Portfolio'
import Footer from './Footer'
import ClientPage from './ClientPage'
import LargeImage from './LargeImage'
import CourseCarousel from './CourseCarousel'

const Home = () => {
  return (
    <>
      <div class="container-xxl bg-white p-0">
      

       <Nav/>
       
       <div class="mt-2 bg-light">
           

           <CourseCarousel/>

           
         </div>
        <Portfolio/> 
        <ClientPage/>
        <LargeImage/>
        
     
        
        <Footer/>
        <a
          href="#"
          class="btn btn-lg btn-primary btn-lg-square back-to-top pt-2"
        >
          <i class="bi bi-arrow-up"></i>
        </a>
      </div>
    </>
  );
};

export default Home;
