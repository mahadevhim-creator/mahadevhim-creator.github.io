import React from 'react';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 
          data-aos="zoom-in" 
          data-aos-duration="1200"
        >
          Keshav
        </h1>
        
        <h2 
          data-aos="fade-up" 
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          Video Editor | Social Media & YouTube Editing
        </h2>
        
        <p 
          data-aos="fade-up" 
          data-aos-delay="500"
          data-aos-duration="1000"
        >
          I transform raw footage into engaging, high-quality videos that capture attention and keep viewers watching.
        </p>
        
        <div 
          className="hero-stats"
          data-aos="fade-up" 
          data-aos-delay="700"
        >
          <p data-aos="fade-right" data-aos-delay="900">
            <strong>Experience:</strong> 3+ Months
          </p>
          <p data-aos="fade-left" data-aos-delay="1000">
            <strong>Tools:</strong> After Effects | Premiere Pro | DaVinci Resolve
          </p>
        </div>
        
        <div 
          className="hero-buttons"
          data-aos="zoom-in" 
          data-aos-delay="1200"
          data-aos-duration="800"
        >
          <a href="#work" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-secondary">Contact Me</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;