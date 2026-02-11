import React from 'react';

function Services() {
  const services = [
    "YouTube Video Editing",
    "Instagram Reels / Shorts Editing",
    "Basic Motion Graphics & Text Animations",
    "Color Correction & Color Grading",
    "Audio Sync & Background Music",
    "Fast-paced Social Media Edits"
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2>My Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3>{service}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;