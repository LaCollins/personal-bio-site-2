import './DJ.scss';
import React from 'react';
import { Heading } from 'arwes';


class DJ extends React.Component {
  render() {
    return (
            <div className="DJ">
                <Heading>
                    <h3>Playlists</h3>
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
