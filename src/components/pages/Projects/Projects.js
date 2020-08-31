import './Projects.scss';
import React from 'react';
import firebase from 'firebase/app';
import {
  Frame, Heading, Link, Words, Project,
} from 'arwes';
import 'firebase/auth';
import Carousel from 'react-bootstrap/Carousel';
import apiKeys from '../../../helpers/apiKeys.json';
import projectData from '../../../helpers/data/projectData';

firebase.initializeApp(apiKeys.firebaseKeys);

class Projects extends React.Component {
  state = {
    projects: [],
  }

  getProjects = () => projectData.getProjectData()
    .then((response) => {
      this.setState({ projects: response });
    })
    .catch((error) => console.error(error, 'error from get project data'));

  componentDidMount() {
    this.getProjects();
  }

  render() {
    return (
    <div className="Projects container" style={{ display: 'inline-block', padding: '30px' }}>
      <Frame animate level={3} corners={8} layer='primary' show={this.props.anim.entered}>
      <div className="projectContents">
        <Heading animate show={this.props.anim.entered}>
          <h2 className="title">Projects</h2>
        </Heading>
        <div className="projectInfo">
          <h4>
            <Words animate show={this.props.anim.entered}>
              A few of the projects I have worked on.
            </Words>
          </h4>
        </div>
        <Carousel>
        {this.state.projects.map((project) => (
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={project.screenshot}
              alt={project.title}
            />
              <Carousel.Caption>
                <div className="carouselInfo">
                <Project
                  animate
                  header={project.title}
                  >
                  {(anim) => (
                    <div>
                    <p>
                    <Words animate show={anim.entered} className="m-2 description">{project.description}</Words>
                    </p>
                      <div className="row justify-content-around">
                        <Link href={project.url} target="_blank" rel="noopener noreferrer">View Live</Link>
                        <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="mb-2"><i className="fab fa-github" alt="Github"></i> Github</Link>
                      </div>
                    </div>
                  )}
                  </Project>
                </div>
              </Carousel.Caption>
          </Carousel.Item>
        ))}
        </Carousel>
      </div>
      </Frame>
    </div>
    );
  }
}

export default Projects;
