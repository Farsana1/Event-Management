import React from 'react';
import './About.css'; // Make sure to create this CSS file

const About = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <h2>About Our Event Management</h2>
        <p>
          Welcome to our Event Management! We specialize in creating memorable
          experiences for all your special occasions. Whether it's a wedding,
          birthday, housewarming, or corporate event, our dedicated team is here
          to handle every detail with care and precision.
        </p>
        <p>
          Our mission is to provide exceptional service and ensure your event
          runs smoothly from start to finish. We pride ourselves on our attention
          to detail and commitment to customer satisfaction.
        </p>
      </div>
      <div className="about-image">
        <img src={AboutImg} alt="Event Management" />
      </div>
    </section>
  );
};

export default About;
