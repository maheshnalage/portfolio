import React from 'react';

function Contact() {
  return (
    <div className="contact container">
      <h1>Contact Me</h1>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
      </form>
      <div className="contact-links">
        <p>Email: <a href="mailto:maheshnalage@example.com">maheshnalage@example.com</a></p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/maheshnalage"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/maheshnalage
          </a>
        </p>
        <a href="/resume.pdf" download className="resume-download">
          Download Resume
        </a>
      </div>
    </div>
  );
}

export default Contact;
