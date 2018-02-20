import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import Footer from '../components/Footer';
import './index.css';

import MobilePage from '../components/Content/MobilePage/mobilePage';

let links = ['photos', 'rooms', 'amenities', 'contact', 'area-guide'];

const TemplateWrapper = ({ children }) => {
  return (
    <div>
      <Helmet
        title="Travel Inn, Laramie"
        meta={[
          { name: 'description', content: '' },
          {
            name: 'keywords',
            content:
              'Laramie, Hotel, Travel, Rooms, Inn, Affordable, Comfy, Motel, Lodging, Stay'
          }
        ]}
      />
      <Header links={links} />
      <div
        style={{
          margin: '0 auto',

          transition: 'margin-left 1s ease-in-out',
          marginLeft: '0',
          paddingTop: 0,
          backgroundColor: '#232323',
          overflow: 'hidden',
          width: '100%'
        }}
        id="main"
      >
        {children()}
      </div>
      <Footer />
    </div>
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
