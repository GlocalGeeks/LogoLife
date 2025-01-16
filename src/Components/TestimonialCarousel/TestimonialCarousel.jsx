import React, { useState } from 'react'; 
import Slider from "react-slick";
import "./TestimonialCarousel.css";
import review_stars from "../../assets/review-stars.svg";
import play_icon from "../../assets/white-play-icon.png";
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import chhloeVideo from '../../assets/Stanford-University.mp4';
import zaraVideo from "../../assets/Columbia-Barnard.mp4";

export const TestimonialCarousel = () => {
  const [chloeVideoClass, setChloeVideoClass] = useState("hide");
  const [zaraVideoClass, setZaraVideoClass] = useState("hide");

  const showVideoChloe = () => {
    setChloeVideoClass(prevClass => (prevClass === "hide" ? "" : "hide"));
  };

  const showZaraVideo = () => {
    setZaraVideoClass(prevClass => (prevClass === "hide" ? "" : "hide"));
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="slider-container">
      <div className='testimonial-slider-container'>
        <Slider {...settings}>

          <div className='testimonial-section'>
            <div className='testimonial-carousel'>
              <img src={review_stars} alt="Review Stars"/>
              <p>“Cristina at LogoLife is a very knowledgeable tutor with a unique ability to pay meticulous attention to details that can make a huge difference when applying to your dream school. Cristina was able to guide me through the process of constructing and elevating my college essay to a much higher standard. I strongly recommend Cristina to anyone who is serious about applying and getting accepted to highly competitive school/college.”</p>
              <h2>Kiran Desai</h2>
              <p className='subTitle'>UC Berkeley</p>
            </div>
          </div>

          <div className='testimonial-section'>
            <div className='testimonial-carousel video-carousel chloe'>
              <img
                className="video-play-icon"
                src={play_icon}
                alt="Play Icon"
                draggable={false}
                onClick={(e) => {
                  e.stopPropagation(); // Prevent the slider from reacting to the click
                  showVideoChloe(); // Toggle video visibility
                }}
              />
              <h2>Chloe Perez</h2>
              <p className='subTitle'>Stanford University</p>
              <img src={review_stars} alt="Review Stars" />
            </div>
          </div>

          <div className='testimonial-section'>
            <div className='testimonial-carousel'>
              <img src={review_stars} alt="Review Stars" />
              <p>“When I first started looking into college applications, I felt overwhelmed. LogoLife's College Counseling was recommended by a family friend, and from my first meeting with my counselor, I knew I was in capable hands. She took the time to understand my academic interests and extracurricular activities, and together, we crafted a personalized college list that truly reflected my aspirations and potential.”</p>
              <h2>Ishaan Verma</h2>
              <p className='subTitle'>MIT</p>
            </div>
          </div>

          <div className='testimonial-section'>
            <div className='testimonial-carousel video-carousel zara'>
              <img
                className="video-play-icon"
                src={play_icon}
                alt="Play Icon"
                draggable={false}
                onClick={(e) => {
                  e.stopPropagation(); // Prevent the slider from reacting to the click
                  showZaraVideo(); // Toggle video visibility
                }}
              />
              <h2>Columbia University</h2>
              <p className='subTitle'>UC Berkeley</p>
              <img src={review_stars} alt="Review Stars" />
            </div>
          </div>

          <div className='testimonial-section'>
            <div className='testimonial-carousel'>
              <img src={review_stars} alt="Review Stars" />
              <p>“AcceptedX was instrumental in my college application success. My counselor was not only knowledgeable about the intricacies of college admissions but also incredibly supportive. He provided a comprehensive roadmap from day one, outlining every step of the process. His advice was always spot-on, whether it was about how to ask for recommendation letters or preparing for alumni interviews.”</p>
              <h2>Ritka Sharma</h2>
              <p className='subTitle'>Caltech</p>
            </div>
          </div>

        </Slider>
      </div>

      {/* Display videos with separate classes for toggling */}
      <VideoPlayer src={chhloeVideo} className={chloeVideoClass} />  
      <VideoPlayer src={zaraVideo} className={zaraVideoClass} />         
    </div>
  );
}

export default TestimonialCarousel;
