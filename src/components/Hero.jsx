import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Event Management Hub</h1>
        <p className="hero-subtitle">Efficient, Effective, Event Management</p>
        <button className="hero-button" >Get Started</button>
      </div>
    </section>
  );
};

export default Hero;
