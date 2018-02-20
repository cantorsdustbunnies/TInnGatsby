import React, { Component } from 'react';
import MobilePage from '../MobilePage/mobilePage';
import DesktopPage from '../DesktopPage/DesktopPage';

class RenderPage extends Component {
  constructor(props) {
    super(props);
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

  render() {
    let isMobile = this.state.width <= 800;
    console.log('isMobile? = ', isMobile);
    console.log('width reported by state', this.state.width);
    if (isMobile) {
      return (
        <MobilePage
          tabColor={this.props.tabColor}
          title={this.props.title}
          className={this.props.className}
          mobileBackground={this.props.mobileBackground}
        >
          {this.props.children}
        </MobilePage>
      );
    } else {
      return (
        <DesktopPage className={this.props.className}>
          {this.props.children}
        </DesktopPage>
      );
    }
  }
}

export default RenderPage;
