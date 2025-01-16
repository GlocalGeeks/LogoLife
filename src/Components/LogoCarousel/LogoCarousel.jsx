import React from 'react';
import './LogoCarousel.css'; 
import harvard from "../../assets/harvard.png";
import dartmouth from "../../assets/dartmouth.png";
import berkeley from "../../assets/berkeley.png";
import georgiatech from "../../assets/georgiatech.png";
import nyu from "../../assets/nyu.png";
import virginiatech from "../../assets/virginiatech.png";
import ucla from "../../assets/ucla.png";
import brown from "../../assets/brown.png";

export const LogoCarousel = () => {
  const images = [
    harvard,
    dartmouth,
    berkeley,
    georgiatech,
    nyu,
    virginiatech,
    ucla,
    brown
  ];

  return (
    <div className='wrapper'>
      {images.map((image, index) => (
        <div key={index} className={`item item${index + 1}`}>
          <img src={image} alt={`University ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}

export default LogoCarousel;
