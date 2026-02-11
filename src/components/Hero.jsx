import React from 'react';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Keshav</h1>
        <h2>Video Editor | Social Media & YouTube Editing</h2>
        <p>I transform raw footage into engaging, high-quality videos that capture attention and keep viewers watching.</p>
        <div className="hero-stats">
          <p><strong>Experience:</strong> 3+ Months</p>
          <p><strong>Tools:</strong> After Effects | Premiere Pro | DaVinci Resolve</p>
        </div>
        <div className="hero-buttons">
          <a href="#work" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-secondary">Contact Me</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;