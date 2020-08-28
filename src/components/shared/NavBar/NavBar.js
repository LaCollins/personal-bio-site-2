import './NavBar.scss';
import React from 'react';
import {
  Button, Header, Heading, Line,
} from 'arwes';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  render() {
    return (
      <div className="NavBar">
        <Header animate>
        <nav className="container-fluid navbar">
          <div>
              <Heading animate>
                <h1>Laura E. Collins</h1>
              </Heading>
              <Line animate />
              <Heading animate>
                <h5 className="subtitle text-center">full-stack web developer</h5>
              </Heading>
          </div>
          <div className="row wrap mr-3" id="navLinks">
            <Link to="/" id="navToBio"><Button animate>Biography</Button></Link>
            <Link to="/technologies" id="navToTech"><Button animate>Technologies</Button></Link>
            <Link to="/projects" id="navToProjects"><Button animate>Projects</Button></Link>
            <Link to="/contact" id="navToProjects"><Button animate>Contact</Button></Link>
          </div>
        </nav>
        </Header>
      </div>
    );
  }
}

export default NavBar;
