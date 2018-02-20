import React from 'react';
import styles from './page-styles/area-guide.module.css';
import Gallery from 'react-photo-gallery';
import Img from 'gatsby-image';
import Fade from 'react-reveal/Fade';
import RenderPage from '../components/Content/RenderPage/RenderPage';
import { FaAngleDown } from 'react-icons/lib/fa';
import styled from 'styled-components';

const Card = styled.div`
  background-color: #eceff1;
  height: 100%;
  flex: 1;
  margin: 20px;
  padding: 10px;
  max-width: 33vw;
`;

export default ({ data }) => {
  return (
    <RenderPage title="Area Guide" tabColor="#f44336">
      <section
        className={styles.guideHeader}
        style={{
          display: 'inline-block',
          height: 'calc(100vh - 60px)',
          width: '100vw',
          backgroundColor: 'white'
        }}
      >
        <Img
          sizes={data.downtown1.childImageSharp.sizes}
          style={{
            width: 'calc(100vw - 40vh)',
            float: 'left',
            height: '40vh'
          }}
        />

        <Img
          sizes={data.people1.childImageSharp.sizes}
          style={{
            width: '40vh',
            height: '40vh',
            float: 'left'
          }}
        />
        <Img
          sizes={data.people2.childImageSharp.sizes}
          style={{
            width: 'calc(100vw - 40vh)',
            float: 'right',
            height: '40vh'
          }}
        />
        <Img
          sizes={data.downtown2.childImageSharp.sizes}
          style={{
            width: '40vh',
            float: 'right',
            height: '40vh'
          }}
        />
        <div className={styles.downIconContainer}>
          <FaAngleDown className={styles.downIcon} width={60} height={60} />
        </div>
      </section>
      <section className={styles.areaGuide}>
        <h1> Welcome to Laramie </h1>
        <div className={styles.areaGuideIntro} style={{ display: 'flex' }}>
          <Fade right duration={1000}>
            <div>
              <p>
                Blue skies, fluffy clouds, fluffy snow. Home of the University
                of Wyoming and with plenty of places to camp, hunt, or hike.
                Welcome to "The Gem City of the Plains." - you might just fall
                in love.
              </p>
              <p>
                The Travel Inn is located within easy reach of all of Laramie's
                historic downtown shops full of the quaint, the curious and the
                downright useful. We've gathered a list of some of our favorite
                places in and around our beautiful city, so you can see why we
                love to call it home.
              </p>
            </div>
          </Fade>
          <Img
            sizes={data.downtown1.childImageSharp.sizes}
            style={{
              flex: 1,
              minWidth: '35vw',
              paddingTop: 10,
              marginTop: 20
            }}
          />
        </div>
      </section>
      <section className={styles.guideCardContainer}>
        <Card className={styles.eat}>
          <Img sizes={data.eating.childImageSharp.sizes} />
          <div className={styles.guideCardTitle}> 
            Restaurants / Bars
          </div> 
          <ul> 
            <li>
             
              <a href="https://goo.gl/maps/oHs3uT2ePSr">Boomers BBQ</a>
              
             
            </li>
            <li><a href="https://goo.gl/maps/uNtSuGk6ow12">J's Prairie Rose</a></li>
            <li><a href="https://goo.gl/maps/eXxpNmcEmd12">Sweet Melissa</a></li>
            <li><a href="https://goo.gl/maps/LJk5im6pakF2">The Ranger Sports Bar</a></li>
            <li><a href="https://goo.gl/maps/WG4sBwXo8Z62">Cowboy Saloon & Dance Hall</a></li>
            <li><a href="https://goo.gl/maps/FTNKaXYTiY92">LoveJoy's Bar & Grill</a></li>
            <li><a href="https://goo.gl/maps/sfhcs1p5RGC2">Jeffery's Bistro</a></li>
            <li><a href="https://goo.gl/maps/d9TnQYsx94p">Roxie's on Grand</a></li>
            <li><a href="https://goo.gl/maps/4PY8ssf3E2w">Grand Avenue Pizza</a></li>
            <li><a href="https://goo.gl/maps/DGLNFaaNvmm">Crowbar & Grill</a></li>
            <li><a href="https://goo.gl/maps/xw1WjJHaaRo">Buckhorn Bar</a></li>
            <li><a href="https://goo.gl/maps/V62m9WXipCn">Altitude Chophouse & Brewery</a></li> 
          </ul> 
        </Card>
        <Card className={styles.ski}>
          <Img sizes={data.skiing.childImageSharp.sizes} />
          <div className={styles.guideCardTitle}> 
            Recreation
          </div> 
          <ul> 
            <li><a href="https://goo.gl/maps/yCjwYevqJer">Veadauwoo Campground </a></li> 
            <li><a href="https://goo.gl/maps/eaFw9kChhKk">Pole Creek Campground</a></li> 
            <li><a href="https://goo.gl/maps/5XGWc3dtSp62">Happy Jack Reacreation Area</a></li>
            <li><a href="https://goo.gl/maps/rvDEUEDXBmy">Curt Gowdy State Park</a></li>  
            <li><a href="https://goo.gl/maps/hHt53pFXNsQ2">Snowy Range Ski Area</a></li> 
          </ul> 
            
        </Card>
        <Card className={styles.explore}>
          <Img sizes={data.museums.childImageSharp.sizes} />
          <div className={styles.guideCardTitle}> 
            Museums / Historic
          </div> 
          <ul> 
            <li><a href="http://www.laramiemuseum.org/">Laramie Plains Museum</a></li> 
            <li><a href="http://uwyo.edu/artmuseum">University of Wyoming Art Museum</a></li> 
            <li><a href="www.wyomingterritorialprison.com">Wyoming Territorial Prison</a></li> 
            <li><a href="http://thelouisaswainfoundation.com/the_wyoming_house_for_historic_women">Wyomingg Women's History Museum</a></li> 
            <li><a href="http://www.uwyo.edu/ahc/index.html">American Heritage Center</a></li> 
            <li><a href="www.uwyo.edu/geomuseum">University of Wyoming Geological Museum</a></li> 
          </ul> 

        </Card>
        <Card className={styles.sports}>
          <Img sizes={data.sports.childImageSharp.sizes} />
          <div className={styles.guideCardTitle}> 
            Sports 
          </div> 
          <ul> 
            <li><a href="http://gowyo.com/">War Memorial Stadium</a></li>
            <li><a href="https://goo.gl/maps/j868yYvEhzr">Arena-Auditorium</a></li>
            
          </ul> 
        </Card>

      </section>
    </RenderPage>
  );
};

export const query = graphql`
  query guideQuery {
    downtown1: file(relativePath: { eq: "images/laramie_one.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1000) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    downtown2: file(relativePath: { eq: "images/laramie_two.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 400) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    people1: file(relativePath: { eq: "images/laramie_three.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 400) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    people2: file(relativePath: { eq: "images/laramie_four.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1000) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    skiing: file(relativePath: { eq: "images/skiing.jpeg" }) {
      childImageSharp {
        sizes(maxWidth: 600) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    museums: file(relativePath: { eq: "images/museums.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 600) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    eating: file(relativePath: { eq: "images/eating.jpeg" }) {
      childImageSharp {
        sizes(maxWidth: 600) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    sports: file(relativePath: { eq: "images/sports.jpeg" }) {
      childImageSharp {
        sizes(maxWidth: 600) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`;
