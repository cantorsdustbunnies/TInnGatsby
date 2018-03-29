import React, { Component } from 'react';

export default class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      googlePlaceID: 'ChIJKzFAbh2QaIcRSPMWeZca1kM'
    };
  }

  render() {
    return <div>This here be the reviews component</div>;
  }
}
