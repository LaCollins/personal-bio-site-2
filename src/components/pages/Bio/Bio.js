import './Bio.scss';
import React from 'react';
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
    <div className="Bio container">
      <div className="bioContents">
        <h2 className="title">C:\LC> About Me<span></span></h2>
        <h2 className="title2">About Me</h2>
        <div className="row d-flex myInfo m-0 col-m-6">
          <div className="imgContainer text-center">
            { this.state.imageClicked ? (<img src={MyImage2} className="MyPhoto" alt="Me" onClick={this.swapImage2} />) : (<img src={MyImage} className="MyPhoto" alt="Me" onClick={this.swapImage1} />) }
          </div>
          <div className="col">
            <div className="m-auto bioText text-justify">
              <p>Born on a farm in the middle of nowhere, Wisconsin, I spent the majority of my youth splitting my attention between the great outdoors, art, and computers. I wrote my first program, a simple text based adventure game, in Basic at the tender age of eight. It sparked a love for programming within me that never went away. In middle school I picked up HTML and built a multitude of websites on Geocities and by high school I was learning Visual Basic and C++.
              </p>
              <p>For whatever reason, I decided to set coding aside and persue art and Japanese langauge in college. I graduated from the University of Minnesota with a degree in Japanese Language and Literature right at the start of the second major economic crash of the early 2000's. As a result, work within my field was scarce and I ended up working a variety of unfulfilling jobs to pay the bills.</p>
              <p>I have recently rekindled my love of computer technology, and have decided that it is time that I follow that path. I love the problem solving and challenges that development provides me, as well as the joy of creating something that can be shared with the world. Development allows me to actively use both my creative and intellectual energies.</p>
            </div>
          </div>
        </div>
      </div>
  </div>
    );
  }
}

export default Bio;
