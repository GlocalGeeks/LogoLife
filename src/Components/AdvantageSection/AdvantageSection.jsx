import React, { useState } from 'react';
import "./AdvantageSection.css";
import mentorship from "../../assets/mentorship.svg";
import mentorshipHover from "../../assets/mentorship-hover.svg";
import internship from "../../assets/internship.svg";
import internshipHover from "../../assets/internship-hover.svg";
import codingimg from "../../assets/codingImg.svg";
import codingHover from "../../assets/coding-hover.svg";
import portfolio from "../../assets/tech.svg";
import portfolioHover from "../../assets/tech-hover.svg";
import buildWebsite from "../../assets/build-websites.svg";
import buildWebsiteHover from "../../assets/build-websites-hover.svg";
import personalizeCollege from "../../assets/personalize.svg";
import personalizeCollegeHover from "../../assets/personalize-hover.svg";

export const AdvantageSection = () => {
  const features = [
    {
      imgSrc: mentorship,
      imgHoverSrc: mentorshipHover,
      title: "1:1 Mentorship by Tech Professionals",
      description: "We offer 1:1 mentorship with tech industry professionals who guide and teach our students tech skills based on their ideal career path.",
    },
    {
      imgSrc: internship,
      imgHoverSrc: internshipHover,
      title: "Internships & Research",
      description: "Acquire internships at tech companies, providing real-world experience and valuable industry connections.",
    },
    {
      imgSrc: codingimg,
      imgHoverSrc: codingHover,
      title: "Tech Extracurriculars",
      description: "We encourage and prepare students to participate in hackathons, coding competitions, and other tech challenges.",
    },
    {
      imgSrc: portfolio,
      imgHoverSrc: portfolioHover,
      title: "Tech Portfolios",
      description: "Create standout tech portfolios that showcase your coding projects, design work, and innovative solutions.",
    },
    {
      imgSrc: buildWebsite,
      imgHoverSrc: buildWebsiteHover,
      title: "Build Personalized Websites",
      description: "We build custom websites for students to showcase their stories and achievements, enhancing their college applications with a digital portfolio.",
    },
    {
      imgSrc: personalizeCollege,
      imgHoverSrc: personalizeCollegeHover,
      title: "Personalized College Selection",
      description: "We help students identify the best tech programs that fit their goals and profile.",
    }
  ];

  return (
    <div className="advantage-section">
      <div className="features main-container">
        <div className="heading-container">
          <h2>The <span>AcceptedX</span> Advantage</h2>
          <p>
            At LogoLife, we specialize in preparing students for top tech programs. Our founders have
            15+ years of experience working in tech teams from Fortune 500 companies to venture-backed
            startups. We know exactly what it takes to break into tech as a software engineer, product
            designer, or product manager. We know how you can become the candidate who universities will
            beg to join their tech programs.
          </p>
        </div>

        <div className="features-container">
          {features.map((feature, index) => (
            <div
              key={index}
              className="single-feature"
              onMouseEnter={(e) => {
                const img = e.currentTarget.querySelector("img");
                img.src = feature.imgHoverSrc;
              }}
              onMouseLeave={(e) => {
                const img = e.currentTarget.querySelector("img");
                img.src = feature.imgSrc;
              }}
            >
              <img src={feature.imgSrc} alt={feature.title} />
              <h2>{feature.title}</h2>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdvantageSection;
