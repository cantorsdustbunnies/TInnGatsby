import React, { Component } from 'react';
import Img from 'gatsby-image';

imgWithClick = { cursor: 'pointer' };

class PhotoComponent extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const { onClick, index, photo } = this.props;
    onClick(e, { photo, index });
  }

  render() {
    const { sizes, onClick, margin } = this.props;
    const imgStyle = {
      display: 'block',
      float: 'left',
      margin
    };
    return (
      <Img
        style={onClick ? { ...imgStyle, ...imgWithClick } : imgStyle}
        {...sizes}
        onClick={onClick ? this.handleClick : null}
      />
    );
  }
}

export default PhotoComponent;
