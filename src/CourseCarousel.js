import React, { useState } from 'react';
import Logo from './image/lOGO.png';
import one from './image/1.webp';
import two from './image/2.webp';
import three from './image/3.webp';
import four from './image/4.webp';

const CourseCarousel = () => {
  const [position, setPosition] = useState(0);

  const handleNext = () => {
    setPosition((prevPosition) => prevPosition - 100);
  };

  const handlePrev = () => {
    setPosition((prevPosition) => prevPosition + 100);
  };

  return (
      <div className="course-carousel" style={{ transform: `translateX(${position}%)` }}>
        <div className="course-image">
          <img src={one} alt="Course 1" />
        </div>
        <div className="course-image">
          <img src={two} alt="Course 2" />
        </div>
        <div className="course-image">
          <img src={three} alt="Course 3" />
        </div>
        <div className="course-image">
          <img src={four} alt="Course 4" />
        </div>
      </div>
  );
};

export default CourseCarousel;
