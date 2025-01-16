import React from "react";
import Slider from "react-slick";
import harvard from "../../assets/harvard.png";
import dartmouth from "../../assets/dartmouth.png";
import berkeley from "../../assets/berkeley.png";
import georgiatech from "../../assets/georgiatech.png";
import nyu from "../../assets/nyu.png";
import virginiatech from "../../assets/virginiatech.png";
import ucla from "../../assets/ucla.png";
import brown from "../../assets/brown.png";
import "./LogoCarousel.css";

const logos = [
  { src: harvard, alt: "Harvard" },
  { src: dartmouth, alt: "Dartmouth" },
  { src: berkeley, alt: "Berkeley" },
  { src: georgiatech, alt: "Georgia Tech" },
  { src: nyu, alt: "NYU" },
  { src: virginiatech, alt: "Virginia Tech" },
  { src: ucla, alt: "UCLA" },
  { src: brown, alt: "Brown" }
];

const LogoCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000, // Slightly slower transition speed
    autoplaySpeed: 100, // Adds better control over the speed
    cssEase: "linear",
    pauseOnHover: false,
    draggable: false,
    swipe: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {logos.map((logo, index) => (
          
          <div className="logo-carousel-image" key={index}>
            <img src={logo.src} alt={logo.alt} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LogoCarousel;
