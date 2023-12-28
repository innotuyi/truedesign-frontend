import React from 'react';
import one from './Logo/1.PNG'
import two from './Logo/2.png'
import three from './Logo/3.jpg'
import four from './Logo/4.png'

import five from './Logo/5.png'
import six from './Logo/6.png'
import seven from './Logo/7.png'

import eight from './Logo/8.png'

import nine from './Logo/9.jpg'

import ten from './Logo/10.jpg'




const ClientPage = () => {
  return (
    <div className="client-page mt-4">
      <h2>Our Valued Clients</h2>
      <div className="logo-gallery">
        <div className="logo-item">
          <img src={one} alt="Company Logo 1" />
        </div>
        <div className="logo-item">
          <img src={two} alt="Company Logo 2" />
        </div>
        <div className="logo-item">
          <img src={three} alt="Company Logo 3" />
        </div>
        <div className="logo-item">
          <img src={four} alt="Company Logo 4" />
        </div>
        <div className="logo-item">
          <img src={five} alt="Company Logo 4" />
        </div>
        <div className="logo-item">
          <img src={six} alt="Company Logo 4" />
        </div>

        <div className="logo-item">
          <img src={seven} alt="Company Logo 4" />
        </div>
        <div className="logo-item">
          <img src={eight} alt="Company Logo 4" />
        </div>
        <div className="logo-item">
          <img src={nine} alt="Company Logo 4" />
        </div>
        <div className="logo-item">
          <img src={ten} alt="Company Logo 4" />
        </div>
      </div>
    </div>
  );
};

export default ClientPage;
