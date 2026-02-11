import React from 'react';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contact Me</h2>
        <p>Let's work together and create something amazing!</p>
        <div className="contact-info">
          <div className="contact-item">
            <h3>📧 Email</h3>
            <a href="mailto:sudankeshav30@gmail.com">sudankeshav30@gmail.com</a>
          </div>
          <div className="contact-item">
            <h3>💼 LinkedIn</h3>
            <a href="https://www.linkedin.com/in/keshav" target="_blank" rel="noopener noreferrer">linkedin.com/in/keshav</a>
          </div>
          <div className="contact-item">
            <h3>📸 Instagram</h3>
            <a href="https://www.instagram.com/keshvv_/" target="_blank" rel="noopener noreferrer">@keshvv_</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;