// LargeImageSection.jsx
import React from 'react';
import service from './Logo/service.PNG'


const LargeImageSection = () => {
  return (
    <div className="large-image-section mb-2 mt-2">
        <hr/>
        <h4 className='text-center mt-3 mb-3'
        style={{
          color:"gray"}}
        
        >Other service</h4>
      <img src={service} alt="Large Background" className="background-image" />
    </div>
  );
};

export default LargeImageSection;
