import React from 'react';
import Slider from "react-slick";
import "./ExpertsCarousel.css";
import expert_1 from "../../assets/client-1.png";
import expert_2 from "../../assets/client-2.png";
import expert_3 from "../../assets/client-3.png";
import expert_4 from "../../assets/client-4.png";
import expert_5 from "../../assets/client-5.png";
import expert_6 from "../../assets/client-6.png";
import expert_7 from "../../assets/client-7.png";
import harvard from "../../assets/harvard.png";
import brown from "../../assets/brown.png";
import netflix from "../../assets/netflix.png";
import apple from "../../assets/Apple.png";
import mcKinsey from "../../assets/Mckinsey.png";
import columbia from "../../assets/columbia.png";

const expertData = [
  { image: expert_1, name: 'Jill O.', details: ['Masters in Education', 'Masters in Literature', 'Elite Tier Consultant'], uni: brown },
  { image: expert_2, name: 'Omar W.', details: ['Artificial Intelligence', 'Software Engineer', 'Elite Tier Consultant'], uni: harvard },
  { image: expert_3, name: 'Chinenye E.', details: ['Ivy League Counselor', 'Healthcare Professional', 'Elite Tier Consultant'], uni: columbia },
  { image: expert_4, name: 'Tina Y', details: ['14+ Years Software Engineer', 'Software Engineer', 'Elite Tier Consultant'], uni: mcKinsey },
  { image: expert_5, name: 'Cristina S.', details: ['Ivy League Counselor', 'Writing Competition Specialist', 'Elite Tier Consultant'], uni: harvard },
  { image: expert_6, name: 'Kruti S.', details: ['14+ Years Software Engineer', 'Educational Leadership', 'Elite Tier Mentor'], uni: netflix },
  { image: expert_7, name: 'Kashish D.', details: ['AI/ML Professional', 'Robotics Engineer', 'Elite Tier Mentor'], uni: apple },
];

const ExpertSlide = ({ image, name, details, uni }) => (
  <div className='gap'>
    <div className='slide'>
      <img className='expert-image' src={image} alt={name} />
      <div className='carousel-content'>
        <h2>{name}</h2>
        <ul>
          {details.map((detail, index) => <li key={index}>{detail}</li>)}
        </ul>
        <img className="uni-image" src={uni} alt="University Logo" />
      </div>
    </div>
  </div>
);

export const ExpertsCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <div className='experts-slider-container'>
        <Slider {...settings}>
          {expertData.map((expert, index) => (
            <ExpertSlide
              key={index}
              image={expert.image}
              name={expert.name}
              details={expert.details}
              uni={expert.uni}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ExpertsCarousel;
