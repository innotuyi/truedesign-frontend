import React from "react";
import Nav from './Nav';
import About from './About'
import NewsLetter from './NewsLetter'
import Service from './Service'
import Portfolio from './Portfolio'
import Testimonial from './Testmonial'
import Team from './Team'
import Footer from './Footer'
const Home = () => {
  return (
    <>
      <div class="container-xxl bg-white p-0">
      

        {/* <!-- Navbar & Hero Start --> */}
       <Nav/>
        {/* <!-- Navbar & Hero End --> */}
        {/* <!-- Full Screen Search Start --> */}
      
        {/* <!-- Full Screen Search End -->
        <!-- About Start --> */}
        {/* <!-- About End --> */}

        {/* <!-- Newsletter Start --> */}        
        {/* <!-- Newsletter End -->
        <!-- Service Start --> */}

        {/* <Service/> */}
        
        {/* <!-- Service End -->
        <!-- Portfolio Start --> */}

       {/* <Portfolio/> */}
        
        {/* <!-- Portfolio End -->


        <!-- Testimonial Start --> */}      
        {/* <!-- Testimonial End -->


        <!-- Team Start --> */}
      
        {/* <!-- Team End --> */}

        {/* <!-- Footer Start --> */}
        
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
