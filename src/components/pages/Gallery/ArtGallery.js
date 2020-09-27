import './ArtGallery.scss';
import React from 'react';
import { Heading } from 'arwes';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-image-lightbox';
import photos from './images';


class ArtGallery extends React.Component {
  render() {
    return (
            <div className="ArtGallery">
                <Heading animate>
                    <h3>Gallery</h3>
                </Heading>
                <Gallery photos={photos} />
            </div>
    );
  }
}

export default ArtGallery;
