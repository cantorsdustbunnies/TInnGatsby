import React from 'react';
import styles from './AmenitiesCard.module.css';
import {
  FaCoffee,
  FaPaw,
  FaTelevision,
  FaPhone,
  FaWifi
} from 'react-icons/lib/fa';
import { MdChildFriendly, MdRoomService } from 'react-icons/lib/md';

const AmenitiesCard = ({ className }) => (
  <div className={`${styles.amenitiesGrid} ${className}`}>
    <AmenityCard caption="Free Wifi">
      <FaWifi width={80} height={80} />
    </AmenityCard>
    <AmenityCard caption={`Coffee`}>
      <FaCoffee width={80} height={80} />
    </AmenityCard>
    <AmenityCard caption={`FlatScreen w/ Cable`}>
      <FaTelevision width={80} height={80} />
    </AmenityCard>
    <AmenityCard caption={`Local Phone`}>
      <FaPhone width={80} height={80} />
    </AmenityCard>
    <AmenityCard caption={`Pet Friendly`}>
      <FaPaw width={80} height={80} />
    </AmenityCard>
    <AmenityCard caption={`Kid Friendly`}>
      <MdChildFriendly width={80} height={80} />
    </AmenityCard>
    <AmenityCard caption={`Daily Roomservice`}>
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
