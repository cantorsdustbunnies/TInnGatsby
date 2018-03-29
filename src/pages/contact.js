import React from 'react';
import styles from './page-styles/contact.module.css';
import { MdPlace, MdLocalPhone, MdMailOutline } from 'react-icons/lib/md';
import { FaTripadvisor, FaFacebookSquare } from 'react-icons/lib/fa';
import RenderPage from '../components/Content/RenderPage/RenderPage';
import Cards from '../components/Content/DesktopPage/Cards/Cards';

const ContactForm = () => (
  <form name="contact" action="https://formspree.io/Travelinnwy@yahoo.com" method="POST" className={styles.contactForm}>
    <h3> Have a question? </h3>
    <p>
      <label htmlFor="name">
        Name:<input type="text" name="name" />
      </label>
    </p>
    <p>
      <label htmlFor="_replyto">
        Email:<input type="email" name="_replyto" />
      </label>
    </p>
    <p>
      <label htmlFor="message">
        Message:<textarea name="message" />
      </label>
    </p>
    <p>
      <input type="submit" value="Send" className={styles.submitButton} /> 
    </p>
  </form>
);

const ContactDetails = () => (
  <div className={styles.contactDetails}>
    <h3> Get in touch </h3>
    <ul className={styles.contactList}>
      <li>
        <p className={styles.contactListIcon}>
          <MdPlace width={20} height={20} />
        </p>
        <p className={styles.contactItem}>262 N. 3rd St. Laramie, Wy 82072</p>
      </li>
      <li>
        <p className={styles.contactListIcon}>
          <MdLocalPhone width={20} height={20} />
        </p>
        <p className={styles.contactItem}> (307) 745-4853 </p>
      </li>
      <li>
        <p className={styles.contactListIcon}>
          <MdMailOutline width={20} height={20} />
        </p>
        <p className={styles.contactItem}>Travelinnwy@yahoo.com</p>
      </li>
    </ul>
    <div className={styles.contactMessageSocial}>
      <a href="https://www.tripadvisor.com/Hotel_Review-g60503-d3996562-Reviews-Travel_Inn-Laramie_Wyoming.html">
        <FaTripadvisor width={40} height={40} />
      </a>
      <a href="https://www.facebook.com/TravelInnLaramie/">
        <FaFacebookSquare width={40} height={40} />
      </a>
    </div>
  </div>
);

export default () => {
  return (
    <RenderPage
      tabColor="#29bb43"
      title="Contact Us"
      className={styles.contactPage}
      mobileBackground="linear-gradient(to top, #eceff1 10%, #232323 90%)"
    >
      <Cards
        LeftComponent={ContactDetails}
        RightComponent={ContactForm}
        color="#232323"
        className={styles.cardWrapper}
        style={{ maxWidth: '1000px' }}
      />
    </RenderPage>
  );
};
