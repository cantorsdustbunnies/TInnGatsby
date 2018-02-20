import React from 'react';
import styles from '../Cards.module.css';

const RightCard = ({ style, children, className }) => {
  return (
    <div style={style} className={className}>
      {children}
    </div>
  );
};

export default RightCard;
