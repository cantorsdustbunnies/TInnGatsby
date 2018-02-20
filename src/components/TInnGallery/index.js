import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import styles from './TInnGallery.module.css';

export default class TInnGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: 0,
      lightboxIsOpen: false,
      size: null
    };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    this.setState({
      size: window.innerWidth
    });
  }

  openLightbox(e, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true
    });
  }

  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    });
  }

  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  }

  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  }

  renderGallery() {
    const { size } = this.state;
    const isMobile = size <= 800;
    if (isMobile) {
      return (
        <Gallery
          photos={this.props.images}
          onClick={this.openLightbox}
          columns={1}
        />
      );
    }
    return (
      <Gallery
        photos={this.props.images}
        onClick={this.openLightbox}
        columns={3}
      />
    );
  }

  render() {
    return (
      <div>
        {this.renderGallery()}
        <Lightbox
          images={this.props.images}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
      </div>
    );
  }
}
