import React, { Component } from 'react';
import styled from 'styled-components';
import Link, { navigateTo } from 'gatsby-link';
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

  handleNavigation(path) {
    navigateTo(path);
    this.toggleMenu();
  }

  renderButton() {
    if (this.state.open) {
      return <FaClose width={50} height={50} />;
    } else {
      return <FaBars width={50} height={50} />;
    }
  }

  renderMenu() {
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
            role="link"
            tabIndex="0"
          >
            <li> Gallery </li>
            <div>
              <FaChevronRight />
            </div>
          </div>
          <div
            style={{ backgroundColor: '#9b59b6' }}
            onClick={() => this.handleNavigation('/rooms')}
            role="link"
            tabIndex="0"
          >
            <li> Rooms </li>
            <div>
              <FaChevronRight />
            </div>
          </div>
          <div
            style={{ backgroundColor: '#d6b375' }}
            onClick={() => this.handleNavigation('/reviews')}
            role="link"
            tabIndex="0"
          >
            <li>Reviews</li>
            <div>
              <FaChevronRight />
            </div>
          </div>
          <div
            style={{ backgroundColor: '#29bb43' }}
            onClick={() => this.handleNavigation('/contact')}
            role="link"
            tabIndex="0"
          >
            <li>Contact</li>
            <div>
              <FaChevronRight />
            </div>
          </div>
          <div
            style={{ backgroundColor: '#f44336' }}
            onClick={() => this.handleNavigation('/area-guide')}
            role="link"
            tabIndex="0"
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

  render() {
    return (
      <nav className={styles.menu}>
        {this.renderMenu()}
        <MenuButtonBackground>
          <MenuButton onClick={() => this.toggleMenu()}>
            {this.renderButton()}
          </MenuButton>
        </MenuButtonBackground>
        <Link to="/" className={styles.logo}>
          <img src={Logo} className={styles.logo} alt="Travel Inn Logo" />
        </Link>
        <BookingButton>
          <a style={{color: '#eceff1'}} href="https://www.expedia.com/Laramie-Hotels-Travel-Inn.h8038204.Hotel-Information"> 
          Book Now 
          </a> 
        </BookingButton>
      </nav>
    );
  }
}

//Use in place of current Booking Button when we move over to in-house 
// <BookingButton onClick={() => this.handleNavigation('/book-now')}>
// Book Now
// </BookingButton>


export default MobileNav;
