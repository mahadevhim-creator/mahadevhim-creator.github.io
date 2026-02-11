import React from 'react';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <p>
          Hi, I'm <strong>Keshav</strong>, a passionate video editor with 3+ months of hands-on experience creating engaging content for social media and YouTube.
        </p>
        <p>
          I focus on clean cuts, smooth transitions, and visually appealing edits that match current trends and keep viewers engaged. I'm constantly learning and improving my skills to deliver better quality with every project.
        </p>
        <h3>Software I use:</h3>
        <ul className="software-list">
          <li>Adobe Premiere Pro</li>
          <li>After Effects</li>
          <li>DaVinci Resolve</li>
        </ul>
      </div>
    </section>
  );
}

export default About;