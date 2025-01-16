import React from 'react'
import "./CalendlySection.css"
import check from "../../assets/check.png"
import CalendlyWidget from "../CalendlyWidget/CalendlyWidget"

export const CalendlySection = () => {
  return (
    <div className='calendly-section' id='calendly'>
        <div className='main-container calendly'> 
            <div className='calendly-heading-container'>
                <p className='subtitle'>Limited availability</p>
                <h2>Every Day Counts. Secure<br/>Your<span className="gradient2"> Child’s Future </span> Now</h2>
                <p className='calendly-paragraph'>Get personalized guidance to maximize your chances of admission <br></br> into top tech programs. Limited spots available!</p>
                <ul>
                    <li> <img src={check}/> 1:1 mentorship from industry experts</li>
                    <li> <img src={check}/> Tailored college selection strategies</li>
                    <li> <img src={check}/> Proven success with top tech program</li>
                </ul>
            </div>

            <div className='calendly-container'>
                <CalendlyWidget />
            </div>
        
        </div>
    </div>
  )
}


export default CalendlySection;