import './DJ.scss';
import React from 'react';
import { Heading, Words } from 'arwes';


class DJ extends React.Component {
  render() {
    return (
            <div className="DJ">
                <Heading>
                    <h3>Music</h3>
                </Heading>
                <Heading>
                    <h4>My Compositions</h4>
                </Heading>
                <Words animate className="mt-3">
                  Simple Peace
                </Words>
                  <iframe title="simple peace"
                  width="100%"
                  height="300"
                  scrolling="no"
                  frameborder="no"
                  allow="autoplay"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/80201403&color=%2300bfff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
                  </iframe>
                  <div className="soundCloudTantalizer"><a href="https://soundcloud.com/cube_of_squish"
                  title="Laura Collins"
                  target="_blank" rel="noopener noreferrer" className="tantalizerLink">Laura Collins</a> · <a href="https://soundcloud.com/cube_of_squish/cube-of-squish-simple-peace" title="Cube of Squish- Simple Peace" rel="noopener noreferrer" className="tantalizerLink">Cube of Squish- Simple Peace</a></div>
                <Words animate className="mt-3">
                  Tantalizer
                </Words>
                  <iframe title="Tantalizer"
                  width="100%" height="300"
                  scrolling="no" frameborder="no"
                  allow="autoplay"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/79340282&color=%2300bfff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
                  </iframe>
                  <div className="soundCloudTantalizer"><a href="https://soundcloud.com/cube_of_squish"
                  title="Laura Collins"
                  target="_blank" rel="noopener noreferrer" className="tantalizerLink">Laura Collins</a> · <a href="https://soundcloud.com/cube_of_squish/cube-of-squish-tantalizer" title="Cube of Squish - Tantalizer" target="_blank" rel="noopener noreferrer" className="tantalizerLink">Cube of Squish - Tantalizer</a></div>
                <Words animate className="mt-3">
                  Man is to Blame
                </Words>
                  <iframe title="Man is to Blame"
                  width="100%"
                  height="300"
                  scrolling="no"
                  frameborder="no"
                  allow="autoplay"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/80130419&color=%2300bfff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
                  </iframe>
                  <div className="soundCloudTantalizer"><a href="https://soundcloud.com/cube_of_squish"
                  title="Laura Collins"
                  target="_blank" rel="noopener noreferrer" className="tantalizerLink">Laura Collins</a> · <a href="https://soundcloud.com/cube_of_squish/cube-of-squish-man-is-to-blame" title="Cube of Squish - Man Is To Blame" target="_blank" rel="noopener noreferrer" className="tantalizerLink">Cube of Squish - Man Is To Blame</a></div>
                <Heading className="mt-5">
                    <h4>Spotify Playlists</h4>
                </Heading>
                <div className="row-wrap justify-content-between">
                <iframe title="cyberpunk" src="https://open.spotify.com/embed/playlist/0J807oN5jQ49TO6m8oGhe7"
                className="m-2" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                <iframe title="industrial" src="https://open.spotify.com/embed/playlist/6CsI3RshTXhUjUFTeYG88F"
                width="300" height="380"
                frameborder="0" allowtransparency="true" allow="encrypted-media"
                className="m-2"></iframe>
                <iframe title="bloody-valentine" src="https://open.spotify.com/embed/playlist/6xcd43d8lps37MaU0fmx2I"
                width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media" className="m-2"></iframe>
                <iframe title="september-steam" src="https://open.spotify.com/embed/playlist/7HR478AaGpH9wpbvLEVKz4" width="300"
                className="m-2" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                <iframe title="pirates" src="https://open.spotify.com/embed/playlist/054Nq5UJvZMz446OBvUIdD" width="300"
                className="m-2" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                </div>
            </div>
    );
  }
}

export default DJ;
