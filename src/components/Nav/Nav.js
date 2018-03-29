import React, { Component } from 'react';
import Link from 'gatsby-link';
import styles from './Nav.module.css';
import Logo from '../../images/Logo.svg';

class Nav extends Component {
  componentDidMount() {
    document.getElementById('main').style.marginLeft = '0';
  }
  render() {
    const navigationLinks = [];
    for (const link of this.props.links) {
      navigationLinks.push(
        <li key={link}>
          <Link to={`/${link}`}>{link}</Link>
        </li>
      );
    }
    return (
      <nav className={styles.menu}>
        <div className={styles.menuWrapper}>
          <Link to="/">
            <img src={Logo} className={styles.logo} alt="home" />{' '}
          </Link>
          <ul>{navigationLinks}</ul>
          <div className={styles.bookingButton}> 
            <a href="https://www.expedia.com/Laramie-Hotels-Travel-Inn.h8038204.Hotel-Information"> 
              Book Now 
            </a> 
          </div> 

        </div>
      </nav>
    );
  }
}

export default Nav;

// <Link
// to="/book" //Change this to "/book when we roll over to in-house booking"
// className={styles.bookingButton}
// style={{ color: '#eeeeeef2' }}
// >