import React from 'react';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 data-aos="fade-up">About Me</h2>
        <p data-aos="fade-up" data-aos-delay="100">
          Hi, I'm <strong>Keshav</strong>, a passionate video editor with 3+ months of hands-on experience creating engaging content for social media and YouTube.
        </p>
        <p data-aos="fade-up" data-aos-delay="200">
          I focus on clean cuts, smooth transitions, and visually appealing edits that match current trends and keep viewers engaged. I'm constantly learning and improving my skills to deliver better quality with every project.
        </p>
        <h3 data-aos="fade-up" data-aos-delay="300">Software I use:</h3>
        <ul className="software-list">
          <li data-aos="zoom-in" data-aos-delay="400">Adobe Premiere Pro</li>
          <li data-aos="zoom-in" data-aos-delay="500">After Effects</li>
          <li data-aos="zoom-in" data-aos-delay="600">DaVinci Resolve</li>
        </ul>
      </div>
    </section>
  );
}

export default About;