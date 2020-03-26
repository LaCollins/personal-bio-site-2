import './NavBar.scss';
import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  render() {
    return (
      <div className="NavBar">
        <nav className="container-fluid navbar">
          <div>
            <div className="text-center" id="myName">Laura E. Collins</div>
            <div className="subtitle text-center">full-stack web developer</div>
          </div>
          <div className="row wrap" id="navLinks">
            <Link to="/" type="button" className="btn btn-dark" id="navToBio">Biography</Link>
            <Link to="/technologies" type="button" className="btn btn-dark" id="navToTech">Technologies</Link>
            <Link to="/projects" type="button" className="btn btn-dark" id="navToProjects">Projects</Link>
            <Link to="/contact" type="button" className="btn btn-dark" id="navToProjects">Contact</Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
