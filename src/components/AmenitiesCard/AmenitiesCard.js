import React from 'react';
import styles from './AmenitiesCard.module.css';
import { FaCoffee, FaPaw, FaTelevision, FaWifi } from 'react-icons/lib/fa';
import { MdChildFriendly, MdRoomService } from 'react-icons/lib/md';

const AmenitiesCard = () => (
  <div className={styles.amenitiesGrid}>
    <AmenityCard caption="Free Wifi">
      <FaWifi width={80} height={80} />
    </AmenityCard>
    <AmenityCard caption="Coffee">
      <FaCoffee width={80} height={80} />
    </AmenityCard>
    <AmenityCard caption="Flat-Screen w/ Cable">
      <FaTelevision width={80} height={80} />
    </AmenityCard>
    <AmenityCard caption="Pet Friendly">
      <FaPaw width={80} height={80} />
    </AmenityCard>
    <AmenityCard caption="Kid Friendly">
      <MdChildFriendly width={80} height={80} />
    </AmenityCard>
    <AmenityCard caption="Daily Room Service">
      <MdRoomService width={80} height={80} />
    </AmenityCard>
  </div>
);

const AmenityCard = ({ children, caption }) => (
  <div className={styles.amenitiesGridItem}>
    {children}
    <div className={styles.amenitiesGridCaption}>{caption}</div>
  </div>
);

export default AmenitiesCard;
