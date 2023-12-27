import React from "react";
import Nav from './Nav';
import About from './About'
import NewsLetter from './NewsLetter'
import Service from './Service'
import Portfolio from './Portfolio'
import Footer from './Footer'
import ClientPage from './ClientPage'
const Home = () => {
  return (
    <>
      <div class="container-xxl bg-white p-0">
      

       <Nav/>
        <Portfolio/> 
        <ClientPage/>
        
     
        
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
