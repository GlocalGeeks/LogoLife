import React, { useState } from 'react'
import "./TechHero.css"
import hero_video_overlay from "../../assets/hero-video-overlay.png"
import play_icon from "../../assets/Play-Button.png"
import VideoPlayer from '../VideoPlayer/VideoPlayer'
import hero_section_video from "../../assets/hero-section-video.mp4"
import consultationBtn from "../../assets/Book-a-consultation.png"

export const TechHero = () => {

  const [videoClass, SetVideoClass] = useState("hide")

  const showVideo = () => {
    SetVideoClass((prevClass) => (prevClass === "hide" ? "" : "hide"));
  };

  return (

        <div className='main-container bg-color tech-program'>
          <section className='tech-hero-section '>
            <div className='tech-left-container'>
                <button className='tech-parent-btn'>Parents</button>
                <h1 className='tech-hero-heading'>98% Acceptance to Top<br/> <span className='tech-hero-gradient-h1'> Computer Science</span> and<br /> <span className='hero-gradient-h1'>Tech Programs</span> </h1>
                <a href="#calendly">
                  <img className="tech-consultation-btn" src={consultationBtn}/>
                </a>
            </div>
            <div className='tech-right-container'>
            <video
                className='tech-hero-video'
                src={hero_section_video}
                autoFocus
                autoPlay
                muted
                playsInline
                preload="metadata"
              />
              <img src={play_icon} className='tech-play-icon' onClick={showVideo}/>
              <VideoPlayer src= {hero_section_video} className= {videoClass}/>
              <a href="#calendly">
                <img className="tech-consultation-btn" src={consultationBtn}/>
                </a>
            </div>
            </section>

            <div className='tech-hero-facts'>

                <div className='tech-hero-facts-container'>
                    <div className='tech-fact-item'>
                        <h2>8X</h2>
                        <p>More one-on-one time with counselors</p>
                    </div>

                    <div className='tech-fact-item'>
                        <h2>98% </h2>
                        <p>Acceptance rate into top choice schools</p>
                    </div>

                    <div className='tech-fact-item'>
                        <h2>2X</h2>
                        <p>Larger scholarship award amounts</p>
                    </div>


                </div>

            </div>


            

        </div>
  )
}


export default TechHero;
