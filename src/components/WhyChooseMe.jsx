import React from 'react';

function WhyChooseMe() {
  const reasons = [
    "Fast delivery",
    "Trend-based editing style",
    "Attention to detail",
    "Quick response & clear communication",
    "Dedicated to improving every project"
  ];

  return (
    <section className="why-choose">
      <div className="container">
        <h2 data-aos="fade-up">Why Choose Me</h2>
        <ul className="reasons-list">
          {reasons.map((reason, index) => (
            <li 
              key={index}
              data-aos="fade-right"
              data-aos-delay={index * 100}
            >
              ✓ {reason}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default WhyChooseMe;