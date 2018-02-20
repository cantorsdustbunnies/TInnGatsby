import React, { Component } from 'react';
import styles from './mobilePage.module.css';

const MobilePage = ({ children, tabColor, title, mobileBackground }) => {
  return (
    <section
      className={styles.mobilePage}
      style={{ background: mobileBackground }}
    >
      <div
        className={styles.mobilePageTab}
        style={{ backgroundColor: tabColor }}
      >
        <h1>{title}</h1>
      </div>
      <div className={styles.mobilePageContent}>{children}</div>
    </section>
  );
};

export default MobilePage;
