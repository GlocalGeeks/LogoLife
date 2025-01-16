import React from 'react'
import "./TestimonialSection.css"
import TestimonialCarousel from '../TestimonialCarousel/TestimonialCarousel';


export const TestimonialSection = () => {
  return (
        <section className='testimonials-secttion'>
            <div className='top-container main-container'>
                <p className='testimonial-paragraph'>Testimonials</p>
                <h1>Hear From Students Who Made It<br/>To Their <span>Dream Schools</span></h1>
            </div>
            <div>
              <TestimonialCarousel />
              
            </div>
            <div className='bottom-container'><a href="#calendly">
                  <button type="button" className="consultation-btn">Get Started</button>
            </a></div>
            
        </section>

  )
}


export default TestimonialSection;