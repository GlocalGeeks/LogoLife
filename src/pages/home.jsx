import React from 'react'
import '../styles/fonts.css';
import Navbar from '../Components/Navbar/Navbar';
import Hero from '../Components/Hero/Hero';
import HeroFacts from '../Components/HeroFacts/HeroFacts';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LogoCarousel from '../Components/LogoCarousel/LogoCarousel';
import TestimonialSection from "../Components/TestimonialSection/TestimonialSection"
import AdvantageSection from '../Components/AdvantageSection/AdvantageSection';
import CalendlySection from "../Components/CalendlySection/CalendlySection"
import ExpertsSection from '../Components/ExpertsSection/ExpertsSection';
import TestingCarousel from '../Components/TestingCarousel/TestingCarousel';

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeroFacts />
      <LogoCarousel />
      <TestimonialSection />
      <ExpertsSection />
      <AdvantageSection />
      <CalendlySection />
      
    </div>
  )
}


export default Home;