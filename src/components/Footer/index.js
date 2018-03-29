import React, { Component } from 'react';
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaTripadvisor,
  FaMapMarker,
  FaPhone
} from 'react-icons/lib/fa';
import Link from 'gatsby-link';
import styles from './index.module.css';
import styled from 'styled-components';

const FooterSection = styled.footer`
  position: relative;
  bottom: 0;
  width: 100%;
  height: auto;
  background: #232323;
  color: #eceff1;
  z-index: 0;
`;

const FooterTitle = styled.h3`
  color: #6f6a54;
  text-decoration: underline;
  width: 100%;
  border-bottom: 1px solid #eceff1;
  text-align: center;
`;

const FooterTopSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding-top: 100px;
  
  @media (max-width:800px){ 
    flex-direction: column; 
    justify-content: center; 
    align-items: center; 
  }
 
  
  & a {
    text-decoration: none;
    color: #f3b000;
    &:hover {
      text-decoration: underline;
    }


  
`;

const FooterItem = styled.div`
  max-width: 160px;
  @media (max-width: 800px) {
    padding: 20px;
    padding-bottom: 40px;
    width: 100%;
    max-width: 320px;
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  text-align: center;
  margin: 0;
`;

const FooterSocial = styled.div`
  position: relative;
  width: 220px;
  display: flex;
  justify-content: space-around;
  justify-self: center;
  left: -25%;
  a {
    color: #eceff1a2;
    transition: 800ms;
  }
  a:hover {
    color: white;
  }
  @media (max-width: 800px) {
    left: 0;
    jusitfy-content: space-between;
    width: 100%;
  }
`;

const FooterBottomSection = styled.div`
  height: 50px;
  text-align: center;
  font-size: 14px;
`;

const Footer = () => {
  return (
    <FooterSection>
      <FooterTopSection>
        <FooterItem>
          <FooterTitle> Get Here </FooterTitle>
          <p> 262 N. 3rd St. Laramie, Wy 82072 </p>
          <p style={{ fontSize: '14px' }}>
            <FaPhone /> (307) 745-4853
          </p>

          <a href="https://www.google.com/maps/dir//''/@41.3145296,-105.6288314,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x8768901d659efb2f:0x19764b07c325b155!2m2!1d-105.593812!2d41.3144704">
            <FaMapMarker /> Location
          </a>
        </FooterItem>

        <FooterItem>
          <FooterTitle> Menu </FooterTitle>
          <FooterLinks>
            <Link to="/photos">
              <li> Photos </li>
            </Link>
            <Link to="/rooms">
              <li> Rooms </li>
            </Link>
            <Link to="/contact">
              <li> Contact </li>
            </Link>
            <Link to="/area-guide">
              <li> Area Guide </li>
            </Link>
            <Link to="/book">
              <li> Book Now </li>
            </Link>
          </FooterLinks>
        </FooterItem>

        <FooterItem>
          <FooterTitle> Affiliations </FooterTitle>
          <p style={{ fontSize: '14px' }}>
            All images are property of their respective owners. Special thanks
            to <a href="http://bhpimaging.com/">BHP Imaging</a>, <br />
            <a href="http://www.laramiemainstreet.org/">Laramie MainStreet</a>
          </p>
          <FooterSocial>
            <a href="https://www.facebook.com/TravelInnLaramie/">
              <FaFacebookSquare width={50} height={50} />
            </a>
            <a href="https://www.tripadvisor.com/Hotel_Review-g60503-d3996562-Reviews-Travel_Inn-Laramie_Wyoming.html">
              <FaTripadvisor width={50} height={50} />
            </a>
          </FooterSocial>
        </FooterItem>
      </FooterTopSection>
      <hr />
      <FooterBottomSection>
        &copy; 2018 Travel Inn Laramie, All Rights reserved. Website by
        <a style={{ color: '#ff1493' }} href="http://www.polytopek.com">
           {' '}Polytopek
        </a>
      </FooterBottomSection>
    </FooterSection>
  );
};

export default Footer;
