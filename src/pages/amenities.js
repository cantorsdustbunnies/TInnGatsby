import React from 'react';
import RenderPage from '../components/Content/RenderPage/RenderPage';
import styles from './page-styles/amenities.module.css';
import AmenitiesCard from '../components/AmenitiesCard/AmenitiesCard';

export default ({ data }) => {
  return (
    <RenderPage tabColor="#D6B375" title="Amenities">
      <section className={styles.amenities}>
        <h1> Amenities </h1>
        <div className={styles.amenitiesBlurb} />
        <AmenitiesCard />
      </section>
    </RenderPage>
  );
};
