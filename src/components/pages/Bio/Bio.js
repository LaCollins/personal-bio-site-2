import './Bio.scss';
import React from 'react';
import {
  Frame, Row, Heading, Appear, Words,
} from 'arwes';
import MyImage from './images/myphoto.jpg';
import MyImage2 from './images/myphoto2.jpg';

class Bio extends React.Component {
  state = {
    imageClicked: false,
  }

  swapImage1 = () => {
    this.setState({ imageClicked: true });
  }

  swapImage2 = () => {
    this.setState({ imageClicked: false });
  }

  render() {
    return (
    <div className="Bio">
      <Frame animate level={3} corners={8} layer='primary' show={this.props.anim.entered} style={{ marginBottom: '5em' }}>
        <div className="bioContents">
          <Heading animate show={this.props.anim.entered}>
            <h2 className="title">About Me</h2>
          </Heading>
          <Row className="row d-flex myInfo m-0 col-m-6">
            <Appear show={this.props.anim.entered}>
              <div className="imgContainer text-center">
                { this.state.imageClicked ? (<img src={MyImage2} className="MyPhoto" alt="Me" onClick={this.swapImage2} />) : (<img src={MyImage} className="MyPhoto" alt="Me" onClick={this.swapImage1} />) }
              </div>
            </Appear>
            <div className="col">
              <div className="m-auto bioText text-justify">
                <p>
                  <Words animate show={this.props.anim.entered}>
                  Born on a farm in the middle of nowhere, Wisconsin, I spent the majority of my youth splitting my attention between the great outdoors, art, and computers. I wrote my first program, a simple text based adventure game, in Basic at the tender age of eight. It sparked a love for programming within me that never went away. In middle school I picked up HTML and built a multitude of websites on Geocities and by high school I was learning Visual Basic and C++.
                  </Words>
                </p>
                <p>
                  <Words animate show={this.props.anim.entered}>
                  For whatever reason, I decided to set coding aside and persue art and Japanese langauge in college. I graduated from the University of Minnesota with a degree in Japanese Language and Literature right at the start of the second major economic crash of the early 2000's. As a result, work within my field was scarce and I ended up working a variety of unfulfilling jobs to pay the bills.
                  </Words>
                </p>
                <p>
                <Words animate show={this.props.anim.entered}>
                  I have recently rekindled my love of computer technology, and have decided that it is time that I follow that path. I love the problem solving and challenges that development provides me, as well as the joy of creating something that can be shared with the world. Development allows me to actively use both my creative and intellectual energies.
                </Words>
                </p>
              </div>
            </div>
          </Row>
        </div>
        </Frame>
  </div>
    );
  }
}

export default Bio;
