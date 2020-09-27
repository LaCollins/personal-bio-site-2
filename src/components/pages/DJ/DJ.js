import './DJ.scss';
import React from 'react';
import { Heading, Words } from 'arwes';


class DJ extends React.Component {
  render() {
    return (
            <div className="DJ">
                <Heading>
                    <h3>Playlists</h3>
                </Heading>
                <p>
                  <Words animate>Coming Soon...</Words>
                </p>
            </div>
    );
  }
}

export default DJ;
