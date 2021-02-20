import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import cardStyles from './card.module.css';

const Card = () => {
  const query = useStaticQuery(graphql`
    query Images {
      image: file(relativePath: {eq: "img.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className={ cardStyles.container }>
      <div>
        <Img fluid={ query.image.childImageSharp.fluid } className={ cardStyles.img } />
      </div>
      <div className={ cardStyles.about }>
        <h5 className={ cardStyles.h5 }>
          Sérgio Costa
        </h5>
        <h6 className={ cardStyles.h6 }>
            Software Engineer @nutrium. Ready to learn about any topic <span role="img" aria-label="nerd">🤓</span>.
            Loves <span role="img" aria-label="beer">🍻</span> and <span role="img" aria-label="coffee">☕</span>.
        </h6>
      </div>
    </div>
  );
};

export default Card;
