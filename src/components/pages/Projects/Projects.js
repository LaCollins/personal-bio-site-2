import './Projects.scss';
import React from 'react';
import firebase from 'firebase/app';
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
    <div className="Projects container">
      <div className="projectContents">
        <h2>Projects</h2>
        <div className="projectInfo">
          <h4>A few of the projects I have worked on.</h4>
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
                <h3>{project.title}</h3>
                <p className="m-2">{project.description}</p>
                <div className="row justify-content-around">
                  <a href={project.url} target="_blank" rel="noopener noreferrer">View Live</a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="mb-2"><i className="fab fa-github" alt="Github"></i> Github</a>
                </div>
                </div>
              </Carousel.Caption>
          </Carousel.Item>
        ))}
        </Carousel>
      </div>
    </div>
    );
  }
}

export default Projects;
