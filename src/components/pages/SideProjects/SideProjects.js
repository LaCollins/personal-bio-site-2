import './SideProjects.scss';
import React from 'react';
import {
  Button, Frame, Words, Header, Heading,
} from 'arwes';
import Gallery from '../Gallery/ArtGallery';
import DJ from '../DJ/DJ';

class SideProjects extends React.Component {
    state = {
      showGallery: false,
      showDJ: false,
      showFrame: false,
    }

    setShowGallery = () => {
      this.setState({ showGallery: true });
      this.setState({ showDJ: false });
      this.setState({ showFrame: true });
    }

    setShowDJ = () => {
      this.setState({ showDJ: true });
      this.setState({ showGallery: false });
      this.setState({ showFrame: true });
    }

    render() {
      const { showGallery, showDJ } = this.state;
      return (
            <div className="SideProjects">
                <Header animate style={{ marginBottom: '10px' }}>
                    <Heading animate anim={this.props.anim.entered}>
                        <h3>Side Projects</h3>
                    </Heading>
                </Header>
                <p>
                    <Words animate anim={this.props.anim.entered}>
                        When I am not spending my time working on code, I also keep myself busy with art and music.
                        Here you can view a gallery of some of my artwork or listen to some of my DJ playlists.
                    </Words>
                </p>
                <Button animate show={this.props.anim.entered} style={{ margin: '10px' }} onClick={this.setShowGallery}>Gallery</Button>
                <Button animate show={this.props.anim.entered} style={{ margin: '10px' }} onClick={this.setShowDJ}>DJ Playlists</Button>
                <Frame animate level={3} corners={8} layer='primary' show={this.state.showFrame} style={{ marginBottom: '5em' }}>
                    {showGallery ? (<Gallery />)
                      : ('') }
                    {showDJ ? (<DJ />)
                      : ('') }
                </Frame>
            </div>
      );
    }
}

export default SideProjects;
