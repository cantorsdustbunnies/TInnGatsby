import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import Slider from '../components/Slider';
import BookingBar from '../components/BookingBar';
import styles from './page-styles/index.module.css';
import hotel_1 from '../images/hotel/hotel_fountain.jpg';
import { FaWifi } from 'react-icons/lib/fa';
import { MdPets } from 'react-icons/lib/md';
import AmenitiesCard from '../components/AmenitiesCard/AmenitiesCard';
import fridge from '../images/fridge.svg';
import TravelInnMap from '../images/area-map.png';
const IndexPage = ({ data }) => {
  return (
    <div>
      <section>
        <Slider images={data.allImageSharp}>
          <BookingBar />
        </Slider>
      </section>
      <section className={styles.main}>
        <h3 className={styles.blurb}>
          <div>
            Comfortable,<div>
              Affordable, <div className={styles.name}>Travel Inn</div>
            </div>
          </div>
        </h3>
        <div className={styles.tInnHistory}>
          <p>
            Serving travelers since 1961, our newly remodeled, affordable motor
            lodge rooms make travel what it should be: Simple. Situated just off
            of Snowy Range road on the edge of historic downtown. Our rooms are
            great for exploring Laramie's unique history and vibrant nightlife.
            Within walking distance to restaurants, museums, fitness and more
            you'll be glad you stayed with us. Family owned and operated, our
            friendly staff is happy to help with whatever you need.
          </p>
        </div>
      </section>
      <section className={styles.neighborhood}>
        <div className={styles.neighborhoodMap}>
          <img className={styles.map} src={TravelInnMap} />
        </div>
        <div className={styles.neighborhoodInfo}>
          <Img
            sizes={data.luggage.childImageSharp.sizes}
            className={styles.luggage}
          />

          <div className={styles.nInfoBlurb}>
            <h3> At the heart of it all </h3>
            <p>
              As the only hotel in downtown, our location makes it simple to
              plan your next move, Whether you're here for a game, or just need
              a bite to eat, it's all in walking distance.
            </p>
            <Link to="/area-guide">Take A Look</Link>
          </div>

          <div />
        </div>
      </section>
      <section className={styles.amenities}>
        <h2> Creature comforts </h2>
        <div>
          <div className={styles.aBlurb}>
            <h3> Travel with friends. </h3>
            <p>
              With the choice between a single king, or two queen sized beds,
              there's room for everyone
            </p>
            <Link to="/rooms"> Check out our rooms</Link>
          </div>
          <Img sizes={data.dog.childImageSharp.sizes} className={styles.dog} />
        </div>
        <AmenitiesCard className={styles.Acard} />
      </section>
    </div>
  );
};
export default IndexPage;

export const query = graphql`
  query sliderQuery {
    allImageSharp(filter: { id: { regex: "/images/hotel/" } }) {
      edges {
        node {
          ... on ImageSharp {
            sizes(maxWidth: 1600) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
    luggage: file(relativePath: { eq: "images/luggage.jpeg" }) {
      childImageSharp {
        sizes(maxWidth: 800) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    dog: file(relativePath: { eq: "images/dog.jpeg" }) {
      childImageSharp {
        sizes(maxWidth: 800) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`;
