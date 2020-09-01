import './Contact.scss';
import React from 'react';
import {
  Frame, Link, Heading, Words,
} from 'arwes';

class Contact extends React.Component {
  render() {
    return (
      <div className="Contact container">
        <Frame animate level={3} corners={8} layer='primary' show={this.props.anim.entered} style={{ marginBottom: '5em' }}>
          <div className="contactContents">
          <Heading animate show={this.props.anim.entered}>
            <h2 className="title">Contact</h2>
          </Heading>
            <div className="contactInfo">
              <h4>
                <Words animate show={this.props.anim.entered}>
                  A few different places you can get in touch with me.
                </Words>
                </h4>
              <div className="contactLinks">
                <Link href="mailto:laura.e.collins1@gmail.com" className="email m-3">e-mail</Link>
                <Link href="https://www.linkedin.com/in/laura-e-collins/" target="_blank" rel="noopener noreferrer" className="m-3"><i class="fab fa-linkedin" alt="linkedin"></i></Link>
                <Link href="https://github.com/LaCollins" target="_blank" rel="noopener noreferrer" className="m-3"><i class="fab fa-github fa-2x"></i></Link>
                <Link href="https://www.facebook.com/DawnZerlyDesigns/" target="_blank" rel="noopener noreferrer" className="m-3"><i class="fab fa-facebook fa-2x"></i></Link>
                <Link href="https://www.deviantart.com/mrinx" target="_blank" rel="noopener noreferrer" className="m-3"><i class="fab fa-deviantart fa-2x" alt="DeviantArt"></i></Link>
              </div>
            </div>
          </div>
        </Frame>
      </div>
    );
  }
}

export default Contact;
