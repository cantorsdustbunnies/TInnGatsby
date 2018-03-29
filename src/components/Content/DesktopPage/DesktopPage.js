import React from 'react';
import styles from './DesktopPage.module.css';

const DesktopPage = ({ children, className }) => {
  return (
    <section className={`${styles.DesktopSection} ${className}`}>
      {children}
    </section>
  );
};

export default DesktopPage;
