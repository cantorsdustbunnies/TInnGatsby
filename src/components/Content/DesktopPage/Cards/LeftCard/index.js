import React from 'react';
import styles from '../Cards.module.css';

const LeftCard = ({ style, children, title, className }) => {
  return (
    <div style={style} className={className}>
      <h1>{title}</h1>
      {children}
    </div>
  );
};

export default LeftCard;
