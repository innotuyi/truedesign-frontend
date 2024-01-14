import React, { useState } from 'react';
import one from './image/1.jpg';
import two from './image/2.jpg';
import three from './image/3.jpg';
import four from './image/4.jpg';
import five from './image/5.jpg';
import six from './image/6.jpg';
import seven from './image/7.jpg';
import eight from './image/8.jpg';
import nine from './image/9.jpg';
import ten from './image/10.jpg';
import eleven from './image/11.jpg';
import twelve from './image/12.jpg';



const CourseCarousel = () => {
  const [position, setPosition] = useState(0);

  const handleNext = () => {
    setPosition((prevPosition) => prevPosition - 100);
  };

  const handlePrev = () => {
    setPosition((prevPosition) => prevPosition + 100);
  };

  return (
      <div className="course-carousel mt-2" style={{ transform: `translateX(${position}%)` }}>
        {/* <div className="course-image">
          <img src={one} alt="Course 1" />
        </div> */}
        <div className="course-image">
          <img src={two} alt="Course 2" />
        </div>
        <div className="course-image">
          <img src={three} alt="Course 3" />
        </div>
        <div className="course-image">
          <img src={four} alt="Course 4" />
        </div>

        <div className="course-image">
          <img src={four} alt="Course 4" />
        </div>
        <div className="course-image">
          <img src={five} alt="Course 4" />
        </div>
        <div className="course-image">
          <img src={six} alt="Course 4" />
        </div>
        <div className="course-image">
          <img src={seven} alt="Course 4" />
        </div>
        <div className="course-image">
          <img src={eight} alt="Course 4" />
        </div>
        <div className="course-image">
          <img src={nine} alt="Course 4" />
        </div>
        <div className="course-image">
          <img src={ten} alt="Course 4" />
        </div>
        <div className="course-image">
          <img src={eleven} alt="Course 4" />
        </div>
        <div className="course-image">
          <img src={twelve} alt="Course 4" />
        </div>
      </div>
  );
};

export default CourseCarousel;
