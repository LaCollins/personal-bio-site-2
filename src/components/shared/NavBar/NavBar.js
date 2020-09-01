import './NavBar.scss';
import React from 'react';
import {
  Button, Header, Heading, Line, Row,
} from 'arwes';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  render() {
    return (
      <div className="NavBar">
        <Header animate show={this.props.anim.entered}>
        <nav className="container-fluid navbar">
          <div>
              <Heading animate show={this.props.anim.entered}>
                <h1>Laura E. Collins</h1>
              </Heading>
              <Line animate show={this.props.anim.entered}/>
              <Heading animate show={this.props.anim.entered}>
                <h5 className="subtitle text-center">full-stack web developer</h5>
              </Heading>
          </div>
          <Row className="row wrap mr-1" id="navLinks" col s={12}>
            <Link to="/" id="navToBio"><Button animate show={this.props.anim.entered} onClick={this.props.setShowBio}>Biography</Button></Link>
            <Link to="/technologies" id="navToTech"><Button animate show={this.props.anim.entered} onClick={this.props.setShowTech}>Technologies</Button></Link>
            <Link to="/projects" id="navToProjects"><Button animate show={this.props.anim.entered} onClick={this.props.setShowProj}>Projects</Button></Link>
            <Link to="/contact" id="navToProjects"><Button animate show={this.props.anim.entered}>Contact</Button></Link>
          </Row>
        </nav>
        </Header>
      </div>
    );
  }
}

export default NavBar;
