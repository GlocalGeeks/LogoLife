import React from 'react'
import review_logo from "../../assets/review_logo.svg"
import "./TechHeroLogo.css"

export const TechHeroLogo = () => {
  return (
    <div className='tech-logo-container'>

      <div className='tech-logo-item'>
          <img src={review_logo} />

      </div>

    </div>
  )
}


export default TechHeroLogo;