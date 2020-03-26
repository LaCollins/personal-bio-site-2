import './Contact.scss';
import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <div className="Contact container">
        <div className="contactContents">
          <h2>Contact</h2>
          <div className="contactInfo">
            <h4>A few different places you can get in touch with me.</h4>
            <div className="contactLinks">
              <a href="mailto:laura.e.collins1@gmail.com" className="email m-3">e-mail</a>
              <a href="https://www.linkedin.com/in/laura-e-collins/" target="_blank" rel="noopener noreferrer" className="m-3"><i class="fab fa-linkedin" alt="linkedin"></i></a>
              <a href="https://github.com/LaCollins" target="_blank" rel="noopener noreferrer" className="m-3"><i class="fab fa-github fa-2x"></i></a>
              <a href="https://www.facebook.com/DawnZerlyDesigns/" target="_blank" rel="noopener noreferrer" className="m-3"><i class="fab fa-facebook fa-2x"></i></a>
              <a href="https://www.deviantart.com/mrinx" target="_blank" rel="noopener noreferrer" className="m-3"><i class="fab fa-deviantart fa-2x" alt="DeviantArt"></i></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
