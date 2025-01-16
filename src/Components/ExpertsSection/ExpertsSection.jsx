import React, { useState, useEffect } from 'react';
import "./ExpertsSection.css";
import ExpertsCarousel from '../ExpertsCarousel/ExpertsCarousel';
import universties_list_desktop from "../../assets/universties-list.svg";
import university_responsive from "../../assets/university-mobile.svg";

export const ExpertsSection = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='experts-section'>
      <div className='main-container experts'> 
        <div className='experts-heading-container'>
          <p className='subtitle'>The AcceptedX Multiplier</p>
          <h2>
            <span className='facts'>7-12x </span>
            Chances of Admission By Working <br />
            With the <span className='experts'> Experts </span>
          </h2>
        </div>
      </div>

      <div>
        <ExpertsCarousel />
      </div>

      <div className='universties-list'>
        <img src={isMobile ? university_responsive : universties_list_desktop} alt="Universities List" />
      </div>
    </div>
  );
};

export default ExpertsSection;
