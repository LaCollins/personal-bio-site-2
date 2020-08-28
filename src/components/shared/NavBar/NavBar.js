import './NavBar.scss';
import React from 'react';
import { Button, Header } from 'arwes';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  render() {
    return (
      <div className="NavBar">
        <nav className="container-fluid navbar">
          <div>
            <Header animate>
            <h1 style={{ margin: 0 }}>Laura E. Collins</h1>
            </Header>
            <div className="subtitle text-center">full-stack web developer</div>
          </div>
          <div className="row wrap" id="navLinks">
            <Link to="/" id="navToBio"><Button>Biography</Button></Link>
            <Link to="/technologies" id="navToTech"><Button>Technologies</Button></Link>
            <Link to="/projects" id="navToProjects"><Button>Projects</Button></Link>
            <Link to="/contact" id="navToProjects"><Button>Contact</Button></Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
