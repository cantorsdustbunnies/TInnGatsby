import React from 'react';
import Link from 'gatsby-link';
import Fade from 'react-reveal/Fade';
import Img from 'gatsby-image';

import styles from './page-styles/rooms.module.css';
import AmenitiesCard from '../components/AmenitiesCard/AmenitiesCard';
import RenderPage from '../components/Content/RenderPage/RenderPage';

export default ({ data }) => {
  console.log('rooms data', data);
  return (
    <RenderPage tabColor="#9b59b6" title="Rooms">
      <section className={styles.roomsHeader}>
        <Img
          sizes={data.fountain.childImageSharp.sizes}
          className={styles.headerImage}
          style={{
            objectFit: 'cover',
            objectPostion: '0% 100%'
          }}
        />
        <div className={styles.headerTitle}>
          <div className={styles.headerTitleTitle}>
            <h3>
              <span>
                <strong>Comfortable </strong>rooms, <br />
                at an unbeatable price. <br />
                <strong>Guranteed.</strong>
              </span>
            </h3>
          </div>
          <div className={styles.headerTitleBlurb}>
            <span>
              {' '}
              Whether you're here for an event, or just passing through our
              <strong> Newly Remodled </strong>
              rooms and leisure area have just what you'll need. Each of our 30
              rooms come equipped with a flat screen tv, complementary coffee,
              free wifi, a microwave, and minifridge. Our location is perfect
              for exploring Laramie's historic downtown and vibrant night-life.
              For a full list of things to do check out the
              <Link to="/area-guide"> area-guide </Link>.
            </span>
          </div>
        </div>
      </section>
      <section className={styles.rooms}>
        <h1> Our rooms </h1>
        <div className={styles.roomContainer}>
          <Fade left duration={1000}>
            <section className={styles.singleSection}>
              <div className={styles.singleWrapper}>
                <Img sizes={data.single.childImageSharp.sizes} />
              </div>
              <div className={styles.roomCard}>
                <div className={styles.roomCardTitle}>
                  <h2> Single </h2>
                  <span>
                    There's nothing to be weary about now, traveller. Lay back,
                    relax. Know that our friendly staff is on hand for anything
                    you need.
                  </span>
                </div>
              </div>
            </section>
          </Fade>
          <Fade right duration={1000}>
            <section className={styles.doubleSection}>
              <div className={styles.doubleWrapper}>
                <Img sizes={data.double.childImageSharp.sizes} />
              </div>
              <div className={styles.roomCard}>
                <div className={styles.roomCardTitle}>
                  <h2> Double </h2>
                  <span>
                    {' '}
                    Room for all, give your crew the rest they deserve before
                    your next adventure.{' '}
                  </span>
                </div>
              </div>
            </section>
          </Fade>
        </div>
        <section className={styles.roomAmenitiesSection}>
          <h1> All rooms include: </h1>
          <AmenitiesCard />
        </section>
      </section>
    </RenderPage>
  );
};

export const query = graphql`
  query roomsQuery {
    bathroom: file(relativePath: { eq: "images/hotel/hotel_bathroom.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 800) {
          ...GatsbyImageSharpSizes_tracedSVG
        }
      }
    }
    double: file(relativePath: { eq: "images/hotel/hotel_double.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 800) {
          ...GatsbyImageSharpSizes_tracedSVG
        }
      }
    }
    single: file(relativePath: { eq: "images/hotel/hotel_single.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1800) {
          ...GatsbyImageSharpSizes_tracedSVG
        }
      }
    }
    entryway: file(relativePath: { eq: "images/hotel/hotel_entryway.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 800) {
          ...GatsbyImageSharpSizes_tracedSVG
        }
      }
    }
    fountain: file(relativePath: { eq: "images/hotel/hotel_fountain.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1600) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`;

{
  /* <Img
          sizes={data.bathroom.childImageSharp.sizes}
          style={{
            width: '400px',
            height: `${1 /
              data.bathroom.childImageSharp.sizes.aspectRatio *
              400}px`,
          }}
        />
        <Img
          sizes={data.double.childImageSharp.sizes}
          style={{
            width: '400px',
            height: `${1 /
              data.double.childImageSharp.sizes.aspectRatio *
              400}px`,
          }}
        />
        <Img
          sizes={data.single.childImageSharp.sizes}
          style={{
            position: 'absolute',
            zIndex: 2,
            width: '400px',
            height: `${1 /
              data.single.childImageSharp.sizes.aspectRatio *
              400}px`,
          }}
        />
        <Img
          sizes={data.entryway.childImageSharp.sizes}
          style={{
            width: '400px',
            height: `${1 /
              data.entryway.childImageSharp.sizes.aspectRatio *
              400}px`,
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        /> */
}
