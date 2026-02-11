import React from 'react';

function Work() {
  const videos = [
    {
      title: "Sample Video 1",
      url: "https://youtu.be/gN-1bLB3nN4?si=vtG-50ynbewM4wR_",
      embedUrl: "https://www.youtube.com/embed/gN-1bLB3nN4",
      description: "Project Type: YouTube Short | Editing: Cuts, transitions, color grading, sound sync"
    },
    {
      title: "Sample Video 2",
      url: "https://youtu.be/PycecYFhKQY?si=mxGp5K9n6Qj52iGV",
      embedUrl: "https://www.youtube.com/embed/PycecYFhKQY",
      description: "Project Type: Instagram Reel | Editing: Fast-paced cuts, text animations, trending audio"
    }
  ];

  return (
    <section id="work" className="work">
      <div className="container">
        <h2 data-aos="fade-up">My Work</h2>
        <div className="work-grid">
          {videos.map((video, index) => (
            <div 
              key={index} 
              className="work-card"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <div className="video-wrapper">
                <iframe
                  src={video.embedUrl}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
              <h3>{video.title}</h3>
              <p>{video.description}</p>
              <a href={video.url} target="_blank" rel="noopener noreferrer" className="btn-link">Watch Full Video →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;