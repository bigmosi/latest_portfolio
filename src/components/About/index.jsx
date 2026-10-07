import React from "react";
import "./About.css";
import { whyChooseMe } from "../../sources";

const About = () => {
  return (
    <section id="about">
      <div className="wrapper">
        <div className="section-header">
          <h1 className="heading-1" data-aos="fade-up">
            <span className="gradient-text">About Me</span>
          </h1>
          <p className="sub-title muted" data-aos="fade-up">
            I'm a full stack developer with six years of experience shipping
            web and mobile apps. I work across the stack — React, TypeScript
            and the TanStack ecosystem on the frontend; Node.js, Express, NestJS
            and PostgreSQL on the backend; Flutter and React Native for mobile.
          </p>
          <p className="sub-title muted" data-aos="fade-up">
            I've built NGO platforms, food-delivery marketplaces, property
            management systems, enterprise ERPs and civic tech apps — running
            at water utilities in Nigeria, Ethiopia and South Sudan, with field
            teams across Uganda, Rwanda, DRC and Tanzania, and on the App Store
            and Play Store. I care about writing code other developers can read
            and extend without headaches.
          </p>
        </div>
        <div className="group">
          {whyChooseMe.map((list, index) => (
            <div
              className="flex-center group-item"
              key={index}
              data-aos="fade-up"
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
