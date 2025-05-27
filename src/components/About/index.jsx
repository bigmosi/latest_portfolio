import React from "react";
import "./About.css";
import { whyChooseMe } from "../../sources";

const About = () => {
  return (
    <section id="about">
      <div className="wrapper">
        <div className="section">
          <h1 className="heading-1" data-aos="fade-left">
            <span className="gradient-text">About Me</span>
          </h1>
          <h4 className="sub-title muted">
            A results-driven Full Stack Web Developer with a
            passion for solving real-world problems through scalable software
            solutions. With hands-on experience in both frontend and backend
            technologies—including React, Next.js, Node.js, Ruby on Rails, and
            PostgreSQL—I specialize in building systems that are not only
            elegant and efficient, but also resilient in low-connectivity
            environments. My work spans sectors such as CRM, accounting,
            billing, HR, asset management, Rental Management System, Car hire app with successful software
            deployments across Uganda, South Sudan, and Ethiopia. I thrive in
            fast-paced environments where innovation, user-centric design, and
            seamless functionality intersect. Whether I’m integrating AI to
            automate workflows or deploying ERP systems using Docker, I bring a
            deep commitment to quality, collaboration, and continuous
            improvement.{" "}
          </h4>
        </div>
        <div className="group">
          {whyChooseMe.map((list, index) => (
            <div
              className="flex-center group-item"
              key={index}
              data-aos="fade-right"
            >
              <div className="flex-center icon-wrapper">{list.icon}</div>
              <h4 className="title">{list.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
