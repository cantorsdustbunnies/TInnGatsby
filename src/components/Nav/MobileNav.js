import React, { Component } from 'react';
import styled from 'styled-components';
import { navigateTo } from 'gatsby-link';
import Logo from '../../images/Logo.svg';
import styles from './MobileNav.module.css';
import { FaBars, FaClose, FaChevronRight } from 'react-icons/lib/fa';
import '../../layouts/index.css';

const BookingButton = styled.div`
  border: none;
  outline: none;
  background-color: #f44336;
  height: 60px;
  display: flex;
  clip-path: polygon(10% 0, 100% 0, 100% 100%, 0 100%);
  flex: 1.1;
  color: #fcfff1;
  justify-content: center;
  align-items: center;
`;

const MenuButton = styled.button`
  display: flex;

  justify-content: center;

  background-color: #fff;
  height: 58px;
  flex: 0.995;
  clip-path: polygon(0 0, 100% 0, 90% 100%, 0 100%);
  border: none;
  outline: none;
  &:hover {
    background-color: #eceff1;
    height: 60px;
    flex: 1;
  }
`;

const MenuButtonBackground = styled.div`
  width: 200px;
  display: flex;
  flex: 1;
  height: 60px;

  align-items: center;
  background-color: #6f6a54;
  clip-path: polygon(0 0, 100% 0, 90% 100%, 0 100%);
`;

class MobileNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  componentDidMount() {
    return () => this.renderMenu();
  }

  componentDidUnMount() {
    document.getElementById('main').style.marginLeft = '0';
  }

  toggleMenu() {
    this.setState({
      open: !this.state.open
    });
  }

  renderButton() {
    if (this.state.open) {
      return <FaClose width={50} height={50} />;
    } else {
      return <FaBars width={50} height={50} />;
    }
  }

  renderMenu(divs) {
    let toggle = styles.menuClosed;
    if (typeof document !== 'undefined') {
      if (document.getElementById('main')) {
        if (this.state.open) {
          document.getElementById('main').style.marginLeft = '80vw';
          toggle = styles.menuOpen;
        } else {
          toggle = styles.menuClosed;
          document.getElementById('main').style.marginLeft = '0';
        }
      }
    }
    return (
      <div className={toggle}>
        <ul className={styles.menuLinks}>
          <div
            style={{ backgroundColor: '#238795' }}
            onClick={() => this.handleNavigation('/photos')}
          >
            <li> Gallery </li>
            <div>
              <FaChevronRight />
            </div>
          </div>
          <div
            style={{ backgroundColor: '#9b59b6' }}
            onClick={() => this.handleNavigation('/rooms')}
          >
            <li> Rooms </li>
            <div>
              <FaChevronRight />
            </div>
          </div>
          <div
            style={{ backgroundColor: '#d6b375' }}
            onClick={() => this.handleNavigation('/amenities')}
          >
            <li>Amenities</li>
            <div>
              <FaChevronRight />
            </div>
          </div>
          <div
            style={{ backgroundColor: '#29bb43' }}
            onClick={() => this.handleNavigation('/contact')}
          >
            <li>Contact</li>
            <div>
              <FaChevronRight />
            </div>
          </div>
          <div
            style={{ backgroundColor: '#f44336' }}
            onClick={() => this.handleNavigation('/area-guide')}
          >
            <li>Area Guide</li>
            <div>
              <FaChevronRight />
            </div>
          </div>
        </ul>
      </div>
    );
  }

  handleNavigation(path) {
    navigateTo(path);
    this.toggleMenu();
  }

  render() {
    return (
      <nav className={styles.menu}>
        {this.renderMenu()}
          <MenuButtonBackground>
          <MenuButton onClick={() => this.toggleMenu()}>
            {this.renderButton()}
          </MenuButton>
        </MenuButtonBackground>
        <img src={Logo} className={styles.logo} />
        <BookingButton onClick={() => this.handleNavigation('/book-now')}>
          Book Now
        </BookingButton>
      </nav>
    );
  }
}
export default MobileNav;
