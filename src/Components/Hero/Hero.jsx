import React, { useState } from 'react'
import "./Hero.css"
import hero_video_overlay from "../../assets/hero-video-overlay.png"
import play_icon from "../../assets/Play-Button.png"
import review_logo from "../../assets/review-logo.png"
import VideoPlayer from '../VideoPlayer/VideoPlayer'
import hero_section_video from "../../assets/hero-section-video.mp4"

export const Hero = () => {

  const [videoClass, SetVideoClass] = useState("hide")

  const showVideo = () => {
    SetVideoClass((prevClass) => (prevClass === "hide" ? "" : "hide"));
  };

  return (

        <div className='main-container dark-color'>
          <section className='hero-section '>
            <div className='left-container'>
                <button className='parent-btn'>Parents</button>
                <h1 className='hero-heading'>98% Acceptance to Top<br/> <span className='hero-gradient-h1'> Computer Science</span> and<br /> <span className='hero-gradient-h1'>Tech Programs</span> </h1>
                <img className='review-logo' src={review_logo}></img>
                <a href="#calendly">
                  <button type="button" className="consultation-btn">Book Consultation</button>
                </a>
            </div>
            <div className='right-container'>
              <video
                className='tech-hero-video'
                src={hero_section_video}
                autoFocus
                autoPlay
                muted
                playsInline
                preload="metadata"
              />
              <img src={play_icon} className='play-icon' onClick={showVideo}/>
              <VideoPlayer src= {hero_section_video} className= {videoClass}/>
              <a href="#calendly">
                  <button type="button" className="consultation-btn">Book Consultation</button>
                </a>
            </div>
        </section>
        </div>
  )
}


export default Hero;
