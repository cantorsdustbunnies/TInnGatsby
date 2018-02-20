import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import styles from './Nav.module.css';
import Logo from '../../images/Logo.svg';

const RemoBack = styled.div`
  width: 120px;
  height: 180px;
  clip-path: polygon(0 0, 100% 0, 100% 66%, 50% 100%, 0 66%);
  background: #f44336;
  display: flex;
  justify-content: center;
`;

const RemoTop = styled.div`
  width: 110px;
  height: 173px;
  clip-path: polygon(0 0, 100% 0, 100% 68%, 50% 100%, 0 68%);
  background: #ffffff;
  color: #656a54;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const RemoTextTop = styled.span`
  font-size: 2rem;
`;

const RemoTextBottom = styled.span`
  font-size: 1rem;
`;
const RemoBanner = () => (
  <RemoBack>
    <RemoTop>
      <RemoTextTop>Newly</RemoTextTop>
      <RemoTextBottom>Remodeled</RemoTextBottom>
    </RemoTop>
  </RemoBack>
);

class Nav extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.getElementById('main').style.marginLeft = '0';
  }
  render() {
    let navigationLinks = [];
    for (let link of this.props.links) {
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
            <img src={Logo} className={styles.logo} />{' '}
          </Link>
          <ul>{navigationLinks}</ul>
          <Link
            to="/book"
            className={styles.bookingButton}
            style={{ color: '#eeeeeef2' }}
          >
            Book Now
          </Link>
        </div>
      </nav>
    );
  }
}

export default Nav;
