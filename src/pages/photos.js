import React from 'react';
import styles from './page-styles/photos.module.css';
import TInnGallery from '../components/TInnGallery';
import RenderPage from '../components/Content/RenderPage/RenderPage';
import Cards from '../components/Content/DesktopPage/Cards/Cards';

const Blurb = () => (
  <div>
    <p />
  </div>
);

const blurbStyle = {
  backgroundColor: '#238795',
  color: '#eceff1',
  flex: 0.5,
  boxShadow: '-2px 2px 6px #232323a2',
  padding: '10px'
};

const photoStyle = {
  margin: '2px',
  boxShadow: '2px 2px 6px #232323a2'
};

export default ({ data }) => {
  const thumbnails = data.allImageSharp.edges;

  const photos = thumbnails.map(image => {
    return {
      src: image.node.sizes.src,
      srcSet: image.node.sizes.srcSet.split('\n'),
      width: 3 * image.node.sizes.aspectRatio,
      height: 3,
      style: photoStyle,
      className: styles.filter
    };
  });

  return (
    <RenderPage tabColor="#238795" title="Gallery">
      <Cards
        LeftComponent={Blurb}
        RightComponent={() => <TInnGallery images={photos} />}
        leftStyle={blurbStyle}
        rightStyle={photoStyle}
        title="Gallery"
        style={{
          background: 'linear-gradient(to bottom, white, #232323)'
        }}
        color="#238795"
      />
    </RenderPage>
  );
};

export const query = graphql`
  query imgQuery {
    allImageSharp(filter: { id: { regex: "/images/hotel/" } }) {
      edges {
        node {
          ... on ImageSharp {
            sizes(maxWidth: 700) {
              ...GatsbyImageSharpSizes_tracedSVG
            }
          }
        }
      }
    }
  }
`;
