import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import MobileNav from '../Nav/MobileNav';

export default class Header extends Component {
  constructor(props) {
    super(props);
    // Don't reference window on server
    this.state = {
      width: null
    };
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
      width: window.innerWidth
    });
  }

  renderNav(links) {
    const { width } = this.state;
    const isMobile = width <= 800;
    if (isMobile) {
      return <MobileNav />;
    }
    return <Nav links={links} />;
  }

  render() {
    return this.renderNav(this.props.links);
  }
}
