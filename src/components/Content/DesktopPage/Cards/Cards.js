import React, { Component } from 'react';
import styles from './Cards.module.css';
import LeftCard from './LeftCard';
import RightCard from './RightCard';

const Cards = ({
  title,
  LeftComponent,
  RightComponent,
  leftStyle,
  rightStyle,
  style,
  leftClassName,
  rightClassName,
  className,
  color,
}) => {
  return (
    <div style={style} className={`${styles.cardsWrapper} ${className}`}>
      <LeftCard
        className={`${styles.leftCard} ${leftClassName}`}
        style={{
          ...leftStyle,
          backgroundColor: color,
          boxShadow: '-2px 2px 8px #232323a2',
        }}
        title={title}
      >
        <LeftComponent />
      </LeftCard>
      <RightCard
        className={`${styles.rightCard} ${rightClassName}`}
        style={{ ...rightStyle, boxShadow: '2px 2px 8px #232323a2' }}
      >
        <RightComponent />
      </RightCard>
    </div>
  );
};

export default Cards;
